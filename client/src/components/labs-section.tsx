import { motion } from "framer-motion";

const aiImg = new URL("../../../labs/ai.png", import.meta.url).href;
const psychImg = new URL("../../../labs/psychology.png", import.meta.url).href;

export default function LabsSection() {
  const cards = [
    {
      img: aiImg,
      title: "DEV-ARC AI Research Center",
      subtitle: "AI • Machine Learning • NLP • Cognitive Science",
      desc:
        "DEV-ARC is a collaborative AI research lab dedicated to advancing ML, NLP, and interdisciplinary innovation through open science, community-driven development, and global collaboration.",
      href: "https://openforge-lab.vercel.app",
    },
    {
      img: psychImg,
      title: "ClarityBridge Psychology Lab",
      subtitle: "Psychology • Self-Exploration • Human Potential",
      desc:
        "ClarityBridge is a psychology and personal-growth lab where creativity, research, and collaboration converge to explore human potential through evidence-based protocols and compassionate guidance.",
      href: "https://claritybridge-growth-lab.vercel.app",
    },
  ];

  return (
    <section id="labs" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight">My Research Labs</h2>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              className="group modern-card h-full min-h-[480px] rounded-3xl overflow-hidden border bg-card flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary/80">{c.subtitle}</p>
                <p className="mt-4 text-muted-foreground leading-7 flex-1">{c.desc}</p>
                <div className="mt-6">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center items-center px-5 py-3 rounded-2xl border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
                  >
                    Visit Lab
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


