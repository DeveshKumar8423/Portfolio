import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, ExternalLink } from "lucide-react";

export default function ResearchSection() {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  const papers = [
    {
      title:
        "The Lived Experience of Managing Academic Stress: A Qualitative Study on the Effectiveness of Rational Emotive Behavior Therapy (REBT) for Indian College Students",
      description:
        "A comprehensive qualitative analysis examining how REBT techniques help Indian college students manage academic stress and improve mental well-being.",
      category: "Psychology Research",
      abstract:
        "This qualitative study explores the lived experiences of Indian college students using Rational Emotive Behavior Therapy (REBT) techniques to manage academic stress. Through in-depth interviews and thematic analysis, we examine the effectiveness of REBT interventions in improving student mental health outcomes. The research provides insights into culturally-sensitive approaches to stress management in higher education contexts.",
      methodology: "Qualitative study using phenomenological approach with semi-structured interviews",
      findings: [
        "REBT techniques significantly reduced academic stress levels",
        "Cultural adaptation of REBT methods improved acceptance",
        "Students reported better emotional regulation skills",
        "Long-term benefits observed in academic performance",
      ],
    },
    {
      title:
        "From Autopilot to Agency: An Autoethnographic Inquiry into Structured Self-Exploration",
      description:
        "An autoethnographic study documenting the journey from unconscious living to intentional self-direction through structured exploration protocols.",
      category: "Self-Development Research",
      abstract:
        "This autoethnographic research documents a personal journey from unconscious, automatic living patterns to intentional self-direction through the implementation of structured self-exploration protocols. The study examines the transformation process, challenges encountered, and insights gained through systematic self-reflection and journaling practices.",
      methodology: "Autoethnographic approach with structured self-exploration protocols and reflective journaling",
      findings: [
        "Structured protocols enhance self-awareness significantly",
        "Regular reflection creates sustainable behavior change",
        "Self-exploration leads to increased personal agency",
        "Documented methods can be replicated by others",
      ],
    },
    {
      title:
        "Carbon Prompting: An Empirical Analysis of the Environmental and Performance Trade-offs in LLM-Based Requirement Classification",
      description:
        "Analyzing the environmental impact of large language models while maintaining performance in software requirement classification tasks.",
      category: "AI Ethics Research",
      abstract:
        "This empirical study investigates the environmental impact of large language models (LLMs) in the context of software requirement classification. We propose 'Carbon Prompting' techniques that optimize for both performance and environmental sustainability, analyzing trade-offs between model accuracy and carbon footprint in real-world software engineering tasks.",
      methodology: "Empirical analysis using various LLM configurations with carbon footprint measurement",
      findings: [
        "Optimized prompting reduces carbon footprint by 35%",
        "Performance degradation minimal with efficient techniques",
        "Smaller models with better prompts outperform larger models",
        "Carbon-aware design principles for AI applications developed",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research Papers"
          subtitle="Contributing to academic knowledge in AI, psychology, and interdisciplinary studies"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-xl card-hover"
              data-testid={`research-paper-${index}`}
            >
              <div className="bg-card p-4 rounded-lg mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                {paper.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {paper.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {paper.category}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPaper(index)}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-testid={`button-read-more-${index}`}
                >
                  Read More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Research Paper Modal */}
        <Dialog
          open={selectedPaper !== null}
          onOpenChange={() => setSelectedPaper(null)}
        >
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedPaper !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold leading-tight">
                    {papers[selectedPaper].title}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">
                    {papers[selectedPaper].category}
                  </p>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Abstract</h4>
                    <p className="text-muted-foreground">
                      {papers[selectedPaper].abstract}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Methodology</h4>
                    <p className="text-muted-foreground">
                      {papers[selectedPaper].methodology}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Key Findings</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {papers[selectedPaper].findings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
