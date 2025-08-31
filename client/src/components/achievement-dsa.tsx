export default function AchievementDSA() {
  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-8">Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Solved 500+ DSA problems across platforms,
              including 210 on LeetCode and 206 on CodeStudio and achieved
              <span className="text-primary"> Rank 2</span> in my college in CodeStudio
            </h3>
          </div>
          <div className="modern-card rounded-3xl p-2 sm:p-3 border w-full max-w-sm sm:max-w-md mx-auto">
            <img src="/achievements/codolio.png" alt="Codolio profile" className="rounded-2xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


