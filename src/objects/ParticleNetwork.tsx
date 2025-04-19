import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canvasWidth = (canvas.width = window.innerWidth);
    let canvasHeight = (canvas.height = window.innerHeight);
    const numberOfParticles = Math.floor((canvasWidth * canvasHeight) / 10000);
    particlesRef.current = [];

    // Neon-ish colors
    const particleColors = ['#00F5A0', '#0EF', '#0FF', '#A0F', '#F0F'];

    // Create particles with slower speeds
    for (let i = 0; i < numberOfParticles; i++) {
      particlesRef.current.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Draw the particles
    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    // Update particle positions with bounce only
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges and keep within bounds
        if (particle.x <= 0) {
          particle.x = 0;
          particle.speedX = -particle.speedX;
        }
        if (particle.x >= canvasWidth) {
          particle.x = canvasWidth;
          particle.speedX = -particle.speedX;
        }
        if (particle.y <= 0) {
          particle.y = 0;
          particle.speedY = -particle.speedY;
        }
        if (particle.y >= canvasHeight) {
          particle.y = canvasHeight;
          particle.speedY = -particle.speedY;
        }
      });
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticleNetwork;
