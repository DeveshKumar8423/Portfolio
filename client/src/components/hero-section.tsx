import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import HeroBgSnake from "@/components/ui/hero-bg-snake";
import { Github, Linkedin, Twitter, Mail, Rocket, Coffee } from "lucide-react";

// Parallax effect for hero background
function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (hero) {
        const y = window.scrollY;
        hero.style.backgroundPosition = `center ${y * 0.2}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default function HeroSection() {
  useParallax();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-fixed"
      style={{ background: 'var(--gradient-hero)', backgroundAttachment: 'fixed' }}
    >
      {/* Grid + snake background */}
      <HeroBgSnake />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                <p className="text-accent font-medium tracking-wide text-sm">
                  AI Engineer & Psychology Enthusiast
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-gradient mb-4 leading-tight animate-gradient-x bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text-glow">
                <span className="inline animate-fade-in" style={{ animationDelay: '0.1s' }}>Devesh Kumar </span>
                <span className="inline animate-fade-in text-accent" style={{ animationDelay: '0.2s', fontWeight: 700 }}>Gola</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                AI Engineer | Counseling Psychology Enthusiast
              </p>
            </div>

            <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-muted-foreground leading-relaxed">
                I'm an AI engineer and counselling psychology enthusiast based
                in India. Currently working with The University of Texas at
                Austin and the University of Illinois Urbana-Champaign.
                Previously worked with IIT Kanpur, BARC, BITS Pilani, UCD, IIT
                Kharagpur, Dartmouth, and Life Fundies. I help teams and
                individuals turn ideastechnical or personalinto real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button
                onClick={() => scrollToSection("experience")}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl overflow-hidden glow-on-hover"
                data-testid="button-explore-work"
              >
                <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore My Work
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary/20 text-foreground rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-medium text-base sm:text-lg glass-effect"
                data-testid="button-connect"
              >
                <Coffee className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Let's Connect
              </Button>
            </div>

            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                {
                  href: "https://in.linkedin.com/in/devesh-kumar-gola-450a0436b",
                  Icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-[#0077b5]",
                },
                {
                  href: "https://github.com/DeveshKumar8423",
                  Icon: Github,
                  label: "GitHub",
                  color: "hover:text-[#333]",
                },
                {
                  href: "https://x.com/DeveshKuma8423",
                  Icon: Twitter,
                  label: "Twitter",
                  color: "hover:text-[#1da1f2]",
                },
                {
                  href: "mailto:deveshkumar8423gola@gmail.com",
                  Icon: Mail,
                  label: "Email",
                  color: "hover:text-primary",
                },
              ].map(({ href, Icon, label, color }, i) => (
                <a
                  key={label}
                  href={href}
                  className={`group relative w-12 h-12 bg-background/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:scale-110 ${color}`}
                  data-testid={`link-${label.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Modern glassmorphism card wrapper with animated gradient border */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border-4 border-transparent rounded-3xl p-6 shadow-2xl animate-border-glow">
                <img
                  src="/profile/devesh.png"
                  alt="Devesh Kumar Gola - Professional Headshot"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800";
                  }}
                  className="rounded-2xl w-full max-w-sm mx-auto floating-element shadow-xl object-cover"
                />
                {/* Animated border overlay */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-gradient-to-r from-primary via-accent to-primary animate-border-glow" />
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              {/* Background blur effects */}
              <div className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '3s' }}></div>
              {/* Orbiting elements */}
              <div className="absolute top-1/4 -right-4 w-3 h-3 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
