"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

interface HeroVideoProps {
  url?: string;
  poster?: string;
}

export default function HeroVideo({ 
  url = "/videos/placeholder.mp4", 
  poster = "/images/hero-poster.jpg" 
}: HeroVideoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        className="absolute inset-0 w-full h-full -z-20 bg-secondary bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />
    );
  }

  const Player = ReactPlayer as any;

  return (
    <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-background/60 z-10" /> {/* Overlay */}
      <Player
        url={url}
        playing
        loop
        muted
        playsinline
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
        config={{
          file: {
            attributes: {
              style: { width: '100%', height: '100%', objectFit: 'cover' }
            }
          }
        } as any}
      />
    </div>
  );
}
