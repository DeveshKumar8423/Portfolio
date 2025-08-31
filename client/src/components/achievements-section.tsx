import SectionHeading from "@/components/ui/section-heading";
import { Award, Target, Sparkles } from "lucide-react";

export default function AchievementsSection() {
  const items = [
    {
      icon: Award,
      title: "500+ DSA Problems Solved",
      body:
        "Across LeetCode and CodeStudio (210 LC, 206 CS). Achieved Rank 2 in college on CodeStudio.",
    },
    {
      icon: Sparkles,
      title: "10‑Point Self‑Exploration Protocol",
      body:
        "Designed, practiced, and reviewed with students; documented via an autoethnographic research paper using journaling and self‑reflection.",
    },
    {
      icon: Target,
      title: "Global Possibility Network (Penn GSE)",
      body:
        "Connected with the Global Possibility Network at the University of Pennsylvania for interdisciplinary exchange and personal development initiatives.",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background with gradient and floating elements for consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-background"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  {/* Achievements heading removed as requested */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group modern-card p-8 rounded-3xl text-center card-hover glow-on-hover animate-stagger"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-7">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


