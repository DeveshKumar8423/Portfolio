import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye, Download, Bot, Heart, GraduationCap } from "lucide-react";

export default function ResumeSection() {
  const [selectedResume, setSelectedResume] = useState<number | null>(null);

  const resumes = [
    {
      title: "AI Resume",
      subtitle: "Artificial Intelligence",
      description: "A resume focused on AI research, engineering, and projects.",
      icon: Bot,
      color: "text-primary",
      bg: "bg-primary/10",
      pdf: "https://drive.google.com/file/d/1xCFvJdQGc84UBpgFa6glrrvpbVNRnJFC/view?usp=share_link",
      preview: {
        sections: [
          "AI research at BITS Pilani, IIT Kanpur, and more.",
          "Deep learning, NLP, and computer vision projects.",
          "Publications and open-source contributions."
        ]
      }
    },
    {
      title: "Psychology Resume",
      subtitle: "Psychology",
      description: "A resume tailored for psychology research and related roles.",
      icon: Heart,
      color: "text-accent",
      bg: "bg-accent/10",
      pdf: "https://drive.google.com/file/d/189iuJWMxJW9qnylIhio_Cgy4zMtnboCj/view?usp=sharing",
      preview: {
        sections: [
          "Research at IIT Kharagpur, UCD, and more.",
          "Cognitive science, behavioral studies, and publications.",
          "Workshops and conferences attended."
        ]
      }
    },
    {
      title: "CV",
      subtitle: "Curriculum Vitae",
      description: "Comprehensive CV covering all academic and professional experience.",
      icon: GraduationCap,
      color: "text-primary",
      bg: "bg-primary/10",
      pdf: "https://drive.google.com/file/d/1ZFfZwvMC1TYooi0s9-oQTxYEwSJ90huy/view?usp=share_link",
      preview: {
        sections: [
          "Academic background and degrees.",
          "Professional experience and internships.",
          "Skills, awards, and extracurriculars."
        ]
      }
    },
  ];

  const handleView = (index: number) => {
    setSelectedResume(index);
  };

  const handleDownload = (resumeType: string) => {
    // Simulate download functionality
    console.log(`Downloading ${resumeType} resume...`);
    // In a real implementation, this would trigger a PDF download
  };

  return (
    <section id="resume" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume / CV"
          subtitle="Tailored resumes highlighting different aspects of my professional journey"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {resumes.map((resume, index) => {
            const Icon = resume.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg overflow-hidden card-hover"
                data-testid={`resume-card-${index}`}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Icon className={`h-16 w-16 ${resume.color} mb-4 mx-auto`} />
                    <h3 className="text-xl font-semibold text-foreground">
                      {resume.subtitle}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {resume.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{resume.description}</p>
                  <ul className="list-disc ml-5 mb-4 text-muted-foreground text-sm">
                    {resume.preview.sections.map((section, i) => (
                      <li key={i}>{section}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href={resume.pdf} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" /> View
                      </Button>
                    </a>
                    <a href={resume.pdf} download>
                      <Button variant="default">
                        <Download className="h-4 w-4 mr-2" /> Download
                      </Button>
                    </a>
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
