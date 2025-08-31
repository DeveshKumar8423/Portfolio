

import SectionHeading from "@/components/ui/section-heading";
import { Code, Cpu, BookOpen, Users, Brain, Heart, Settings, MessageCircle, Lightbulb, Layers, PenTool, CheckCircle, Eye } from "lucide-react";
import ProgressBar from "@/components/ui/progress-bar";
import SkillDialog from "@/components/ui/skill-dialog";
import { useState } from "react";

type SkillGroup = {
  title: string;
  items: string[];
  icon: React.ElementType;
  color: string;
  bg: string;
};

const GROUPS: SkillGroup[] = [
  {
    title: "Data & Analytics",
    items: [
      "SQL Querying",
      "Data Visualization",
      "BI Reporting",
      "A/B Testing",
      "Hypothesis Testing",
      "Data Wrangling",
      "ETL Pipelines",
    ],
    icon: Layers, // You can change this icon if you want a different one
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "SQL"],
    icon: Code,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "IDEs",
    items: ["VS Code", "Google Colab", "Jupyter Notebook"],
    icon: Cpu,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Machine Learning",
    items: [
      "Data Preprocessing", "Exploratory Data Analysis", "Computer Vision",
      "NLP", "Clustering", "Predictive Models", "Prompt Engineering",
      "Hyperparameter Tuning", "Retrieval Augmented Generation",
    ],
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Frameworks",
    items: [
      "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib",
      "Scikit‑Learn", "LangChain", "Hugging Face",
    ],
    icon: Layers,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Tools",
    items: ["MS Excel", "Tableau", "Power BI"],
    icon: Settings,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Software Development",
    items: [
      "OOP", "Data Structures & Algorithms", "Version Control", "ML System Design",
    ],
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Counseling Techniques",
    items: [
      "Communication", "Active Listening", "Conflict Resolution", "Observation",
      "Emotional Intelligence", "Meditation", "Visualization",
      "Guided Imagery", "Self‑Exploration", "Journaling",
    ],
    icon: MessageCircle,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Therapeutic Frameworks",
    items: [
      "REBT", "NLP", "Narrative Therapy", "Person‑Centered Therapy", "CBT",
    ],
    icon: Heart,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Psychology Knowledge",
    items: [
      "Schools of Thought", "Life Skills", "Literature Review",
      "Interview & Survey Design", "Protocol Evaluation",
    ],
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Workshop & Facilitation",
    items: [
      "Curriculum Design", "Workshop Planning", "Reflective Dialogue Structuring",
    ],
    icon: PenTool,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership", "Networking", "Critical Thinking", "Problem‑Solving",
      "Creativity", "Work Ethic", "Time Management", "Attention to Detail",
      "Collaboration", "Ethical Judgement",
    ],
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10"
  },
];


function SkillsSection() {
  const [selected, setSelected] = useState<SkillGroup | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-background"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Skills"
          subtitle="A blend of AI/ML engineering and human‑centered psychology"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {GROUPS.map((group, i) => {
            const Icon = group.icon;
            const progress = 70 + (i * 7) % 25;
            return (
              <div
                key={group.title}
                className="group modern-card aspect-square flex flex-col justify-center items-center p-2 sm:p-3 md:p-4 lg:p-5 rounded-2xl text-center card-hover glow-on-hover animate-scale-in cursor-pointer"
                style={{ animationDelay: `${i * 0.12}s` }}
                tabIndex={0}
                role="button"
                onClick={() => { setSelected(group); setDialogOpen(true); }}
                onKeyDown={e => { if (e.key === 'Enter') { setSelected(group); setDialogOpen(true); } }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${group.bg} rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                  <Icon className={`${group.color} h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500`} />
                  <span className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full blur-sm opacity-0 group-hover:opacity-80 transition-all duration-300" />
                </div>
                <div className="flex-1 flex flex-col justify-center w-full">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight text-center">
                    {group.title}
                  </h3>
                  {/* Skill items are now hidden in the box; only shown in dialog */}
                </div>
                {/* Progress bar and eye button removed as requested */}
              </div>
            );
          })}
        </div>
        <SkillDialog open={dialogOpen} onOpenChange={setDialogOpen} group={selected} />
      </div>
    </section>
  );
}

export default SkillsSection;




