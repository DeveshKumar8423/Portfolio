import SectionHeading from "@/components/ui/section-heading";
import { Brain, Network, Bot, Heart, Workflow, PenTool, Microscope, Code } from "lucide-react";

export default function ExpertiseSection() {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms and statistical modeling for intelligent systems",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Neural networks and complex pattern recognition",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Bot,
      title: "Agentic AI",
      description: "Autonomous systems and intelligent agent design",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Psychology",
      description: "Human behavior analysis and counseling methodologies",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Workflow,
      title: "Protocol Design",
      description: "Systematic frameworks for complex problem solving",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: PenTool,
      title: "Writing",
      description: "Technical documentation and research communication",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Microscope,
      title: "Research",
      description: "Systematic inquiry and academic investigation",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Community-driven development and collaboration",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section id="expertise" className="py-20 relative overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-background"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Expertise"
          subtitle="Bridging technical excellence with human-centered understanding"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group modern-card p-8 rounded-3xl text-center card-hover glow-on-hover animate-stagger"
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`skill-card-${index}`}
              >
                <div
                  className={`w-20 h-20 ${skill.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`${skill.color} h-10 w-10 group-hover:rotate-6 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
