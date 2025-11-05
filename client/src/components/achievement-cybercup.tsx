export default function AchievementCyberCup() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Secured <span className="text-primary">2nd Runner-Up (3rd position)</span> among 11,145 teams at Cyber Cup 5.0, Amity University
            </h3>
            <p className="text-muted-foreground text-lg">
              Competed against thousands of teams in this prestigious cybersecurity competition, showcasing expertise in ethical hacking, network security, and problem-solving skills.
            </p>
          </div>
          <div className="modern-card rounded-3xl p-2 sm:p-3 border w-full max-w-sm sm:max-w-md mx-auto">
            <img src="/achievements/cybercup.jpeg" alt="Cyber Cup 5.0 Achievement" className="rounded-2xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

