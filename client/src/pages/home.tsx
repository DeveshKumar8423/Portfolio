import GetInTouchBar from "@/components/ui/get-in-touch-bar";
import Navigation from "@/components/navigation";
import SkillsSection from "@/components/skills-section";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExpertiseSection from "@/components/expertise-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ResumeSection from "@/components/resume-section";
import RecommendationsSection from "@/components/recommendations-section";
import CertificationSection from "@/components/certification-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AchievementsSection from "@/components/achievements-section";
import AchievementDSA from "@/components/achievement-dsa";
import AchievementProtocol from "@/components/achievement-protocol";
import AchievementPenn from "@/components/achievement-penn";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
  <HeroSection />
  <AboutSection />
  <ExpertiseSection />
  {/* Dynamic Skills Section after Expertise */}
  <SkillsSection />
        <ExperienceSection />
        <AchievementDSA />
        <AchievementProtocol />
        <AchievementPenn />
        <ProjectsSection />
        <ResumeSection />
  <RecommendationsSection />
  <CertificationSection />
        <ContactSection />
  {/* Animated persistent Get in Touch bar */}
  <GetInTouchBar />
      </main>
      <Footer />
    </div>
  );
}
