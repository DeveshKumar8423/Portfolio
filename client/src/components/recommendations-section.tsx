import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { University, GraduationCap, Atom, ExternalLink } from "lucide-react";

export default function RecommendationsSection() {
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null);

  const recommendations = [
    {
      institution: "Dartmouth College",
      category: "Recommendation Letter",
      icon: GraduationCap,
      preview: "Recommendation letter from Dartmouth College.",
      pdf: "https://drive.google.com/file/d/1I-bNHao8sEfoYPcqX429mYeF4FB3a_ew/view?usp=share_link"
    },
    {
      institution: "BARC",
      category: "Recommendation Letter",
      icon: Atom,
      preview: "Recommendation letter from Bhabha Atomic Research Centre.",
      pdf: "https://drive.google.com/file/d/1qtGH6eT0IRoof3n5lhIcgV56KiSmUVWg/view?usp=share_link"
    },
    {
      institution: "UCD",
      category: "Recommendation Letter",
      icon: University,
      preview: "Recommendation letter from University College Dublin.",
      pdf: "https://drive.google.com/file/d/1SZRvqGyTwVOgeSwbRIUiRvjwUru6h-nT/view?usp=share_link"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Recommendation Letters"
          subtitle="Endorsements from leading academic institutions and research organizations"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div
                key={index}
                className="bg-muted p-6 rounded-xl card-hover"
                data-testid={`recommendation-card-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <a
                    href={rec.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    data-testid={`button-view-letter-${index}`}
                  >
                    View PDF
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                <div className="mt-2 text-muted-foreground text-sm">
                  {rec.preview}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
