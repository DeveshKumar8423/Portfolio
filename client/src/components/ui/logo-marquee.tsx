import React from "react";

export type LogoItem = {
  name: string;
  src: string;
  href?: string;
};

interface LogoMarqueeProps {
  items: LogoItem[];
  speedMs?: number;
}

/**
 * Seamless, accessible auto-scrolling logo marquee.
 * - Pauses on hover/focus
 * - Grayscale to color on hover
 */
export default function LogoMarquee({ items, speedMs = 18000 }: LogoMarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden group">
      <div
        className="flex gap-12 items-center whitespace-nowrap animate-marquee will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speedMs}ms` }}
        aria-label="organization logos"
      >
        {row.map((item, i) => {
          const img = (
            <img
              src={item.src}
              alt={item.name}
              className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              loading="lazy"
            />
          );
          return (
            <div key={`${item.name}-${i}`} className="shrink-0">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.name}>
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


