import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GetInTouchBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-2xl rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl flex items-center justify-between px-6 py-3 animate-fade-in">
      <div className="flex items-center gap-3">
        <Send className="text-primary w-6 h-6 animate-bounce" />
        <span className="font-semibold text-lg text-foreground">Let's build something great together!</span>
      </div>
      <Button
        asChild
        className="rounded-xl px-6 py-2 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
      >
        <a href="#contact">Get in Touch</a>
      </Button>
    </div>
  );
}