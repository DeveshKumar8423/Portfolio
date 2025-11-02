import SectionHeading from "@/components/ui/section-heading";
import { Award, Brain, BookOpen, Bot, Heart, Users, Lightbulb, CheckCircle } from "lucide-react";

// AI & Data Science (5 Udemy + 3 Oracle)
const aiCerts = [
  // Udemy (5)
  {
    title: "Mathematics for Data Science & GenAI (Udemy)",
    description: "Linear algebra, calculus, probability for modern AI and GenAI foundations.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Generative AI with LangChain & HF (Udemy)",
    description: "Built end‑to‑end GenAI apps using LangChain, Hugging Face, and vector stores.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Data Analytics Masters (Udemy)",
    description: "Data wrangling, visualization, dashboards, and predictive analytics workflows.",
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "PyTorch Deep Learning Bootcamp (Udemy)",
    description: "CNNs, RNNs, training loops, and optimization with real projects in PyTorch.",
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Machine Learning A‑Z with Python (Udemy)",
    description: "Supervised/unsupervised ML, model evaluation, and deployment best practices.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  // Oracle (3)
  {
    title: "Oracle AI Foundations",
    description: "Core AI concepts and responsible AI practices within Oracle cloud ecosystem.",
    icon: Brain,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Oracle Data Science Fundamentals",
    description: "Data science lifecycle, feature engineering, and MLOps on OCI tooling.",
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const psychCerts = [
  {
    title: "Complete Personal Transformation Masterclass",
    description: "Learned goal setting, procrastination management, mindset, productivity, meditation, confidence, nutrition, persuasion, and book summaries on personal development, business, relationships, and health.",
    icon: Users,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Dark Psychology",
    description: "Explored manipulation, NLP, personality types, emotional triggers, trust issues, anger management, and the psychology behind influence and persuasion.",
    icon: Heart,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Complete Personal Development Course – 22 Courses in 1",
    description: "Learned communication, REBT, NLP, Zen teachings, stress management, coping skills, leadership, motivation, parenting, and networking.",
    icon: CheckCircle,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Diploma Training Course in Modern Applied Psychology (DiMAP)",
    description: "Studied foundational and applied psychology including behavioral, cognitive, humanistic, and psychoanalytical frameworks.",
    icon: Heart,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Counseling Skills Certificate Course (Beginner to Advanced)",
    description: "Acquired counseling techniques including active listening, rapport building, and therapeutic frameworks through role-plays and case studies.",
    icon: Users,
    color: "text-accent",
    bg: "bg-accent/10"
  }
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Certifications"
          subtitle="Recognized training in AI, Data Science, and Psychology"
        />
        <div className="space-y-12">
          {/* AI Certifications Row */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary text-center">AI & Data Science</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {aiCerts.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="group modern-card p-6 rounded-2xl card-hover flex flex-col items-center text-center w-full md:w-64"
                  >
                    <div className={`w-14 h-14 ${cert.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`${cert.color} h-7 w-7`} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Psychology Certifications Row */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent text-center">Psychology & Personal Development</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {psychCerts.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="group modern-card p-6 rounded-2xl card-hover flex flex-col items-center text-center w-full md:w-64"
                  >
                    <div className={`w-14 h-14 ${cert.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`${cert.color} h-7 w-7`} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
