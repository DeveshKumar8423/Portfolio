export default function AchievementHacktoberfest() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Achieved <span className="text-primary">"Supercontributor"</span> status in Hacktoberfest 2025 by landing over six accepted pull requests, placing among the first 10,000 global participants to complete the challenge
            </h3>
            {/* Description removed as requested */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">White Hacktoberfest T-Shirt</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Tree Planted by Tree Nation</span>
            </div>
          </div>
          <div className="modern-card rounded-3xl p-3 border w-full max-w-md sm:max-w-lg mx-auto">
            <img src="/achievements/hacktoberfest2025.png" alt="Hacktoberfest 2025 Achievement" className="rounded-2xl w-full h-72 sm:h-80 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

