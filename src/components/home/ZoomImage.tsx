"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ZoomedImage = ({ className, imgSrc }: { className?: string; imgSrc: any }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className={cn("lg:bg-hero backdrop-blur-xl overflow-hidden", className)} onMouseMove={handleMouseMove}>
      <Image
        src={imgSrc}
        quality={100}
        loading="lazy"
        placeholder="blur"
        alt="Hero"
        style={{
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        className="transition-transform duration-500 ease-in-out transform md:hover:scale-[1.5] cursor-zoom-in shadow-lg md:w-full object-cover"
      />
    </div>
  );
};

export default ZoomedImage;
