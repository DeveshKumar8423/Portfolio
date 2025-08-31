import SectionHeading from "@/components/ui/section-heading";
import { Mail, MapPin, Clock } from "lucide-react";
import SocialRow from "@/components/ui/social-row";


export default function ContactSection() {

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Modern background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to collaborate on innovative projects or discuss research opportunities? Let's connect!"
        />

        {/* Social links row */}
        <div className="mb-8">
          <SocialRow />
        </div>

        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 items-center justify-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-up max-w-4xl mx-auto">
            <div className="modern-card p-6 sm:p-8 rounded-3xl text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4">
                Let's Collaborate
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Whether you're interested in AI research, psychology projects, or
                interdisciplinary initiatives, I'm always excited to explore new
                opportunities for collaboration and knowledge sharing.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="modern-card p-4 sm:p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Email</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all">deveshkumar8423gola@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="modern-card p-4 sm:p-6 rounded-2xl hover:bg-accent/5 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300">Location</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="modern-card p-4 sm:p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Response Time</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="modern-card p-6 sm:p-8 md:p-10 rounded-3xl animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-2">Send a Message</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Contact form will be available soon. For now, reach out via email or social media!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
