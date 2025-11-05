import SectionHeading from "@/components/ui/section-heading";
import { Award, Brain, BookOpen, Bot, Heart, Users, Lightbulb, CheckCircle, Database, Cloud } from "lucide-react";

// AI & Data Science (5 Udemy)
const aiCerts = [
  {
    title: "Mathematics for Data Science & GenAI (Udemy)",
    description: "Comprehensive course covering linear algebra, calculus, probability theory, and statistical methods essential for modern AI and GenAI foundations. Mastered vector spaces, matrix operations, gradient descent, optimization techniques, and probability distributions crucial for understanding neural networks, deep learning architectures, and generative models.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Generative AI with LangChain & HF (Udemy)",
    description: "Hands-on training in building end‑to‑end GenAI applications using LangChain framework, Hugging Face transformers, and vector databases. Learned to create RAG systems, implement prompt engineering, fine-tune language models, integrate embeddings, and deploy production-ready generative AI solutions with proper error handling and optimization.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Data Analytics Masters (Udemy)",
    description: "Complete data science workflow training covering data wrangling, cleaning, transformation, visualization, dashboard creation, and predictive analytics. Mastered tools like Pandas, NumPy, Matplotlib, Seaborn, and advanced techniques for exploratory data analysis, statistical modeling, and building interactive data-driven applications.",
    icon: Lightbulb,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "PyTorch Deep Learning Bootcamp (Udemy)",
    description: "In-depth PyTorch training covering CNNs, RNNs, LSTMs, GRUs, transformer architectures, training loops, backpropagation, optimization algorithms, and transfer learning. Built real-world projects including image classification, NLP tasks, time series forecasting, and learned model deployment strategies and performance optimization techniques.",
    icon: BookOpen,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Machine Learning A‑Z with Python (Udemy)",
    description: "Comprehensive ML course covering supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), model evaluation metrics, cross-validation, hyperparameter tuning, ensemble methods, and deployment best practices. Implemented algorithms from scratch and used scikit-learn for production-ready ML pipelines.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

// Oracle Certificates (4)
const oracleCerts = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description: "The Oracle Cloud Infrastructure (OCI) AI Foundations certification introduces fundamental concepts of artificial intelligence (AI) and machine learning (ML), with a specific focus on practical application within Oracle Cloud Infrastructure. This comprehensive program covers core AI principles, ML workflows, responsible AI practices, and hands-on experience with OCI AI services. Ideal for beginners entering AI/ML, providing an accessible entry point without requiring extensive prior technical experience.",
    icon: Brain,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    description: "Designed for Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals, this certification validates expertise in Large Language Models (LLMs) and proficiency with OCI Generative AI Service. Professionals with this credential demonstrate strong understanding of advanced techniques including Retrieval-Augmented Generation (RAG), Semantic Search, Vector database management, and LangChain integration. Skilled in building, tracing, evaluating, and deploying production-ready LLM applications with enterprise-grade security and scalability.",
    icon: Bot,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    description: "This certification prepares Oracle DBAs, AI engineers, and cloud developers to unlock the potential of Oracle AI Database for building AI-driven applications. Master techniques for vector data storage, indexing strategies, generating and storing embeddings, and enabling semantic and similarity searches. Advanced applications include building Retrieval-Augmented Generation (RAG) applications using both PL/SQL and Python, integrating Exadata AI Storage, leveraging Oracle GoldenGate, and implementing Select AI capabilities for seamless AI integration in enterprise-level databases.",
    icon: Database,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    description: "This certification is intended for data scientists and professionals responsible for building data science solutions and managing the complete lifecycle of machine learning models. Validates expertise in effectively identifying appropriate OCI services for implementing machine learning solutions tailored to specific business use cases. Demonstrates proficiency in incorporating machine learning best practices, including model development, training, validation, deployment, monitoring, and optimization within Oracle Cloud Infrastructure environments.",
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
