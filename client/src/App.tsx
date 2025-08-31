import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Scroll progress bar */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
          <div
            className="h-full bg-primary transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Router />
        {/* Back to top button */}
        <button
          aria-label="Back to top"
          onClick={backToTop}
          className="fixed bottom-6 right-6 z-50 rounded-xl border border-border bg-background/70 backdrop-blur-md px-3 py-2 shadow-lg hover:bg-primary/10 text-sm font-medium text-foreground"
        >
          Top
        </button>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
