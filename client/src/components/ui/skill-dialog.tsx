import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React from "react";

interface SkillDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  group: {
    title: string;
    items: string[];
    icon: React.ElementType;
    color: string;
    bg: string;
  } | null;
}

export default function SkillDialog({ open, onOpenChange, group }: SkillDialogProps) {
  if (!group) return null;
  const Icon = group.icon;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className={`w-10 h-10 ${group.bg} rounded-xl flex items-center justify-center`}>
              <Icon className={`${group.color} h-7 w-7`} />
            </span>
            {group.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 mt-4">
          {group.items.map((item, i) => (
            <Badge key={i} className="bg-muted text-foreground border border-border px-3 py-1 rounded-full text-sm font-medium">
              {item}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
