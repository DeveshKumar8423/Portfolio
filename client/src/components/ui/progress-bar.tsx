import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
}

export default function ProgressBar({ value, color = "bg-primary" }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
      <div
        className={`h-full ${color} rounded-full transition-all duration-700`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
