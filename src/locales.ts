export type Language = "ja" | "en" | "th" | "zh";

export const translations = {
  ja: {
    nav: { profile: "プロフィール", strengths: "強み", achievements: "実績", contact: "お問い合わせ" },
    hero: {
      badge: "Business Operations & Operations Design",
      title: ["事業を前進させる、", "運用設計", "と", "実行力", "。"],
      description: "経営・管理部門・コンテンツ運用の実務経験をもとに、業務改善、体制構築、動画/Web運用を一気通貫で担当。現在はQA/テスト領域への展開を見据え、AI活用を含む実務改善に取り組んでいます。",
      viewWork: "実績を見る",
      contact: "お問い合わせ"
    },
    about: {
      title: "プロフィール",
      name: "Takayuki Kido",
      p1: "大学卒業後、小売・法人支援・管理部門を経て、共同創業した法人で事業運営全般（製造、営業管理、顧客管理、物流、財務）を担当。",
      p2: "採用・育成・業務設計・改善まで一気通貫で実行し、再現可能な運用体制づくりを強みとしています。現在はタイ住まいで、リモート前提の業務支援に加え、Web制作・動画運用・AI活用開発を継続しています。",
      location: "Location",
      email: "Email"
    },
    strengths: {
      title: "Core Strengths",
      subtitle: "専門性と強み",
      biz: "事業運営・業務改善",
      bizItems: ["管理体制構築", "フロー設計と標準化", "コスト最適化"],
      content: "コンテンツ運用",
      contentItems: ["セミナー動画編集・配信", "YouTubeチャンネル運用", "Webページ制作・更新"],
      org: "組織づくり",
      orgItems: ["採用・育成・権限移譲", "関係者調整と実行管理", "継続運用できる体制づくり"]
    },
    achievements: {
      title: "Achievements",
      subtitle: "実務実績とプロジェクト",
      k: {
        title: "K社 健康食品製造販売",
        desc: "共同創業者として事業運営全般を担当。1年目売上3.4億円、2年目13億円超の成長を実現。少人数体制での全店セミナー運営と業務最適化を推進しました。",
        tags: ["事業運営", "売上成長", "業務最適化"]
      },
      n: {
        title: "N社 健康食品製造販売",
        desc: "管理部マネージャーとして製造・会員・物流管理を統括。原料調達の見直しにより仕入単価を約半減。月間3,000万円規模の仕入に対し、年間約1,800万円規模のコスト改善を実現。",
        tags: ["管理部門", "コスト削減", "サプライチェーン"]
      },
      h: {
        title: "H社 船舶用プリンターサービス",
        desc: "製品管理・総務・経営企画の複数部門を立ち上げ。年商3,000万円から約3年間で4億円弱への拡大に貢献し、中国・青島拠点の在庫/出荷体制整備も担当。",
        tags: ["部門立ち上げ", "海外拠点管理", "経営企画"]
      },
      studio: {
        title: "ONIKA STUDIO",
        subtitle: "クリエイター向け多機能ポートフォリオ",
        desc: "構成設計、文言設計、公開までを短期間で実装。作品を魅力的に見せる導線設計と、更新しやすい運用性を重視して制作。",
        tags: ["Web制作", "UI/UX設計", "運用性重視"],
        btn: "サイトを見る"
      },
      apps: {
        title: "個人開発アプリ",
        desc: "業務課題の解決を目的に、AI活用アプリを企画・実装。短期間で試作し、実運用を意識したUIと導線を設計。",
        tags: ["AI活用", "課題解決", "プロダクト企画"],
        links: ["姓名判断鑑定", "RAG型AI"]
      },
      youtube: {
        title: "YouTubeチャンネル運用",
        desc: "立ち上げから撮影、編集、運用まで一気通貫で対応。継続配信と改善を重ね、実務として制作体制を構築。",
        tags: ["動画制作", "チャンネル運営", "体制構築"],
        links: ["Yappa Japan（継続中）", "プルックサージャパン（2021.7〜2025.10運用）", "タイランドエリート（スポット）"]
      },
      project365: {
        title: "Project365（継続配信）",
        desc: "記事執筆に加え、音声解説・デザイン制作まで含む配信を運用。AIを活用した企画〜更新フローを実践。",
        tags: ["note継続配信", "インフォグラフィック", "AIワークフロー"],
        label: "継続運用中",
        btn: "noteリンク"
      }
    },
    certs: {
      title: "Certifications",
      subtitle: "保有資格・習得",
      desc: "最新のAI技術からファイナンスまで、実務に裏打ちされた知識基盤を継続的にアップデートしています。"
    },
    contact: {
      title: "Contact",
      subtitle: "ご相談・お問い合わせ",
      desc: "業務改善、運用設計、コンテンツ運用、Web制作、動画制作、AI活用のご相談に対応しています。小規模案件から継続支援まで、お気軽にご連絡ください。",
      btn: "メールを送る"
    },
    footer: { rights: "All rights reserved." }
  },
  en: {
    nav: { profile: "Profile", strengths: "Strengths", achievements: "Achievements", contact: "Contact" },
    hero: {
      badge: "Business Operations & Operations Design",
      title: ["Driving Business Forward with ", "Operations Design", " and ", "Execution", "."],
      description: "Based on hands-on experience in management, administration, and content operations, I handle everything from process improvement and system development to video/Web operations. Currently focusing on applying AI to improve practical operations with an eye toward QA/testing.",
      viewWork: "View Work",
      contact: "Contact"
    },
    about: {
      title: "Profile",
      name: "Takayuki Kido",
      p1: "After graduating from university, I worked in retail, corporate support, and administrative departments before co-founding a company where I was responsible for overall business operations (manufacturing, sales management, customer management, logistics, and finance).",
      p2: "My strength lies in creating reproducible operational systems by executing everything from hiring/training to process design and improvement. Currently based in Thailand, providing high-level remote business support while continuing Web production, video operations, and AI development.",
      location: "Location",
      email: "Email"
    },
    strengths: {
      title: "Core Strengths",
      subtitle: "Expertise & Strengths",
      biz: "Business Ops & Improvement",
      bizItems: ["Management System Dev", "Process Design & Std", "Cost Optimization"],
      content: "Content Operations",
      contentItems: ["Seminar Editing & Streaming", "YouTube Channel Ops", "Web Creation & Updates"],
      org: "Organization Building",
      orgItems: ["Hiring & Training", "Stakeholder Adjustment", "Sustainable Systems"]
    },
    achievements: {
      title: "Achievements",
      subtitle: "Main Achievements & Projects",
      k: {
        title: "Company K (Health Food Manufacturing & Sales)",
        desc: "Responsible for overall business operations as a co-founder. Achieved growth with 340 million yen in 1st year and over 1.3 billion yen in 2nd year. Managed nationwide seminars with a small team.",
        tags: ["Business Ops", "Growth", "Optimization"]
      },
      n: {
        title: "Company N (Health Food Manufacturing & Sales)",
        desc: "Managed manufacturing, membership, and logistics as Administration Dept Manager. Halved unit purchase prices. Achieved 18 million yen annual cost reduction on 30 million yen/month scale.",
        tags: ["Admin", "Cost Saving", "SCM"]
      },
      h: {
        title: "Company H (Marine Printer Services)",
        desc: "Established multiple departments including Product Management, HR, and Corporate Planning. Contributed to growth from 30 million to nearly 400 million yen annually.",
        tags: ["Dept Startup", "Overseas Management", "Planning"]
      },
      studio: {
        title: "ONIKA STUDIO",
        subtitle: "Multi-functional Portfolio for Creators",
        desc: "Implemented structure design and copywriting in a short period. Focused on attractive navigation for works and easy maintenance for long-term operations.",
        tags: ["Web Production", "UI/UX", "Operability"],
        btn: "View Site"
      },
      apps: {
        title: "Personal Apps",
        desc: "Designed and implemented AI-powered apps to solve business challenges. Fast prototyping with a focus on practical UI and user flows.",
        tags: ["AI Implementation", "Problem Solving", "Planning"],
        links: ["Fortune Telling App", "RAG AI Chat"]
      },
      youtube: {
        title: "YouTube Operations",
        desc: "End-to-end support from channel launch to filming, editing, and management. Built a production system for sustainable delivery and improvement.",
        tags: ["Video Production", "Channel Ops", "System Building"],
        links: ["Yappa Japan (Ongoing)", "Prukusa Japan (2021.7-2025.10)", "Thailand Elite (Project-based)"]
      },
      project365: {
        title: "Project365 (Ongoing)",
        desc: "Operating continuous delivery including article writing, audio commentary, and infographics. Practicing AI-driven workflows from planning to updates.",
        tags: ["note Posting", "Infographics", "AI Workflow"],
        label: "Ongoing",
        btn: "note Link"
      }
    },
    certs: {
      title: "Certifications",
      subtitle: "Qualifications & Skills",
      desc: "Continuously updating my knowledge base from latest AI technologies to finance, backed by practical experience."
    },
    contact: {
      title: "Contact",
      subtitle: "Get in Touch",
      desc: "Available for consultations on business improvement, operations design, content operations, Web/Video production, and AI implementation. Feel free to contact me for small projects or long-term support.",
      btn: "Send Email"
    },
    footer: { rights: "All rights reserved." }
  },
  th: {
    nav: { profile: "ข้อมูลส่วนตัว", strengths: "จุดแข็ง", achievements: "ผลงาน", contact: "ติดต่อ" },
    hero: {
      badge: "Business Operations & Operations Design",
      title: ["ขับเคลื่อนธุรกิจด้วย ", "การออกแบบการดำเนินงาน", " และ ", "การลงมือทำ", "."],
      description: "จากการเป็นผู้มีประสบการณ์ตรงในการบริหารจัดการ ฝ่ายธุรการ และการดำเนินงานด้านคอนテนต์ ผมดูแลตั้งแต่การปรับปรุงกระบวนการทำงาน การพัฒนาระบบ ไปจนถึงการดูแลวิดีโอและเว็บ ปัจจุบันมุ่งเน้นการประยุกต์ใช้ AI เพื่อปรับปรุงการทำงานจริง โดยมองไปที่สายงาน QA/Testing",
      viewWork: "ดูผลงาน",
      contact: "ติดต่อสอบถาม"
    },
    about: {
      title: "ข้อมูลส่วนตัว",
      name: "Takayuki Kido",
      p1: "หลังจากจบการศึกษา ผมได้ทำงานในด้านค้าปลีก การสนับสนุนองค์กร และฝ่ายธุรการ ก่อนที่จะร่วมก่อตั้งบริษัท โดยรับผิดชอบการดำเนินงานทางธุรกิจโดยรวม (การผลิต การจัดการการขาย การจัดการลูกค้า โลจิสติกส์ และการเงิน)",
      p2: "จุดแข็งของผมคือการสร้างระบบปฏิบัติการที่ทำซ้ำได้ โดยดำเนินงานตั้งแต่การสรรหา/การฝึกอบรม ไปจนถึงการออกแบบกระบวนการและการปรับปรุง ปัจจุบันพำนักอยู่ที่ประเทศไทย ให้บริการสนับสนุนทางธุรกิจจากระยะไกลในระดับสูง พร้อมทั้งดำเนินการผลิตเว็บ การดำเนินงานด้านวิดีโอ และการพัฒนา AI อย่างต่อเนื่อง",
      location: "ที่ตั้ง",
      email: "อีเมล"
    },
    strengths: {
      title: "จุดแข็งหลัก",
      subtitle: "ความเชี่ยวชาญและจุดแข็ง",
      biz: "การดำเนินงานธุรกิจและการปรับปรุง",
      bizItems: ["การพัฒนาระบบการจัดการ", "การออกแบบกระบวนการและมาตรฐาน", "การเพิ่มประสิทธิภาพต้นทุน"],
      content: "การดำเนินงานด้านคอนเทนต์",
      contentItems: ["การตัดต่อและการสตรีมงานสัมมนา", "การจัดการช่อง YouTube", "การสร้างและอัปเดตเว็บไซต์"],
      org: "การสร้างองค์กร",
      orgItems: ["การรับสมัครและการฝึกอบรม", "การประสานงานกับผู้มีส่วนได้ส่วนเสีย", "ระบบที่ยั่งยืน"]
    },
    achievements: {
      title: "ผลงาน",
      subtitle: "ผลงานหลักและโครงการ",
      k: {
        title: "บริษัท K (ผลิตและจำหน่ายอาหารเสริม)",
        desc: "รับผิดชอบการดำเนินงานทางธุรกิจโดยรวมในฐานะผู้ร่วมก่อตั้ง ประสบความสำเร็จในการเติบโตด้วยยอดขาย 340 ล้านเยนในปีแรก และมากกว่า 1.3 พันล้านเยนในปีที่สอง จัดการงานสัมมนาทั่วประเทศด้วยทีมงานขนาดเล็ก",
        tags: ["การดำเนินงานธุรกิจ", "การเติบโต", "การเพิ่มประสิทธิภาพ"]
      },
      n: {
        title: "บริษัท N (ผลิตและจำหน่ายอาหารเสริม)",
        desc: "จัดการฝ่ายผลิต สมาชิก และโลจิสติกส์ในฐานะผู้จัดการฝ่ายธุรการ ปรับลดราคาซื้อหน่วยลงครึ่งหนึ่ง ประสบความสำเร็จในการลดต้นทุนปีละ 18 ล้านเยน จากขนาดการซื้อ 30 ล้านเยน/เดือน",
        tags: ["ธุรการ", "การลดต้นทุน", "SCM"]
      },
      h: {
        title: "บริษัท H (บริการเครื่องพิมพ์สำหรับเรือ)",
        desc: "จัดตั้งแผนกต่างๆ รวมถึงการจัดการผลิตภัณฑ์ ทรัพยากรบุคคล และการวางแผนองค์กร มีส่วนช่วยในการเติบโตจาก 30 ล้านเยนเป็นเกือบ 400 ล้านเยนต่อปี",
        tags: ["การเริ่มต้นแผนก", "การจัดการต่างประเทศ", "การวางแผน"]
      },
      studio: {
        title: "ONIKA STUDIO",
        subtitle: "พอร์ตโฟลิโออเนกประสงค์สำหรับครีเอเตอร์",
        desc: "ออกแบบโครงสร้างและเขียนเนื้อหาในระยะเวลาอันสั้น มุ่งเน้นการนำทางที่น่าดึงดูดสำหรับผลงานและการบำรุงรักษาที่ง่ายสำหรับการดำเนินงานระยะยาว",
        tags: ["การผลิตเว็บ", "UI/UX", "การใช้งานง่าย"],
        btn: "ดูเว็บไซต์"
      },
      apps: {
        title: "แอปพลิเคชันที่พัฒนาเอง",
        desc: "ออกแบบและนำแอปพลิเคชันที่ขับเคลื่อนด้วย AI มาใช้เพื่อแก้ปัญหาทางธุรกิจ การสร้างต้นแบบที่รวดเร็วโดยมุ่งเน้นที่ UI ที่ใช้งานได้จริงและขั้นตอนของผู้ใช้",
        tags: ["การนำ AI มาใช้", "การแก้ปัญหา", "การวางแผน"],
        links: ["แอปทำนายดวง", "RAG AI แชท"]
      },
      youtube: {
        title: "การจัดการ YouTube",
        desc: "สนับสนุนแบบครบวงจรตั้งแต่การเปิดช่อง การถ่ายทำ การตัดต่อ และการจัดการ สร้างระบบการผลิตเพื่อการส่งมอบและการปรับปรุงที่ยั่งยืน",
        tags: ["การผลิตวิดีโอ", "การจัดการช่อง", "การสร้างระบบ"],
        links: ["Yappa Japan (ต่อเนื่อง)", "Prukusa Japan (2021.7-2025.10)", "Thailand Elite (ตามโครงการ)"]
      },
      project365: {
        title: "Project365 (ต่อเนื่อง)",
        desc: "ดำเนินการส่งมอบอย่างต่อเนื่อง รวมถึงการเขียนบทความ คำบรรยายเสียง และอินโฟกราฟิก ปฏิบัติงานด้วย AI workflow ตั้งแต่การวางแผนไปจนถึงการอัปเดต",
        tags: ["การโพสต์ note", "อินโฟกราฟิก", "AI Workflow"],
        label: "กำลังดำเนินการ",
        btn: "ลิงก์ note"
      }
    },
    certs: {
      title: "การรับรอง",
      subtitle: "คุณสมบัติและทักษะ",
      desc: "อัปเดตฐานความรู้ของผมอย่างต่อเนื่อง ตั้งแต่เทคโนโลยี AI ล่าสุดไปจนถึงการเงิน โดยได้รับการสนับสนุนจากประสบการณ์จริง"
    },
    contact: {
      title: "ติดต่อ",
      subtitle: "สอบถามข้อมูล",
      desc: "ยินดีให้คำปรึกษาเกี่ยวกับการปรับปรุงธุรกิจ การออกแบบการดำเนินงาน การดำเนินงานด้านคอนเทนต์ การผลิตเว็บ/วิดีโอ และการนำ AI มาใช้ ติดต่อผมสำหรับโครงการขนาดเล็กหรือการสนับสนุนระยะยาว",
      btn: "ส่งอีเมล"
    },
    footer: { rights: "สงวนลิขสิทธิ์ทั้งหมด" }
  },
  zh: {
    nav: { profile: "个人简介", strengths: "核心优势", achievements: "项目成就", contact: "联系我" },
    hero: {
      badge: "Business Operations & Operations Design",
      title: ["通过", "运营设计", "与", "执行力", "推动业务前进。"],
      description: "凭借在管理、行政和内容运营方面的实操经验，我负责从流程改进、系统开发到视频和Web运营的全过程。目前专注于应用AI提高实际运营效率，并关注QA/测试领域。",
      viewWork: "查看成品",
      contact: "联系我"
    },
    about: {
      title: "个人简介",
      name: "Takayuki Kido",
      p1: "大学毕业后，我先后在零售、企业支持和行政部门工作。随后参与共同创立了一家公司，负责整体业务运营（制造、销售管理、客户管理、物流和财务）。",
      p2: "我的优势在于通过从招聘培训到流程设计和改进，建立可预测和可复制的运营体系。目前常驻泰国，提供高水平的远程业务支持，同时持续进行网页制作、视频运营和AI开发。",
      location: "所在地",
      email: "电子邮件"
    },
    strengths: {
      title: "Core Strengths",
      subtitle: "专业能力与优势",
      biz: "业务运营与改进",
      bizItems: ["管理体系开发", "流程设计与标准化", "成本优化"],
      content: "内容运营",
      contentItems: ["会议视频剪辑与推流", "YouTube频道运营", "网页制作与更新"],
      org: "组织建设",
      orgItems: ["人才招聘与培训", "利益相关者协调", "建立可持续体系"]
    },
    achievements: {
      title: "Achievements",
      subtitle: "主要实务业绩与项目",
      k: {
        title: "K公司（保健食品制造与销售）",
        desc: "作为共同创始人负责整体业务运营。实现第一年收入3.4亿日元，第二年超过13亿日元的增长。带领精干团队负责全日本范围的研讨会运营。",
        tags: ["业务运营", "收入增长", "流程优化"]
      },
      n: {
        title: "N公司（保健食品制造与销售）",
        desc: "作为管理部门经理，统筹制造、会员和物流管理。通过重新评估原材料采购使单价减半。在每月3000万日元的采购规模下，实现年度约1800万日元的成本节约。",
        tags: ["行政管理", "减少成本", "供应链管理"]
      },
      h: {
        title: "H公司（船舶打印机服务）",
        desc: "建立并领导了产品管理、行政总务和经营规划等多个部门。为年收入从3000万日元增长到近4亿日元做出贡献。负责中国青岛基地的仓储与发货体系建设。",
        tags: ["部门初创", "海外基地管理", "业务规划"]
      },
      studio: {
        title: "ONIKA STUDIO",
        subtitle: "面向创作者的多功能作品集",
        desc: "在短时间内完成结构设计和文案策划。注重作品的导线设计，使其更具吸引力，并确保长期运营的高维护性。",
        tags: ["网页制作", "UI/UX设计", "易维护性"],
        btn: "查看网站"
      },
      apps: {
        title: "个人开发应用",
        desc: "为解决业务挑战而策划并实现AI驱动的应用。快速原型制作，注重实用のUI和用户流设计。",
        tags: ["AI应用", "问题解决", "产品策划"],
        links: ["姓名判断鉴定", "RAG AI 聊天"]
      },
      youtube: {
        title: "YouTube 频道运营",
        desc: "提供从频道启动到拍摄、剪辑和运营的全程支持。建立了可持续发布和改进的视频制作执行体系。",
        tags: ["视频制作", "频道运营", "体系建设"],
        links: ["Yappa Japan (持续中)", "Prukusa Japan (2021.7-2025.10)", "Thailand Elite (单次项目)"]
      },
      project365: {
        title: "Project365 (持续发布)",
        desc: "除了撰写文章，还负责包括音频解说和信息图表制作在内的持续发布运营。实践利用AI从策划到更新的完整工作流。",
        tags: ["note平台发布", "信息图表", "AI工作流"],
        label: "持续运营中",
        btn: "note 链接"
      }
    },
    certs: {
      title: "Certifications",
      subtitle: "持有资格与技能",
      desc: "持续更新知识库，涵盖从最新的AI技术到财务金融领域，并以实务经验为基础。"
    },
    contact: {
      title: "Contact",
      subtitle: "咨询与联系",
      desc: "提供业务改进、运营设计、内容运营、网页制作、视频制作及AI应用方面的咨询。无论是小型项目还是长期支持，欢迎随时联系。",
      btn: "发送邮件"
    },
    footer: { rights: "版权所有。" }
  }
};
