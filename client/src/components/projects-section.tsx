import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "CarbonPrompt – Evaluating Prompt Engineering and Emissions in LLMs",
      period: "June 2025 – Present",
      description: "Developed a reproducible pipeline for LLM-based requirement classification using the PROMISE dataset, generating 30 prompt variants per type. Achieved over 23% accuracy and tracked energy metrics using CodeCarbon, contributing to sustainable NLP through prompt-efficiency analysis.",
      tags: ["Prompt Engineering", "CodeCarbon", "Sustainable NLP"],
      link: "https://github.com/DeveshKumar8423/UCD-Internship",
    },
    {
      title: "CrossDomainSegmentation – Cross-Domain Semantic Segmentation for Road Scenes",
      period: "Apr 2025 – Present",
      description: "Built a robust segmentation pipeline adapting Cityscapes-trained models to the IDD dataset using DeepLabV3+ and DAFormer. Applied feature alignment, style transfer, and pseudo-label refinement, achieving improved mIoU on unstructured road scenes with detailed visualizations and class-wise IoU analysis.",
      tags: ["DeepLabV3+", "DAFormer", "Cityscapes", "IDD"],
      link: "https://github.com/DeveshKumar8423/BITS-Internship",
    },
    {
      title: "RAGBotX - Multi AI RAG Chatbot using Langgraph and AstraDB",
      period: "Jan 2025 - Feb 2025",
      description: "Built an optimized AI-powered retrieval system by integrating LangChain, AstraDB, and Wikipedia API, leveraging Gemma-9B-IT LLM with Groq API for efficient processing and developing a LangGraph-based search system for enhanced vector and knowledge retrieval.",
      tags: ["LangChain", "AstraDB", "Groq Cloud"],
      link: "https://github.com/DeveshKumar8423/RAGBotX",
    },
    {
      title: "FoodViT - Food Prediction Vision Transformer using PyTorch",
      period: "Nov 2024 - Dec 2024",
      description: "Achieved 93.84% accuracy on the FoodVision Mini dataset by developing a Vision Transformer (ViT) model, integrating EfficientNet-B2 for improved classification, and optimizing training using PyTorch and transfer learning from pretrained ViT models.",
      tags: ["PyTorch", "Deep Learning", "Transformer"],
      link: "https://github.com/DeveshKumar8423/FoodViT",
    },
    {
      title: "ResumeLens, Resume Screening using Machine Learning",
      period: "Sept 2024 - Oct 2024",
      description: "Enhanced resume classification accuracy using Random Forest on over 1.6 million features. Built a personalized job recommendation system and automated the extraction of key candidate details such as name, skills, and education. Built a system to parse resumes, predict job roles, and recommend matching industries.",
      tags: ["Machine Learning", "EDA", "NLP", "Flask"],
      link: "https://github.com/DeveshKumar8423/ResumeLens",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Innovative solutions at the intersection of technology and human understanding"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group modern-card p-6 sm:p-8 rounded-3xl card-hover glow-on-hover animate-scale-in flex flex-col justify-between h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`project-card-${index}`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-2">{project.period}</div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-primary underline text-sm font-medium">GitHub</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
