import { useEffect, useRef } from "react";

/**
 * Subtle grid + food + snake background for the hero section.
 * Optimized for light/dark themes and low CPU usage.
 */
export default function HeroBgSnake() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const gridCanvas = document.createElement("canvas");
    gridRef.current = gridCanvas;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cell = 28; // grid cell size (px)

    type Vec = { x: number; y: number };

    // Theme-aware palette
    const palette = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        grid: isDark ? "rgba(148,163,184,0.10)" : "rgba(2,6,23,0.06)",
        food: "#22d3ee",
        snake: isDark ? "#a78bfa" : "#0ea5e9",
        bgFade: isDark ? "rgba(2,6,23,0.02)" : "rgba(255,255,255,0.03)",
      } as const;
    };
    let colors = palette();

    // Responsive canvas
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gridCanvas.width = width * dpr;
      gridCanvas.height = height * dpr;
      const g = gridCanvas.getContext("2d")!;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, width, height);
      // Grid background
      g.strokeStyle = colors.grid;
      g.lineWidth = 1;
      g.beginPath();
      for (let x = 0; x <= width; x += cell) {
        g.moveTo(x + 0.5, 0);
        g.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += cell) {
        g.moveTo(0, y + 0.5);
        g.lineTo(width, y + 0.5);
      }
      g.stroke();
    };

  // Food points
  const maxFood = 90;
    const foods: Vec[] = [];
    const randCell = () => ({
      x: Math.floor((Math.random() * width) / cell) * cell + cell / 2,
      y: Math.floor((Math.random() * height) / cell) * cell + cell / 2,
    });
    const populateFoods = () => {
      foods.length = 0;
      for (let i = 0; i < maxFood; i++) foods.push(randCell());
    };

    // Snake state
    // Grid-based snake: moves cell-to-cell along lines
    let cols = 0, rows = 0;
    const toCenter = (ci: number, rj: number): Vec => ({ x: ci * cell + cell / 2, y: rj * cell + cell / 2 });
    const clampCell = (ci: number, rj: number) => ({ i: Math.max(0, Math.min(cols - 1, ci)), j: Math.max(0, Math.min(rows - 1, rj)) });

    let headCell = { i: 2, j: 2 };
    let target: Vec = { x: 0, y: 0 };
    const tail: Vec[] = []; // smoothed positions for rendering
    const maxTail = 80;
    let snakeLength = 12;
    let t = 0; // time

    const recalcGrid = () => {
      cols = Math.max(1, Math.floor(width / cell));
      rows = Math.max(1, Math.floor(height / cell));
      headCell = clampCell(headCell.i, headCell.j);
    };

    const pickTarget = () => {
      const hx = headCell.i * cell + cell / 2;
      const hy = headCell.j * cell + cell / 2;
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < foods.length; i++) {
        const f = foods[i];
        const d = Math.abs(f.x - hx) + Math.abs(f.y - hy);
        if (d < bestDist) { bestDist = d; bestIdx = i; }
      }
      target = foods[bestIdx] || randCell();
    };

    // Step timing
    let lastStep = -1e9; // force immediate first step
    let stepDuration = 70; // ms per cell (slightly slower to avoid jitter)
    let prevCenter = toCenter(headCell.i, headCell.j);
    let nextCenter = prevCenter;
    let animStart = 0;

    let prevDir = { di: 1, dj: 0 };
    const chooseNextCell = () => {
      // Manhattan direction toward target
      const tx = Math.round((target.x - cell / 2) / cell);
      const ty = Math.round((target.y - cell / 2) / cell);

      // Candidate directions (no immediate reversal)
      const dirs = [
        { di: 1, dj: 0 },
        { di: -1, dj: 0 },
        { di: 0, dj: 1 },
        { di: 0, dj: -1 },
      ];
      const allowed = dirs.filter((d) => !(d.di === -prevDir.di && d.dj === -prevDir.dj));

      // Score each allowed direction by resulting Manhattan distance to target cell
      const dx = Math.sign(tx - headCell.i);
      const dy = Math.sign(ty - headCell.j);
      let best: Array<{ di: number; dj: number; dist: number }> = [];
      let bestDist = Number.POSITIVE_INFINITY;
      for (const d of allowed) {
        const ni = (headCell.i + d.di + cols) % cols;
        const nj = (headCell.j + d.dj + rows) % rows;
        const dist = Math.abs(tx - ni) + Math.abs(ty - nj);
        if (dist < bestDist) {
          bestDist = dist;
          best = [{ di: d.di, dj: d.dj, dist }];
        } else if (dist === bestDist) {
          best.push({ di: d.di, dj: d.dj, dist });
        }
      }

      // Exploration probability (disabled to always chase food)
      const epsilon = 0.0;
      let chosen = null as null | { di: number; dj: number };
      if (Math.random() < epsilon) {
        chosen = allowed[Math.floor(Math.random() * allowed.length)] || allowed[0];
      } else {
        const pick = best[Math.floor(Math.random() * best.length)] || best[0];
        chosen = pick ? { di: pick.di, dj: pick.dj } : allowed[0];
      }

      // Pick the next cell; wrap for endless movement
      let next = { i: headCell.i, j: headCell.j };
      const ni = (headCell.i + chosen!.di + cols) % cols;
      const nj = (headCell.j + chosen!.dj + rows) % rows;
      next = { i: ni, j: nj };
      prevDir = chosen!;

      headCell = next;
      prevCenter = nextCenter;
      nextCenter = toCenter(headCell.i, headCell.j);
      animStart = performance.now();
    };

    const step = () => {
      const now = performance.now();
      t += 1 / 60;
      ctx.clearRect(0, 0, width, height);
      // Grid layer
      ctx.drawImage(gridCanvas, 0, 0, width * dpr, height * dpr, 0, 0, width, height);

      // Light film for calmness
      ctx.fillStyle = colors.bgFade;
      ctx.fillRect(0, 0, width, height);

      // Draw foods as blue squares snapped to grid
      const size = 7;
      ctx.fillStyle = colors.food;
      for (const f of foods) {
        ctx.fillRect(f.x - size, f.y - size, size * 2, size * 2);
      }

      // Time to take a new grid step
      if (now - lastStep > stepDuration) {
        lastStep = now;
        chooseNextCell();
      }

      // Interpolate position between prevCenter and nextCenter
      let p = (now - animStart) / stepDuration;
      if (p > 1.2) p = 1; // safety clamp in case a frame is dropped
      const head = { x: prevCenter.x + (nextCenter.x - prevCenter.x) * p, y: prevCenter.y + (nextCenter.y - prevCenter.y) * p };
      tail.push(head);
      while (tail.length > Math.min(maxTail, snakeLength)) tail.shift();

      // If reached the cell center, check for eating
      if (p >= 1 && Math.hypot(nextCenter.x - target.x, nextCenter.y - target.y) < 1) {
        const idx = foods.findIndex((f) => Math.abs(f.x - target.x) < 1 && Math.abs(f.y - target.y) < 1);
        if (idx >= 0) foods.splice(idx, 1);
        foods.push(randCell());
        snakeLength = Math.min(maxTail, snakeLength + 6);
        pickTarget();
      }

      // Draw snake as grid-aligned rectangles
      const segSize = Math.max(12, Math.min(18, Math.floor(cell * 0.6)));
      for (let i = 0; i < tail.length; i++) {
        const s = tail[i];
        const k = i / tail.length;
        const w = segSize * (0.8 + 0.4 * k);
        const h = segSize * 0.7;
        // glow for visibility on both themes
        ctx.fillStyle = colors.snake;
        ctx.shadowColor = colors.snake;
        ctx.shadowBlur = 6;
        ctx.fillRect(s.x - w / 2, s.y - h / 2, w, h);
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(step);
    };

    const handleTheme = () => {
      colors = palette();
      resize();
    };

    const obs = new MutationObserver((m) => {
      for (const r of m) {
        if (r.attributeName === "class") handleTheme();
      }
    });
    obs.observe(document.documentElement, { attributes: true });

    const onResize = () => { resize(); recalcGrid(); };
    window.addEventListener("resize", onResize);

    // Init
    resize();
    recalcGrid();
    populateFoods();
    pickTarget();
    step();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,1))]"
      aria-hidden="true"
    />
  );
}


