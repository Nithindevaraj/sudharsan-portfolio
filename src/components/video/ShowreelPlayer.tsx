"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShowreelPlayerProps {
  url?: string;
  thumbnail?: string;
}

export default function ShowreelPlayer({
  url = "/videos/placeholder.mp4",
  thumbnail = "/images/showreel-thumb.jpg",
}: ShowreelPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full aspect-video bg-secondary rounded-xl" />;

  const togglePlay = () => {
    setPlaying(!playing);
    setHasInteracted(true);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(!muted);
  };

  const Player = ReactPlayer as any;

  return (
    <div 
      className="group relative w-full aspect-video bg-background rounded-xl overflow-hidden cursor-pointer border border-border"
      onClick={togglePlay}
    >
      {!hasInteracted && (
        <div 
          className="absolute inset-0 z-20 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
      )}

      <Player
        url={url}
        playing={playing}
        muted={muted}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        config={{
          file: {
            attributes: {
              style: { width: '100%', height: '100%', objectFit: 'cover' }
            }
          }
        } as any}
        onEnded={() => setPlaying(false)}
      />

      {/* Controls Overlay */}
      <div className={cn(
        "absolute inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300",
        playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
      )}>
        <div className="flex justify-end">
          {hasInteracted && (
            <button 
              onClick={toggleMute}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-white/10 transition-colors"
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          {hasInteracted && (
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:bg-white/10 transition-colors">
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
