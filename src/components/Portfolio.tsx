import { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  ExternalLink, 
  User, 
  Briefcase, 
  Wrench, 
  MessageSquare, 
  Award, 
  Settings, 
  Tv, 
  Users, 
  CircleCheck, 
  Globe,
  Youtube,
  Layout,
  Play,
  Languages,
  Check,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { translations, type Language } from "../locales";

/**
 * Portfolio Version: 2.1 (Image Fix)
 * Last Updated: 2026-04-23
 */

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("ja");
  const t = translations[lang];

  const GOOGLE_FORM_URL = "https://forms.gle/EiY9QgY3VG8BMufT9";

  const achievements = [
    {
      title: t.achievements.k.title,
      description: t.achievements.k.desc,
      tags: t.achievements.k.tags,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: t.achievements.n.title,
      description: t.achievements.n.desc,
      tags: t.achievements.n.tags,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: t.achievements.h.title,
      description: t.achievements.h.desc,
      tags: t.achievements.h.tags,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: t.achievements.studio.title,
      subtitle: t.achievements.studio.subtitle,
      description: t.achievements.studio.desc,
      tags: t.achievements.studio.tags,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
      link: { label: t.achievements.studio.btn, href: "https://ais-pre-rneytcbdu2kguu5oyuxts5-459773233175.asia-east1.run.app" }
    },
    {
      title: t.achievements.apps.title,
      description: t.achievements.apps.desc,
      tags: t.achievements.apps.tags,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600",
      subLinks: [
        { name: t.achievements.apps.links[0], url: "https://fortune-app-lt2qmmko7xpgf7vjcmawwm.streamlit.app/" },
        { name: t.achievements.apps.links[1], url: "https://udify.app/chat/FQUSZtUZmNUj9kfI" }
      ]
    },
    {
      title: t.achievements.youtube.title,
      description: t.achievements.youtube.desc,
      tags: t.achievements.youtube.tags,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800&h=600",
      subLinks: [
        { name: t.achievements.youtube.links[0], url: "https://www.youtube.com/@YappaJapan" },
        { name: t.achievements.youtube.links[1], url: "https://www.youtube.com/@%E3%83%97%E3%83%AB%E3%83%83%E3%82%AF%E3%82%B5%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3" },
        { name: t.achievements.youtube.links[2], url: "https://www.youtube.com/watch?v=-S_4e8_GXP4" }
      ]
    },
    {
      title: t.achievements.project365.title,
      description: t.achievements.project365.desc,
      tags: t.achievements.project365.tags,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=600",
      link: { label: t.achievements.project365.btn, href: "https://note.com/tkykkd/n/nc3fcf9fe771a" },
      label: t.achievements.project365.label
    }
  ];

  const coreStrengths = [
    { 
      name: t.strengths.biz, 
      items: t.strengths.bizItems, 
      icon: <Settings className="w-5 h-5" /> 
    },
    { 
      name: t.strengths.content, 
      items: t.strengths.contentItems, 
      icon: <Tv className="w-5 h-5" /> 
    },
    { 
      name: t.strengths.org, 
      items: t.strengths.orgItems, 
      icon: <Users className="w-5 h-5" /> 
    }
  ];

  const certifications = [
    { 
      name: "2級ファイナンシャル・プランニング技能士", 
      image: "/cert-fp_new.jpg"
    },
    { name: "Google AI Essentials (Coursera, 2026年1月)", image: "/cert-google-ai_new.jpg" },
    { name: "Google Prompting Essentials (Coursera, 2026年2月)", image: "/cert-google-prompt_new.jpg" },
    { name: "Generative AI for Leaders (Vanderbilt/Coursera, 2026年2月)", image: "/cert-vanderbilt_new.jpg" },
    { name: "AI For Business (University of Pennsylvania/Coursera, 2026年2月)", image: "/cert-upenn_new.jpg" },
    { name: "Generative AI for Executives and Business Leaders (IBM/Coursera, 2026年2月)", image: "/cert-ibm_new.jpg" }
  ];

  const navItems = [
    { label: t.nav.profile, href: "#about" },
    { label: t.nav.strengths, href: "#strengths" },
    { label: t.nav.achievements, href: "#achievements" },
    { label: t.nav.contact, href: "#contact" }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "ja", label: "日本語" },
    { code: "en", label: "English" },
    { code: "th", label: "ไทย" },
    { code: "zh", label: "中文" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-xl font-bold tracking-tighter"
            >
              TAKAYUKI KIDO<span className="text-primary">.</span>
            </motion.div>
            
            <div className="hidden lg:flex space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-primary/10">
                <div className="px-2 hidden sm:block">
                  <Languages className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                      lang === l.code 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="hidden md:flex rounded-full text-xs" asChild>
                <a href="#contact">{t.nav.contact}</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            key={lang} // Trigger animation on language change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 text-xs uppercase tracking-widest border-primary/50 text-primary">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              {t.hero.title[0]}<br />
              <span className="text-muted-foreground">{t.hero.title[1]}</span>
              {t.hero.title[2]}
              <span className="text-primary">{t.hero.title[3]}</span>
              {t.hero.title[4]}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                <a href="#achievements">{t.hero.viewWork}</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg" asChild>
                <a href="#contact">{t.hero.contact}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-50"></div>
              <img 
                src="/profile_new.jpg" 
                alt="Takayuki Kido" 
                className="relative rounded-2xl w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <User className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">{t.about.title}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">
                {t.about.name}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t pt-8">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Globe className="w-4 h-4" />
                    <h4 className="font-bold text-foreground underline decoration-primary/30 underline-offset-4">{t.about.location}</h4>
                  </div>
                  <p className="text-muted-foreground">Thailand (Remote Ready)</p>
                </div>
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group/mail"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Mail className="w-4 h-4" />
                    <h4 className="font-bold text-foreground underline decoration-primary/30 underline-offset-4 group-hover/mail:text-primary transition-colors">
                      {t.about.email}
                    </h4>
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2 group-hover/mail:text-primary transition-colors text-sm">
                    Google Form {t.contact.title}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/mail:opacity-100 transition-opacity" />
                  </p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 text-primary">
              <Wrench className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">{t.strengths.title}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">{t.strengths.subtitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreStrengths.map((strength, idx) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-muted/50 bg-muted/20 hover:bg-muted/40 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {strength.icon}
                    </div>
                    <CardTitle className="text-xl mb-4">{strength.name}</CardTitle>
                    <Separator className="bg-primary/20" />
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {strength.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <CircleCheck className="w-4 h-4 mt-1 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Briefcase className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">{t.achievements.title}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">{t.achievements.subtitle}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-muted/50 bg-background h-full flex flex-col group relative">
                  {achievement.label && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-primary-foreground font-bold rounded-sm px-3 py-1 shadow-lg ring-1 ring-white/20">
                        {achievement.label as string}
                      </Badge>
                    </div>
                  )}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-snug">{achievement.title}</CardTitle>
                    {"subtitle" in achievement && achievement.subtitle && (
                      <CardDescription className="text-xs font-semibold text-primary/80 uppercase tracking-tighter">
                        {achievement.subtitle as string}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    {"subLinks" in achievement && achievement.subLinks && (
                      <div className="space-y-2 mb-6">
                         {(achievement.subLinks as any[]).map((link: any) => (
                           <a 
                             key={link.name} 
                             href={link.url} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-md bg-muted/30 group/link"
                           >
                             {achievement.title.includes("YouTube") || achievement.title.includes("YouTube") || achievement.title.includes("ยูทูบ") ? <Play className="w-3 h-3 text-red-500" /> : <ExternalLink className="w-3 h-3" />}
                             <span className="flex-grow">{link.name}</span>
                             <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                           </a>
                         ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {achievement.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold tracking-tighter rounded-sm px-2 py-0 border-primary/20 bg-primary/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {"link" in achievement && achievement.link && (
                      <Button variant="outline" size="sm" className="w-full mt-6 rounded-full text-xs font-bold" asChild>
                        <a href={(achievement.link as any).href} target="_blank" rel="noopener noreferrer">
                          {(achievement.link as any).label}
                          <ExternalLink className="ml-2 w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Award className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">{t.certs.title}</span>
              </div>
              <h2 className="text-3xl font-bold">{t.certs.subtitle}</h2>
              <p className="mt-4 text-muted-foreground">{t.certs.desc}</p>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-1 gap-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl border border-muted/50 bg-muted/5 hover:bg-muted/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 hidden sm:flex">
                      <CircleCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-sm font-semibold">{cert.name}</span>
                    </div>
                    {cert.image && (
                      <div className="w-full sm:w-48 aspect-[4/3] rounded-lg overflow-hidden border border-muted/50 relative group">
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-zoom-in"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-6 text-primary">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">{t.contact.title}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic tracking-tight">{t.contact.subtitle}</h2>
            <p className="text-muted-foreground mb-12 text-lg md:text-xl leading-relaxed">
              {t.contact.desc}
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="rounded-full px-12 h-16 text-xl transition-all duration-300"
                asChild
              >
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  {t.contact.btn}
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-xl tracking-tighter">
            TAKAYUKI KIDO<span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Takayuki Kido. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
