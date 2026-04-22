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
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const achievements = [
  {
    title: "K社",
    description: "共同創業者として事業運営全般を担当。1年目売上3.4億円、2年目13億円超の成長を実現。少人数体制での全店セミナー運営と業務最適化を推進しました。",
    tags: ["事業運営", "売上成長", "業務最適化"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "N社",
    description: "管理部マネージャーとして製造・会員・物流管理を統括。原料調達の見直しにより仕入単価を約半減。月間3,000万円規模の仕入に対し、年間約1,800万円規模のコスト改善を実現。",
    tags: ["管理部門", "コスト削減", "サプライチェーン"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "H社",
    description: "製品管理・総務・経営企画の複数部門を立ち上げ。年商3,000万円から約3年間で4億円弱への拡大に貢献し、中国・青島拠点の在庫/出荷体制整備も担当。",
    tags: ["部門立ち上げ", "海外拠点管理", "経営企画"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "ONIKA STUDIO",
    subtitle: "クリエイター向け多機能ポートフォリオ",
    description: "構成設計、文言設計、公開までを短期間で実装。作品を魅力的に見せる導線設計と、更新しやすい運用性を重視して制作。",
    tags: ["Web制作", "UI/UX設計", "運用性重視"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    link: { label: "サイトを見る", href: "https://ais-pre-rneytcbdu2kguu5oyuxts5-459773233175.asia-east1.run.app" }
  },
  {
    title: "個人開発アプリ",
    description: "業務課題の解決を目的に、AI活用アプリを企画・実装。短期間で試作し、実運用を意識したUIと導線を設計。",
    tags: ["AI活用", "課題解決", "プロダクト企画"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600",
    subLinks: [
      { name: "姓名判断鑑定", url: "https://fortune-app-lt2qmmko7xpgf7vjcmawwm.streamlit.app/" },
      { name: "RAG型AI", url: "https://udify.app/chat/FQUSZtUZmNUj9kfI" }
    ]
  },
  {
    title: "YouTubeチャンネル運用",
    description: "立ち上げから撮影、編集、運用まで一気通貫で対応。継続配信と改善を重ね、実務として制作体制を構築。",
    tags: ["動画制作", "チャンネル運営", "体制構築"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800&h=600",
    subLinks: [
      { name: "Yappa Japan（継続中）", url: "https://www.youtube.com/@YappaJapan" },
      { name: "プルックサージャパン（2021.7〜2025.10運用）", url: "https://www.youtube.com/@%E3%83%97%E3%83%AB%E3%83%83%E3%82%AF%E3%82%B5%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3" },
      { name: "タイランドエリート（スポット）", url: "https://www.youtube.com/watch?v=-S_4e8_GXP4" }
    ]
  },
  {
    title: "Project365（継続配信）",
    description: "記事執筆に加え、音声解説・デザイン制作まで含む配信を運用。AIを活用した企画〜更新フローを実践。",
    tags: ["note継続配信", "インフォグラフィック", "AIワークフロー"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800&h=600",
    link: { label: "noteリンク", href: "https://note.com/tkykkd/n/nc3fcf9fe771a" },
    label: "継続運用中"
  }
];

const coreStrengths = [
  { 
    name: "事業運営・業務改善", 
    items: ["管理体制構築", "フロー設計と標準化", "コスト最適化"], 
    icon: <Settings className="w-5 h-5" /> 
  },
  { 
    name: "コンテンツ運用", 
    items: ["セミナー動画編集・配信", "YouTubeチャンネル運用", "Webページ制作・更新"], 
    icon: <Tv className="w-5 h-5" /> 
  },
  { 
    name: "組織づくり", 
    items: ["採用・育成・権限移譲", "関係者調整と実行管理", "継続運用できる体制づくり"], 
    icon: <Users className="w-5 h-5" /> 
  }
];

const certifications = [
  { 
    name: "2級ファイナンシャル・プランニング技能士", 
    image: "/cert-fp.jpg"
  },
  { name: "Google AI Essentials (Coursera, 2026年1月)", image: "/cert-google-ai.jpg" },
  { name: "Google Prompting Essentials (Coursera, 2026年2月)", image: "/cert-google-prompt.jpg" },
  { name: "Generative AI for Leaders (Vanderbilt/Coursera, 2026年2月)", image: "/cert-vanderbilt.jpg" },
  { name: "AI For Business (University of Pennsylvania/Coursera, 2026年2月)", image: "/cert-upenn.jpg" },
  { name: "Generative AI for Executives and Business Leaders (IBM/Coursera, 2026年2月)", image: "/cert-ibm.jpg" }
];

export default function Portfolio() {
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
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {[
                { label: "プロフィール", href: "#about" },
                { label: "強み", href: "#strengths" },
                { label: "実績", href: "#achievements" },
                { label: "お問い合わせ", href: "#contact" }
              ].map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex rounded-full" asChild>
              <a href="#contact">お問い合わせ</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 text-xs uppercase tracking-widest border-primary/50 text-primary">
              Business Operations & Operations Design
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              事業を前進させる、<br />
              <span className="text-muted-foreground">運用設計</span>と<span className="text-primary">実行力</span>。
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              経営・管理部門・コンテンツ運用の実務経験をもとに、業務改善、体制構築、動画/Web運用を一気通貫で担当。
              現在はQA/テスト領域への展開を見据え、AI活用を含む実務改善に取り組んでいます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                <a href="#achievements">実績を見る</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg" asChild>
                <a href="#contact">お問い合わせ</a>
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
                src="/profile.jpg" 
                alt="鬼童 貴章" 
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
                <span className="text-sm font-bold uppercase tracking-widest">プロフィール</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">
                Takayuki Kido
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>
                  大学卒業後、小売・法人支援・管理部門を経て、共同創業した法人で事業運営全般（製造、営業管理、顧客管理、物流、財務）を担当。
                </p>
                <p>
                  採用・育成・業務設計・改善まで一気通貫で実行し、再現可能な運用体制づくりを強みとしています。
                  現在はタイ在住で、リモート前提の業務支援に加え、Web制作・動画運用・AI活用開発を継続しています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t pt-8">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Globe className="w-4 h-4" />
                    <h4 className="font-bold text-foreground underline decoration-primary/30 underline-offset-4">Location</h4>
                  </div>
                  <p className="text-muted-foreground">Thailand (Remote Ready)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Mail className="w-4 h-4" />
                    <h4 className="font-bold text-foreground underline decoration-primary/30 underline-offset-4">Email</h4>
                  </div>
                  <p className="text-muted-foreground">tkykkd@gmail.com</p>
                </div>
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
              <span className="text-sm font-bold uppercase tracking-widest">Core Strengths</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">専門性と強み</h2>
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
                <span className="text-sm font-bold uppercase tracking-widest">Achievements</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">実務実績とプロジェクト</h2>
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
                  {"label" in achievement && achievement.label && (
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
                             {achievement.title.includes("YouTube") ? <Play className="w-3 h-3 text-red-500" /> : <ExternalLink className="w-3 h-3" />}
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
                <span className="text-sm font-bold uppercase tracking-widest">Certifications</span>
              </div>
              <h2 className="text-3xl font-bold">保有資格・習得</h2>
              <p className="mt-4 text-muted-foreground">
                最新のAI技術からファイナンスまで、実務に裏打ちされた知識基盤を継続的にアップデートしています。
              </p>
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
              <span className="text-sm font-bold uppercase tracking-widest">Contact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic tracking-tight">ご相談・お問い合わせ</h2>
            <p className="text-muted-foreground mb-12 text-lg md:text-xl leading-relaxed">
              業務改善、運用設計、コンテンツ運用、Web制作、動画制作、AI活用のご相談に対応しています。<br className="hidden md:block" />
              小規模案件から継続支援まで、お気軽にご連絡ください。
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full px-12 h-16 text-xl" asChild>
                <a href="mailto:tkykkd@gmail.com">メールを送る</a>
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
            © {new Date().getFullYear()} Takayuki Kido. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
