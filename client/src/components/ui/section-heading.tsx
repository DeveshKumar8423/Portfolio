interface SectionHeadingProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
}

export default function SectionHeading({ title, subtitle, imageSrc }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {imageSrc && (
        <div className="mb-6">
          <img
            src={imageSrc}
            alt="section banner"
            className="mx-auto h-16 md:h-20 w-auto object-contain"
            style={{ mixBlendMode: 'normal' }}
          />
        </div>
      )}
      <div className="mx-auto mb-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
