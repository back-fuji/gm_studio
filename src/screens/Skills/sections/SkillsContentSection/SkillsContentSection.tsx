interface Skill {
  name: string;
  icon: string;
  experience: string;
  rating: number;
}

const skillsData: Skill[] = [
  // 星5（経験3年）
  {
    name: "HTML5",
    icon: "html5",
    experience: "経験 3年以上",
    rating: 5,
  },
  {
    name: "CSS3",
    icon: "css3",
    experience: "経験 3年以上",
    rating: 5,
  },
  {
    name: "Laravel",
    icon: "laravel",
    experience: "経験 2年以上",
    rating: 5,
  },
  {
    name: "Filament",
    icon: "filament",
    experience: "経験 2年以上",
    rating: 5,
  },
  {
    name: "Livewire",
    icon: "livewire",
    experience: "経験 2年以上",
    rating: 5,
  },
  {
    name: "Vue.js",
    icon: "vue_js",
    experience: "経験 2年以上",
    rating: 5,
  },
  {
    name: "jQuery",
    icon: "jquery",
    experience: "経験 3年以上",
    rating: 5,
  },
  {
    name: "PHP",
    icon: "php",
    experience: "経験 3年以上",
    rating: 5,
  },
  // 星4
  {
    name: "Inertia",
    icon: "inertia",
    experience: "経験 2年以上",
    rating: 4,
  },
  {
    name: "Alpine.js",
    icon: "alpine",
    experience: "経験 2年以上",
    rating: 4,
  },
  {
    name: "WordPress",
    icon: "wordpress",
    experience: "経験 2年以上",
    rating: 4,
  },
  {
    name: "GitHub",
    icon: "github",
    experience: "経験 2年以上",
    rating: 4,
  },
  {
    name: "GitLab",
    icon: "gitlab",
    experience: "経験 2年以上",
    rating: 4,
  },
  {
    name: "Stripe",
    icon: "stripe",
    experience: "経験 2年以上",
    rating: 4,
  },
  // 星3（経験2年）
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    experience: "経験 2年",
    rating: 3,
  },
  {
    name: "Firebase",
    icon: "firebase",
    experience: "経験 2年",
    rating: 3,
  },
  {
    name: "JavaScript",
    icon: "javascript",
    experience: "経験 2年",
    rating: 3,
  },
  {
    name: "HubSpot API",
    icon: "hubspot",
    experience: "経験 2年",
    rating: 3,
  },
  {
    name: "Google API",
    icon: "google_api",
    experience: "経験 2年",
    rating: 3,
  },
  // 星2
  {
    name: "React.js",
    icon: "react",
    experience: "経験 1年以上",
    rating: 2,
  },
  {
    name: "Next.js",
    icon: "nextjs",
    experience: "経験 1年以上",
    rating: 2,
  },
  {
    name: "Amazon Chime",
    icon: "amazon_chime",
    experience: "経験 1年以上",
    rating: 2,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`material-symbols-outlined ${
            index < rating ? "fill text-star-filled" : "text-star-empty"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  // Material Symbolsアイコンマッピング（より適切なアイコンに変更）
  const iconMap: Record<string, string> = {
    html5: "code", // HTML5
    css3: "style", // CSS3
    laravel: "settings_applications", // Laravel
    filament: "dashboard_customize", // Filament
    livewire: "bolt", // Livewire
    vue_js: "view_module", // Vue.js
    jquery: "code_blocks", // jQuery
    php: "terminal", // PHP
    inertia: "sync_alt", // Inertia
    alpine: "flash_on", // Alpine.js
    wordpress: "article", // WordPress
    tailwind: "palette", // Tailwind CSS
    firebase: "local_fire_department", // Firebase
    javascript: "code", // JavaScript
    hubspot: "hub", // HubSpot API
    google_api: "api", // Google API
    github: "account_tree", // GitHub
    gitlab: "storage", // GitLab
    stripe: "payments", // Stripe
    amazon_chime: "videocam", // Amazon Chime
    react: "web", // React.js
    nextjs: "arrow_forward", // Next.js
  };

  const iconName = iconMap[skill.icon] || skill.icon;

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-card-dark p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined !text-3xl">{iconName}</span>
        </div>
        <div>
          <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg tracking-[-0.33px] leading-[27.5px]">
            {skill.name}
          </h3>
          <p className="text-sm text-text-muted-dark">{skill.experience}</p>
        </div>
      </div>
      <StarRating rating={skill.rating} />
    </div>
  );
};

export const SkillsContentSection = (): JSX.Element => {
  return (
    <main className="flex flex-col gap-12 mt-10 md:mt-16">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4">
        <div className="flex flex-col gap-2">
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
            スキル <span className="font-display text-primary">SKILLS</span>
          </p>
          <p className="text-text-muted-dark text-base font-normal leading-normal">
            私がWebアプリケーション開発で使用する言語、フレームワーク、ツール一覧です。
          </p>
        </div>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </main>
  );
};


