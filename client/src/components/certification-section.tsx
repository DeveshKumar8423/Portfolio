import SectionHeading from "@/components/ui/section-heading";
import { Award, Brain, BookOpen, Bot, Heart, Users, Lightbulb, CheckCircle, Database, Cloud } from "lucide-react";

// AI & Data Science (5 Udemy)
const aiCerts = [
  {
    title: "Mathematics for Data Science & GenAI (Udemy)",
    description: "Comprehensive course covering linear algebra, calculus, probability theory, and statistical methods essential for modern AI and GenAI. Mastered vector spaces, matrix operations, gradient descent, optimization techniques, and probability distributions crucial for neural networks and deep learning architectures.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Generative AI with LangChain & HF (Udemy)",
    description: "Hands-on training in building end‑to‑end GenAI applications using LangChain framework, Hugging Face transformers, and vector databases. Learned to create RAG systems, implement prompt engineering, fine-tune language models, and deploy production-ready generative AI solutions.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Data Analytics Masters (Udemy)",
    description: "Complete data science workflow training covering data wrangling, cleaning, transformation, visualization, dashboard creation, and predictive analytics. Mastered Pandas, NumPy, Matplotlib, Seaborn, and advanced techniques for exploratory data analysis and statistical modeling.",
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "PyTorch Deep Learning Bootcamp (Udemy)",
    description: "In-depth PyTorch training covering CNNs, RNNs, LSTMs, GRUs, transformer architectures, training loops, backpropagation, and optimization algorithms. Built real-world projects including image classification, NLP tasks, and learned model deployment strategies.",
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Machine Learning A‑Z with Python (Udemy)",
    description: "Comprehensive ML course covering supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), model evaluation, cross-validation, hyperparameter tuning, ensemble methods, and deployment best practices using scikit-learn.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

// Oracle Certificates (4)
const oracleCerts = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description: "Introduces fundamental AI and ML concepts with practical application within Oracle Cloud Infrastructure. Covers core AI principles, ML workflows, responsible AI practices, and hands-on experience with OCI AI services. Ideal for beginners entering AI/ML without requiring extensive prior technical experience.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    description: "Validates expertise in Large Language Models (LLMs) and proficiency with OCI Generative AI Service. Demonstrates understanding of Retrieval-Augmented Generation (RAG), Semantic Search, Vector database management, and LangChain integration. Skilled in building, tracing, evaluating, and deploying production-ready LLM applications.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    description: "Prepares Oracle DBAs, AI engineers, and cloud developers to unlock Oracle AI Database potential for AI-driven applications. Master vector data storage, indexing strategies, embeddings generation, and semantic similarity searches. Build RAG applications using PL/SQL and Python, integrating Exadata AI Storage and Select AI capabilities.",
    icon: Database,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    description: "For data scientists and professionals building data science solutions and managing complete ML model lifecycle. Validates expertise in identifying appropriate OCI services for ML solutions tailored to business use cases. Demonstrates proficiency in ML best practices including model development, training, validation, deployment, and optimization.",
    icon: Cloud,
    color: "text-accent",
    bg: "bg-accent/10",
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
          subtitle="Recognized training in AI, Data Science, Oracle Cloud, and Psychology"
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
          {/* Oracle Certifications Row */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent text-center">Oracle Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
              {oracleCerts.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="group modern-card p-6 rounded-2xl card-hover flex flex-col items-center text-center"
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
