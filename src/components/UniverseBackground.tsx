import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  baseX: number; // Added to help with "spring" return logic
  baseY: number;
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
  starColor = '255, 255, 255',
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const mousePositionRef = useRef({ x: -1000, y: -1000 });
  
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const isInitializedRef = useRef<boolean>(false);

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const count = starCount || Math.floor((width * height) / 3000);
    
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      stars.push({
        x,
        y,
        baseX: x, 
        baseY: y,
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
        if (width !== dimensions.width || height !== dimensions.height) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            setDimensions({ width, height });
            initStars(width, height);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [starCount, maxStarSize, minSpeed]); 

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!enableAnimation || !isInitializedRef.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      const maxDistance = interactionDistance || 150;
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;
      
      
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        
        let moveX = 0;
        let moveY = 0;
        
        switch (direction) {
            case 'up': moveY = -star.speed; break;
            case 'down': moveY = star.speed; break;
            case 'left': moveX = -star.speed; break;
            case 'right': moveX = star.speed; break;
        }

        star.x += moveX;
        star.y += moveY;

        if (star.x < 0) star.x = dimensions.width;
        if (star.x > dimensions.width) star.x = 0;
        if (star.y < 0) star.y = dimensions.height;
        if (star.y > dimensions.height) star.y = 0;

        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let dynamicOpacity = star.opacity;
        
        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance; 
            
            if (mouseEffect === 'brighten') {
                dynamicOpacity = Math.min(1, star.opacity + force);
            } else if (mouseEffect === 'attract') {
                star.x += (dx / distance) * force * interactionStrength;
                star.y += (dy / distance) * force * interactionStrength;
            } else if (mouseEffect === 'repel') {
                star.x -= (dx / distance) * force * interactionStrength;
                star.y -= (dy / distance) * force * interactionStrength;
            }
        }

        ctx.fillStyle = `rgba(${starColor}, ${dynamicOpacity})`;
        ctx.beginPath();
        ctx.rect(star.x, star.y, star.size, star.size);
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    dimensions, 
    backgroundColor, 
    starColor, 
    direction, 
    interactionDistance, 
    interactionStrength, 
    mouseEffect, 
    enableAnimation
  ]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" 
    />
  );
};

export default UniverseBackground;