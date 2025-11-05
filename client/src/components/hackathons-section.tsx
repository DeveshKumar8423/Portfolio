import SectionHeading from "@/components/ui/section-heading";
import { Award, Zap, Globe } from "lucide-react";

export default function HackathonsSection() {
  const items = [
    {
      icon: Award,
      title: "Hackstasy Hackathon, SRM Modinagar",
      body:
        "Built a Vision Transformer (ViT)-based AI model to classify food images and recommend healthier eating options, demonstrating innovation in AI-driven nutrition awareness.",
    },
    {
      icon: Zap,
      title: "Smart India Hackathon (SIH) 2025",
      body:
        "Advanced to the final round under the Smart and Sustainable Living / Renewable & Sustainable Energy theme for developing the “Carbon Prompting Playground”, a web tool promoting eco-conscious AI usage through prompt optimization and carbon tracking.",
    },
    {
      icon: Globe,
      title: "Cyber Cup 5.0, Amity University",
      body:
        "Secured 2nd Runner-Up (3rd Position) for building an AI-powered intelligent carpooling system that optimizes routes to reduce traffic congestion and carbon emissions.",
    },
    {
      icon: Award,
      title: "Hacktoberfest 2025",
      body:
        "Achieved Supercontributor status among the first 10,000 global participants by making 6+ accepted pull requests in open-source projects.",
    },
    {
      icon: Zap,
      title: "GGSIPU USAR Hackathon 2025",
      body:
        "Participated and showcased the 'Carbon Prompting Playground', a web-based tool designed to promote eco-conscious AI usage through prompt optimization and real-time carbon tracking.",
    },
  ];

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Hackathons" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group modern-card p-6 rounded-3xl card-hover glow-on-hover animate-stagger h-full flex"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
