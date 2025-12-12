import SectionHeading from "@/components/ui/section-heading";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type ExperienceItem = {
  name: string;
  src: string;
  role: string;
  period?: string;
  details: string[];
};

export default function ExperienceSection() {
  const items: ExperienceItem[] = [
    {
      name: "UT Austin",
      src: "/work_photo/UTexas.png",
      role: "ML Research Intern",
      period: "June 2025 – Present (Remote)",
      details: [
        "Conducting advanced research on time-series analysis for human activity recognition using gait datasets and motion sensor signals similar to Apple Watch data.",
        "Benchmarking and comparing multiple state-of-the-art models including Motion Code, CrossFormer, TimesNet, iTransformer, and Mamba, focusing on metrics such as accuracy, F1-score, robustness, and computational efficiency.",
        "Replicating experiments from recent high-impact publications to validate reproducibility and reliability of time-series models.",
        "Developing preprocessing pipelines and feature extraction workflows to improve the expressiveness of input signals, enabling accurate motion pattern detection.",
        "Performing dataset isolation and failure mode analysis to support interpretability and transparency of model behavior in wearable health monitoring applications."
      ]
    },
    {
      name: "BITS Pilani",
      src: "/work_photo/BITS.png",
      role: "ML Intern",
      period: "Apr 2025 – Present (Remote)",
      details: [
        "Conducting confidential research on dashboard camera footage from the Indian Driving Dataset, focusing on cross-domain semantic segmentation and domain adaptation.",
        "Developing image preprocessing workflows, domain alignment techniques, and segmentation models to improve generalization of autonomous driving systems across diverse and unstructured road environments."
      ]
    },
    {
      name: "IIT Kanpur",
      src: "/work_photo/iit%20kanpur.png",
      role: "ML Researcher",
      period: "June 2025 – Present (Remote)",
      details: [
        "Engaged in a confidential collaboration under NDA, contributing to advanced machine learning research with real-world applicability in scalable AI systems.",
        "Assisting in the design of model validation protocols to assess performance stability and generalization across multiple datasets, ensuring reliability of outcomes in production environments."
      ]
    },
    {
      name: "IIT Kharagpur",
      src: "/work_photo/IIT%20Kharagpur.png",
      role: "Counseling Psychology Research Intern",
      period: "June – Aug 2025",
      details: [
        "Leading a qualitative research study titled “Effectiveness of Rational Emotive Behavior Therapy (REBT) in Reducing Academic Stress among College Students.”",
        "Designed and delivered REBT-based structured intervention sessions to help students identify, challenge, and restructure irrational beliefs linked to academic stress.",
        "Conducted pre- and post-intervention interviews to assess cognitive, emotional, and behavioral changes.",
        "Applied thematic analysis methods to extract insights into coping mechanisms and resilience.",
        "Worked closely with faculty and peers to document findings for potential journal publication and academic presentation."
      ]
    },
    {
      name: "BARC",
      src: "/work_photo/BARC.png",
      role: "Computational Genomics Intern",
      period: "May – July 2025 (Remote)",
      details: [
        "Developed bioinformatics workflows for large-scale genomic sequencing datasets.",
        "Downloaded raw FASTQ files from the European Nucleotide Archive (ENA) and performed quality control using FastQC.",
        "Applied subsampling strategies with Seqtk to optimize data handling and computational performance.",
        "Conducted genome sequence alignment with BWA-MEM, performing chromosome-level analysis to extract biologically significant regions.",
        "Designed Python scripts for frequency analysis of 6-mer DNA patterns, providing deeper insight into genetic variability.",
        "Gained extensive experience in computational biology integration with scalable data pipelines."
      ]
    },
    {
      name: "UCD",
      src: "/work_photo/UCD.png",
      role: "Green AI Research Intern",
      period: "May – July 2025 (Remote)",
      details: [
        "Conducted research on energy-efficient prompt engineering for large language models (LLMs) in software requirements classification.",
        "Designed and executed controlled experiments across prompt variants differing in length, clarity, and linguistic complexity, using models such as LLaMA, Mistral, and Ollama.",
        "Measured trade-offs between accuracy, F1-score, and environmental cost, tracking carbon emissions with CodeCarbon.",
        "Authored detailed reports summarizing experimental findings and developed practical recommendations for sustainable NLP practices.",
        "Collaborated with faculty to identify future research directions in low-carbon AI."
      ]
    },
    {
      name: "DTU",
      src: "/work_photo/dtu.png",
      role: "AI Research Intern",
      period: "June – July 2024 (New Delhi)",
      details: [
        "Researched deep learning methods for cancer cell detection, integrating histopathology image analysis with RNA sequencing data.",
        "Performed exploratory data analysis (EDA) on over one million medical images to identify key visual and statistical patterns.",
        "Applied data augmentation and preprocessing techniques to enhance robustness of classification models.",
        "Fine-tuned unsupervised clustering algorithms and optimized hyperparameters for improved diagnostic accuracy.",
        "Combined biomedical knowledge with machine learning methodologies to contribute to more reliable AI-driven healthcare diagnostics."
      ]
    },
    {
      name: "Dartmouth",
      src: "/work_photo/Dartmouth.png",
      role: "Collaborative Resonance Volunteer",
      period: "June 2025 – Present",
      details: [
        "Participated in a volunteer initiative on mindset transformation, self-awareness, and emotional growth.",
        "Engaged in weekly reflective sessions on motivation, procrastination, and personal discipline.",
        "Designed and shared a 10-point self-exploration framework, collaborating with practitioners to co-create emotional intelligence and mindfulness practices."
      ]
    },
    {
      name: "Waterloo",
      src: "/work_photo/Waterloo.png",
      role: "Prompt Tester – University of Waterloo",
      period: "Apr – July 2025",
      details: [
        "Served as an early tester for the YUPP AI platform.",
        "Evaluated over 100 prompts across LLMs including ChatGPT, Claude, and Gemini, analyzing performance, coherence, latency, and output quality.",
        "Provided structured feedback on leaderboard systems, model selection workflows, and UI/UX features, contributing to platform improvements and roadmap refinement."
      ]
    },
    {
      name: "Life Fundies",
      src: "/work_photo/life%20fundies.png",
      role: "Co-Founder & Counseling Practitioner",
      period: "Jan 2025 – Present",
      details: [
        "Co-founded a mental wellness startup providing personalized life and relationship counseling to students and professionals.",
        "Delivered over 100 counseling sessions and designed interactive workshops on emotional intelligence, stress management, and self-growth.",
        "Applied REBT, person-centered therapy, and mindfulness techniques to improve resilience and well-being.",
        "Building a community-driven platform that empowers young individuals to overcome academic, relational, and emotional challenges with confidence."
      ]
    },
    {
      name: "Atmashakti",
      src: "/work_photo/atmashakti.png",
      role: "Impact Support – AtmaShakti Trust",
      details: [
        "I am driven by a deep commitment to leveraging technology for social empowerment and community upliftment.",
        "My purpose is to support AtmaShakti Trust's mission by providing accessible information, facilitating communication, and assisting in the organization of resources to empower marginalized communities.",
        "By handling research, documentation, and data management, I aim to amplify the efforts of the team on the ground, helping to build a more equitable and self-reliant society, one step at a time."
      ]
    },
    
  ];
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-secondary)' }}></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="Collaborated with leading institutions and organizations worldwide"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(item)}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
              className="modern-card rounded-2xl p-3 sm:p-4 md:p-5 border card-hover flex flex-col items-center justify-center h-36 sm:h-40 md:h-44 cursor-pointer"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain mb-2 sm:mb-3 transition"
                loading="lazy"
              />
              <span className="text-xs sm:text-sm font-semibold text-center text-foreground leading-tight">{item.name}</span>
              <span className="text-xs text-muted-foreground text-center mt-1 leading-tight hidden sm:block">{item.role}</span>
            </div>
          ))}
        </div>
        {/* Dialog for experience details */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-lg">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-2">{selected.name} — {selected.role}</DialogTitle>
                  <div className="text-muted-foreground text-sm mb-4">{selected.period}</div>
                </DialogHeader>
                <ul className="list-disc pl-6 space-y-2 text-base text-foreground">
                  {selected.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-xl">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <img src={selected.src} alt="" className="h-8 w-auto object-contain" />
                    {selected.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{selected.role}{selected.period ? ` · ${selected.period}` : ''}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {selected.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
