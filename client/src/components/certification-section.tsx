import SectionHeading from "@/components/ui/section-heading";
import { Award, Brain, BookOpen, Bot, Heart, Users, Lightbulb, CheckCircle } from "lucide-react";

const aiCerts = [
  {
    title: "Mathematics: Basics to Advanced for Data Science and GenAI",
    description: "Built strong mathematical foundations for advanced data science and generative AI applications.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Complete Generative AI Course with LangChain and Hugging Face",
    description: "Developed skills in building advanced generative AI pipelines using LangChain and Hugging Face Transformers.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Data Analytics Masters – From Basics to Advanced",
    description: "Covered complete data analytics workflows including data preprocessing, visualization, and predictive modeling.",
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "PyTorch for Deep Learning Bootcamp",
    description: "Gained practical skills in building and optimizing deep learning models with PyTorch.",
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Machine Learning A-Z: AI and Python",
    description: "Completed comprehensive training in machine learning concepts, model deployment, and Python workflows.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10"
  }
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
