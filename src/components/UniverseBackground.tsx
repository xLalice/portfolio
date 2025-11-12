import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface UniverseBackgroundProps {
  starColor?: string;
  starCount?: number;
  minStarSize?: number;
  maxStarSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  
  minSpeed?: number;
  maxSpeed?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'random';
  
  interactionDistance?: number;
  interactionStrength?: number;
  mouseEffect?: 'attract' | 'repel' | 'brighten' | 'none';
  
  backgroundColor?: string;
  
  enableAnimation?: boolean;
}

const UniverseBackground: React.FC<UniverseBackgroundProps> = ({
  starColor = 'rgba(255, 255, 255, {opacity})',
  starCount,
  minStarSize = 0.5,
  maxStarSize = 2.5,
  minOpacity = 0.2,
  maxOpacity = 1.0,
  minSpeed = 0.01,
  maxSpeed = 0.06,
  direction = 'down',
  interactionDistance,
  interactionStrength = 1,
  mouseEffect = 'brighten',
  backgroundColor = 'rgb(0, 0, 0)',
  enableAnimation = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 }); // Start mouse off-screen
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const isInitializedRef = useRef<boolean>(false);

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const count = starCount || Math.floor((width * height) / 3000);
    
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxStarSize - minStarSize) + minStarSize,
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed
      });
    }
    
    starsRef.current = stars;
    isInitializedRef.current = true;
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
        
        if (dimensions.width !== width || dimensions.height !== height || !isInitializedRef.current) {
          initStars(width, height);
        }
      }
    };

    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, minStarSize, maxStarSize, minOpacity, maxOpacity, minSpeed, maxSpeed]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!enableAnimation || !isInitializedRef.current) return;
    
    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      const maxDistance = interactionDistance || 
        Math.sqrt(dimensions.width * dimensions.width + dimensions.height * dimensions.height) / 5;
      
      starsRef.current.forEach((star, index) => {
        const dx = star.x - mousePosition.x;
        const dy = star.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let dynamicOpacity = star.opacity;
        if (distance < maxDistance && mouseEffect === 'brighten') {
          dynamicOpacity = Math.min(1, star.opacity * (1 + interactionStrength * (maxDistance - distance) / maxDistance));
        }
        
        ctx.fillStyle = starColor.replace('{opacity}', dynamicOpacity.toString());
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        let newX = star.x;
        let newY = star.y;
        
        switch (direction) {
          case 'up':
            newY -= star.speed;
            if (newY < 0) newY = dimensions.height;
            break;
          case 'down':
            newY += star.speed;
            if (newY > dimensions.height) newY = 0;
            break;
          case 'left':
            newX -= star.speed;
            if (newX < 0) newX = dimensions.width;
            break;
          case 'right':
            newX += star.speed;
            if (newX > dimensions.width) newX = 0;
            break;
          case 'random':
            const angle = (star.size * 100) % (Math.PI * 2);
            newX += Math.cos(angle) * star.speed;
            newY += Math.sin(angle) * star.speed;
            if (newX < 0) newX = dimensions.width;
            if (newX > dimensions.width) newX = 0;
            if (newY < 0) newY = dimensions.height;
            if (newY > dimensions.height) newY = 0;
            break;
        }
        
        star.x = newX;
        star.y = newY;
        
        if (distance < maxDistance) {
          if (mouseEffect === 'attract') {
            const moveFactor = Math.min(0.5, (maxDistance - distance) / (maxDistance * 50)) * interactionStrength;
            star.x -= dx * moveFactor;
            star.y -= dy * moveFactor;
          } else if (mouseEffect === 'repel') {
            const moveFactor = (maxDistance - distance) / (maxDistance * 50) * interactionStrength;
            star.x += dx * moveFactor;
            star.y += dy * moveFactor;
          }
        }
        
        if (star.x < 0) star.x = 0;
        if (star.x > dimensions.width) star.x = dimensions.width;
        if (star.y < 0) star.y = 0;
        if (star.y > dimensions.height) star.y = dimensions.height;
        
        starsRef.current[index] = star;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    dimensions, 
    mousePosition, 
    backgroundColor, 
    starColor, 
    direction, 
    interactionDistance, 
    interactionStrength, 
    mouseEffect, 
    enableAnimation,
    minSpeed,
    maxSpeed
  ]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default UniverseBackground;