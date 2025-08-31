export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 md:py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p>© {new Date().getFullYear()} Devesh Kumar Gola. Built with care.</p>
      </div>
    </footer>
  );
}
