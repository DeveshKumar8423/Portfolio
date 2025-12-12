import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-secondary)' }}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="My Journey"
          subtitle="A path that bridges the analytical world of AI with the human understanding of psychology"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="modern-card p-8 rounded-3xl animate-slide-up h-full">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In my first semester of college, I began with a phase of
                  self-exploration. That's when I picked up C language and started
                  pushing my first lines of code on GitHub—tiny steps that gave me
                  the thrill of building something real.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  By the second semester, I felt drawn to two different worlds. In
                  January, I joined a counseling course, and in March, I dived
                  into machine learning. It was the start of a dual journey—one in
                  understanding people, and the other in understanding data.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The summer of 2024 gave me my first taste of research through an
                  AI/ML internship at DTU. That July, I went deeper into
                  personality development, and in August, I explored modern
                  applied psychology. By October, I was studying deep learning,
                  balancing algorithms with insights into the human mind.
                </p>
              </div>
            </div>
          </div>

          <div className="modern-card p-8 rounded-3xl animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The beginning of 2025 was a turning point. In January, I studied
                  the mathematics of machine learning, and in February, I
                  completed courses on LLMs, GenAI, and LangChain. Around that
                  time, I also spent four months cold-emailing, which finally
                  opened doors to research internships with organizations like
                  BITS Pilani, BARC, IIT Kanpur, UCD, Dartmouth, Texas, and Waterloo.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  At the same time, my journey in psychology deepened with
                  internships at IIT Kharagpur, Dartmouth, and Atmashakti. I also explored darker layers of the mind through a
                  Dark Psychology course, and built resilience and clarity through
                  a Personality Transformation program.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Today, I lead two research labs that shape my path: DEV-ARC AI Research Center and ClarityBridge Psychology Lab—advancing AI, NLP, and human-centered protocols through open, collaborative science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
