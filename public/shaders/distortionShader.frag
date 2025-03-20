precision mediump float;

uniform vec2 uMouse;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uTime;
uniform float uIntensity;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  
  // Calculate distance from mouse position
  vec2 mouse = uMouse / uResolution.xy;
  float distToMouse = distance(uv, mouse);
  
  // Create distortion effect
  float maxDist = 0.2;
  float strength = max(0.0, 1.0 - distToMouse / maxDist);
  
  // Apply lens distortion
  vec2 dir = normalize(uv - mouse);
  vec2 offset = dir * strength * strength * uIntensity;
  vec2 distortedUV = uv - offset;
  
  // Add some subtle wave effect
  distortedUV += 0.002 * sin(distortedUV.x * 10.0 + uTime) * strength;
  
  // Sample the texture with our distorted coordinates
  vec4 color = texture2D(uTexture, distortedUV);
  
  gl_FragColor = color;
}