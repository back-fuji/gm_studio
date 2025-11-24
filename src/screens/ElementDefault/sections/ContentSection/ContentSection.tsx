  import {
    ChevronDownIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    XIcon,
  } from "lucide-react";
  import { useState, FormEvent, useEffect, useRef } from "react";
  import { useLocation } from "react-router-dom";
  import { Badge } from "../../../../components/ui/badge";
  import { Button } from "../../../../components/ui/button";
  import { Card, CardContent } from "../../../../components/ui/card";
  import { Input } from "../../../../components/ui/input";
  import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
  import { Textarea } from "../../../../components/ui/textarea";
  
  // Material Symbolsアイコンマッピング
  const skillIconMap: Record<string, string> = {
    html5: "code",
    css3: "style",
    laravel: "settings_applications",
    filament: "dashboard_customize",
    livewire: "bolt",
    vue_js: "view_module",
    jquery: "code_blocks",
    php: "terminal",
    inertia: "sync_alt",
    alpine: "flash_on",
    wordpress: "article",
    tailwind: "palette",
    firebase: "local_fire_department",
    javascript: "code",
    hubspot: "hub",
    google_api: "api",
    github: "account_tree",
    gitlab: "storage",
    stripe: "payments",
    amazon_chime: "videocam",
    react: "web",
    nextjs: "arrow_forward",
  };

  const skillsData = [
    // 星5（先頭に配置）
    {
      name: "HTML5",
      iconKey: "html5",
      rating: 5,
    },
    {
      name: "CSS3",
      iconKey: "css3",
      rating: 5,
    },
    {
      name: "Laravel",
      iconKey: "laravel",
      rating: 5,
    },
    {
      name: "Filament",
      iconKey: "filament",
      rating: 5,
    },
    {
      name: "Livewire",
      iconKey: "livewire",
      rating: 5,
    },
    {
      name: "Vue.js",
      iconKey: "vue_js",
      rating: 5,
    },
    {
      name: "jQuery",
      iconKey: "jquery",
      rating: 5,
    },
    {
      name: "PHP",
      iconKey: "php",
      rating: 5,
    },
    // 星4
    {
      name: "Inertia",
      iconKey: "inertia",
      rating: 4,
    },
    {
      name: "Alpine.js",
      iconKey: "alpine",
      rating: 4,
    },
    {
      name: "WordPress",
      iconKey: "wordpress",
      rating: 4,
    },
    {
      name: "GitHub",
      iconKey: "github",
      rating: 4,
    },
    {
      name: "GitLab",
      iconKey: "gitlab",
      rating: 4,
    },
    {
      name: "Stripe",
      iconKey: "stripe",
      rating: 4,
    },
    // 星3
    {
      name: "Tailwind CSS",
      iconKey: "tailwind",
      rating: 3,
    },
    {
      name: "Firebase",
      iconKey: "firebase",
      rating: 3,
    },
    {
      name: "JavaScript",
      iconKey: "javascript",
      rating: 3,
    },
    {
      name: "HubSpot API",
      iconKey: "hubspot",
      rating: 3,
    },
    {
      name: "Google API",
      iconKey: "google_api",
      rating: 3,
    },
    // 星2
    {
      name: "React.js",
      iconKey: "react",
      rating: 2,
    },
    {
      name: "Next.js",
      iconKey: "nextjs",
      rating: 2,
    },
    {
      name: "Amazon Chime",
      iconKey: "amazon_chime",
      rating: 2,
    },
  ];
  
  const projectsData = [
    {
      title: "Analytics Dashboard",
      description: "リアルタイムデータ可視化ダッシュボード。ReactとD3.jsを使用。",
      image:
        "https://c.animaapp.com/micu87i2SXE1a3/img/ab6axua7pbzgi0fomz7lrzedwlmhueelqyip-pa7etdvwrex7clcdxwhvplf780c.png",
      tags: ["React", "Node.js", "D3.js"],
    },
    {
      title: "Task Management App",
      description: "チーム向けのタスク管理ツール。Next.jsとFirebaseで構築。",
      image:
        "https://c.animaapp.com/micu87i2SXE1a3/img/ab6axubovv7fkgfoaystwvnmiu-5sr6wrnvffozxoytc-yf-8jm-nb7y1ogw6e6s.png",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      title: "E-commerce Site",
      description: "Vue.jsとStripeを統合したモダンなオンラインストア。",
      image:
        "https://c.animaapp.com/micu87i2SXE1a3/img/ab6axuawzoju19ztl9wifbxmriy2di9mkh0qj3dqfjfdapragmm-oddg--blpsds.png",
      tags: ["Vue.js", "Stripe", "GraphQL"],
    },
  ];
  
  const experienceData = [
    {
      title: "シニアフロントエンドエンジニア, Tech Solutions Inc.",
      period: "2022 - 現在",
      achievements: [
        "主要なEコマースプラットフォームのUI/UXをReactとTypeScriptを使用して再設計。",
        "コンポーネントライブラリを開発し、開発効率を30%向上。",
        "パフォーマンスチューニングにより、ページの読み込み速度を50%改善。",
        "ジュニア開発者2名のメンタリングとコードレビューを担当。",
      ],
    },
    {
      title: "フロントエンドエンジニア, Tech Solutions Inc.",
      period: "2020 - 2022",
      achievements: [
        "Next.jsを用いた新しいマーケティングサイトの構築を主導。",
        "REST APIと連携し、動的なコンテンツ表示を実現。",
        "Storybookを導入し、UIコンポーネントのテストと文書化を効率化。",
      ],
    },
    {
      title: "Webデベロッパー, Creative Agency",
      period: "2018 - 2020",
      achievements: [
        "クライアント向けにWordPressサイトを構築・カスタマイズ。",
        "HTML, CSS, JavaScriptを使用して、レスポンシブなランディングページを作成。",
        "PHPによるカスタムWordPressプラグインの開発。",
      ],
    },
  ];
  
  // reCAPTCHA v3の型定義
  declare global {
    interface Window {
      grecaptcha: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    }
  }

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }

  // タイピングエフェクト用のカスタムフック
  const useTypingEffect = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState(""); // 初期値は空文字列（非表示）
    const isTypingRef = useRef(false);
    const hasStartedRef = useRef(false);
    const indexRef = useRef(0);
    const timeoutRef = useRef<number | null>(null);

    const startTyping = () => {
      if (isTypingRef.current || hasStartedRef.current) return;
      
      hasStartedRef.current = true;
      isTypingRef.current = true;
      setDisplayedText("");
      indexRef.current = 0;

      const type = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current += 1;
          timeoutRef.current = window.setTimeout(type, speed);
        } else {
          isTypingRef.current = false;
        }
      };

      type();
    };

    // クリーンアップ
    useEffect(() => {
      return () => {
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return { displayedText, startTyping };
  };

  export const ContentSection = (): JSX.Element => {
    const location = useLocation();
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [honeypot, setHoneypot] = useState(""); // ハニーポット（迷惑メール対策）
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // タイピングエフェクト用の状態
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);
    const nameText = "後藤　正文";
    const titleText = "Frontend Developer & Backend Developer | Markup Engineer";
    const nameTyping = useTypingEffect(nameText, 80);
    const titleTyping = useTypingEffect(titleText, 30);

    // reCAPTCHA v3のサイトキー（環境変数から取得、デフォルトは空）
    const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";
    // Formspreeのエンドポイント（環境変数から取得）
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

    // デバッグ用（開発環境のみ）
    useEffect(() => {
      if (import.meta.env.DEV) {
        console.log("Environment variables check:");
        console.log("VITE_RECAPTCHA_SITE_KEY:", RECAPTCHA_SITE_KEY || "NOT SET");
        console.log("VITE_FORMSPREE_ENDPOINT:", FORMSPREE_ENDPOINT || "NOT SET");
      }
    }, []);

    // reCAPTCHA v3のスクリプトを動的に読み込む
    useEffect(() => {
      if (RECAPTCHA_SITE_KEY && !document.querySelector('script[src*="recaptcha"]')) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else if (!RECAPTCHA_SITE_KEY) {
        console.warn("reCAPTCHA site key is not set. Please check your .env file and restart the dev server.");
      }
    }, [RECAPTCHA_SITE_KEY]);

    // タイピングエフェクトを開始する関数
    const startTypingAnimation = () => {
      if (hasAnimatedRef.current) return;
      
      hasAnimatedRef.current = true;
      // 少し遅延させてからタイピングエフェクトを開始
      setTimeout(() => {
        nameTyping.startTyping();
        // 名前のタイピングが終わってからタイトルを開始（名前の文字数 × 速度 + 余裕）
        const nameTypingDuration = nameText.length * 80 + 200;
        setTimeout(() => {
          titleTyping.startTyping();
        }, nameTypingDuration);
      }, 300);
    };

    // Intersection Observerでタイピングエフェクトを開始
    useEffect(() => {
      if (!aboutSectionRef.current || hasAnimatedRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              // 要素が画面の40%の位置に来たかを確認
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const elementTop = rect.top;
              const elementVisibleHeight = viewportHeight - elementTop;
              const visibleRatio = elementVisibleHeight / viewportHeight;
              
              if (visibleRatio >= 0.4) {
                startTypingAnimation();
              }
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // 複数の閾値を設定
          rootMargin: "0px",
        }
      );

      observer.observe(aboutSectionRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

    // ハッシュ変更（ヘッダークリック）を検知してタイピングエフェクトを開始
    useEffect(() => {
      const checkAndStartAnimation = () => {
        if (hasAnimatedRef.current || !aboutSectionRef.current) return;
        
        const hash = location.hash || window.location.hash;
        if (hash === "#about") {
          // スクロール完了を待つ
          setTimeout(() => {
            const element = aboutSectionRef.current;
            if (element) {
              const rect = element.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
              const elementTop = rect.top;
              const elementVisibleHeight = viewportHeight - elementTop;
              const visibleRatio = elementVisibleHeight / viewportHeight;
              
              // 要素が画面の40%の位置に来たかを確認
              if (visibleRatio >= 0.4 && !hasAnimatedRef.current) {
                startTypingAnimation();
              }
            }
          }, 600);
        }
      };

      // 初回ロード時とハッシュ変更時を検知
      if (typeof window !== "undefined") {
        checkAndStartAnimation();
        
        // スクロールイベントも監視（ヘッダークリック後のスクロール完了を検知）
        const handleScroll = () => {
          checkAndStartAnimation();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // ハッシュ変更を監視
        const handleHashChange = () => {
          checkAndStartAnimation();
        };
        
        window.addEventListener("hashchange", handleHashChange);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("hashchange", handleHashChange);
        };
      }
    }, [location.hash]);

    const validateForm = (): boolean => {
      const newErrors: FormErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = "お名前を入力してください";
      }

      if (!formData.email.trim()) {
        newErrors.email = "メールアドレスを入力してください";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "有効なメールアドレスを入力してください";
      }

      if (!formData.message.trim()) {
        newErrors.message = "メッセージを入力してください";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "メッセージは10文字以上で入力してください";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // ハニーポットチェック（ボット対策）
      if (honeypot) {
        console.log("Bot detected");
        return;
      }

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        // reCAPTCHA v3の実行
        let recaptchaToken = "";
        if (RECAPTCHA_SITE_KEY) {
          // reCAPTCHAが読み込まれるまで待つ
          if (!window.grecaptcha) {
            console.error("reCAPTCHA not loaded");
            throw new Error("reCAPTCHAが読み込まれていません。しばらく待ってから再度お試しください。");
          }

          try {
            // grecaptcha.ready()で読み込み完了を待つ
            await new Promise<void>((resolve) => {
              window.grecaptcha.ready(() => {
                resolve();
              });
            });

            console.log("reCAPTCHA ready, executing...");
            recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
              action: "submit_contact_form",
            });

            console.log("reCAPTCHA token:", recaptchaToken ? "取得成功" : "取得失敗");

            if (!recaptchaToken) {
              throw new Error("reCAPTCHAトークンの取得に失敗しました");
            }
          } catch (recaptchaError) {
            console.error("reCAPTCHA error:", recaptchaError);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus("idle"), 5000);
            setIsSubmitting(false);
            return;
          }
        } else {
          console.log("reCAPTCHA site key not set, skipping reCAPTCHA");
        }

        // Formspreeへの送信データを準備
        const submitData: Record<string, string> = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };

        // reCAPTCHAトークンは送信しない（Formspree側でreCAPTCHAが無効化されている場合）
        // FormspreeでreCAPTCHAを有効にする場合は、以下のコメントを外す
        // if (recaptchaToken) {
        //   submitData._recaptcha = recaptchaToken;
        // }

        // Formspreeへの送信
        const endpoint = FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";
        console.log("Sending to:", endpoint);
        console.log("Submit data:", submitData);
        
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(submitData),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
          // 3秒後にステータスをリセット
          setTimeout(() => setSubmitStatus("idle"), 3000);
        } else {
          const errorData = await response.json().catch(() => ({}));
          console.error("Formspree error response:", errorData);
          console.error("Response status:", response.status);
          throw new Error(errorData.error || `送信に失敗しました (${response.status})`);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus("error");
        // 5秒後にエラーステータスをリセット
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (
      field: keyof FormData,
      value: string
    ) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // エラーをクリア
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

    const openModal = (project: typeof projectsData[0]) => {
      setSelectedProject(project);
      setIsModalOpen(true);
      // モーダル表示時にbodyのスクロールを無効化
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
      // モーダル閉じる時にbodyのスクロールを有効化
      document.body.style.overflow = "unset";
    };

    // モーダル背景クリックで閉じる
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };

    // ESCキーでモーダルを閉じる
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isModalOpen) {
          closeModal();
        }
      };

      if (isModalOpen) {
        window.addEventListener("keydown", handleEscape);
      }

      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }, [isModalOpen]);

    return (
      <section className="flex flex-col items-center px-8 py-10 w-full">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <div 
            id="about" 
            ref={aboutSectionRef}
            className="min-h-[620px] flex flex-col items-center justify-center py-[216px] translate-y-[-1rem] animate-fade-in opacity-0"
          >
            <h1 className="[font-family:'Noto_Sans_JP',Helvetica] font-black text-white text-5xl sm:text-7xl text-center tracking-[0.05em] leading-[72px] whitespace-nowrap">
              {nameTyping.displayedText}
            </h1>
  
            <p className="pt-4 [font-family:'Inter',Helvetica] font-normal text-gray-300 text-xl text-center leading-7 md:whitespace-nowrap">
              {(() => {
                const text = titleTyping.displayedText;
                const breakPoint = "Backend Developer";
                const breakIndex = text.indexOf(breakPoint);
                
                // スマホの時だけ「Backend Developer」の前で改行
                if (breakIndex > 0) {
                  const beforeBreak = text.substring(0, breakIndex);
                  const afterBreak = text.substring(breakIndex);
                  return (
                    <>
                      {beforeBreak}
                      <span className="md:hidden">
                        <br />
                      </span>
                      {afterBreak}
                    </>
                  );
                }
                return text;
              })()}
            </p>
  
            <div className="flex items-center gap-4 pt-8">
              <Button
                variant="secondary"
                size="icon"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <GithubIcon className="w-5 h-5 text-white" />
              </Button>
  
              <Button
                variant="secondary"
                size="icon"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <TwitterIcon className="w-5 h-5 text-white" />
              </Button>
  
              <Button
                variant="secondary"
                size="icon"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <LinkedinIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
  
            <div className="flex flex-col items-center pt-0 pb-[3px] mt-auto">
              <ChevronDownIcon className="w-9 h-9 text-gray-400" />
            </div>
          </div>
  
          <div  className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
              自己紹介
            </h2>
  
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-8 ">
              <img
                className="w-32 h-32 rounded-lg object-cover"
                alt="Profile"
                src="https://c.animaapp.com/micu87i2SXE1a3/img/image.png"
              />
  
              <p className="flex-1 [font-family:'Noto_Sans_JP',Helvetica] font-light text-gray-300 text-base tracking-[0] leading-[26px]">
                2020年に上京しIT業界へ転身しました。
                <br />
                Laravelを用いたAPI・管理画面開発、Vue.jsによるSPA構築、デザイン忠実度の高いマークアップに実務経験があります。
                <br />
                マーケティング領域と人材ベンチャーでの経験から、目的に合わせた要件整理やクライアント理解に基づく実装、
                <br />
                スピード感のある対応を得意としています。
                <br />
                趣味はサウナと筋トレで、心身のコンディションをそこで整えてリフレッシュしています。
                <br />
                「どうすれば目標を実現できるか」を軸に、手を動かしながら改善を積み重ねるスタイルです。
              </p>
            </div>
          </div>
  
          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
              スキルセット
            </h2>
  
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-4">
                {skillsData.map((skill, index) => (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-[140px] sm:w-[180px] bg-[#1f293780] border-0 rounded-xl hover:bg-[#1f2937a0] transition-colors"
                  >
                    <CardContent className="flex flex-col items-center p-4 gap-2">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined !text-3xl">
                          {skillIconMap[skill.iconKey] || "code"}
                        </span>
                      </div>
  
                      <p className="[font-family:'Inter',Helvetica] font-normal text-gray-200 text-sm sm:text-base tracking-[0] leading-6 text-center">
                        {skill.name}
                      </p>
  
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`material-symbols-outlined ${
                              index < skill.rating ? "fill text-star-filled" : "text-star-empty"
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
  
          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
              職務経歴
            </h2>
  
            <div className="flex flex-col gap-12 pl-[34px] border-l-2 border-gray-700 relative">
              {experienceData.map((experience, index) => (
                <div key={index} className="flex flex-col gap-2 relative">
                  <div
                    className="absolute w-3 h-3 bg-[#00a8ff] rounded-full shadow-[0px_0px_0px_4px_#1a1a1a]"
                    style={{ left: "-39px", top: "0" }}
                  />
  
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                    {experience.title}
                  </h3>
  
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-sm tracking-[0] leading-5">
                    {experience.period}
                  </p>
  
                  <ul className="flex flex-col gap-1 pl-5 pt-2 list-none">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-gray-300 text-base tracking-[0] leading-6"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          <div id="works" className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
              プロジェクト
            </h2>
  
            <ScrollArea className="w-full">
              <div className="flex gap-6 pb-4">
                {projectsData.map((project, index) => (
                  <Card
                    key={index}
                    onClick={() => openModal(project)}
                    className="flex-shrink-0 w-[260px] sm:w-[424px] bg-[#1f293780] border-0 rounded-xl overflow-hidden shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] hover:bg-[#1f2937a0] transition-colors cursor-pointer"
                  >
                    <div
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <CardContent className="flex flex-col gap-2 p-6">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                        {project.title}
                      </h3>
  
                      <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-gray-300 text-sm tracking-[0] leading-5">
                        {project.description}
                      </p>
  
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-[#00a8ff33] text-[#00a8ff] hover:bg-[#00a8ff44] px-3 py-1 rounded-full [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-4"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
  
          <div id="contact" className="flex flex-col gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
              お問い合わせ
            </h2>
  
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-gray-300 text-base tracking-[0] leading-6">
              お仕事のご相談、その他後質問なんでもお気軽にご連絡ください。
              <br />
              （このフォームはFormspreeを使用して実装されているため送信できます。）
            </p>
  
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
              {/* ハニーポット（ボット対策 - 人間には見えない） */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1">
                <Input
                  placeholder="お名前"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`bg-gray-800 border-gray-600 text-gray-300 placeholder:text-gray-500 [font-family:'Noto_Sans_JP',Helvetica] font-light focus-visible:ring-[#00a8ff] ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Input
                  type="email"
                  placeholder="メールアドレス"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`bg-gray-800 border-gray-600 text-gray-300 placeholder:text-gray-500 [font-family:'Noto_Sans_JP',Helvetica] font-light focus-visible:ring-[#00a8ff] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Textarea
                  placeholder="メッセージ"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`bg-gray-800 border-gray-600 text-gray-300 placeholder:text-gray-500 min-h-[140px] [font-family:'Noto_Sans_JP',Helvetica] font-light focus-visible:ring-[#00a8ff] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-500 rounded-md">
                  <p className="text-green-400 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    送信が完了しました！
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-500 rounded-md">
                  <p className="text-red-400 text-sm [font-family:'Noto_Sans_JP',Helvetica]">
                    送信に失敗しました。しばらくしてから再度お試しください。
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-[480px] h-12 bg-[#00a8ff] hover:bg-[#0096e6] text-white [font-family:'Noto_Sans_JP',Helvetica] font-bold text-base tracking-[0.24px] leading-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </form>
          </div>
        </div>

        {/* プロジェクト詳細モーダル */}
        {isModalOpen && selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-modal-fade-in"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] rounded-xl shadow-2xl animate-modal-zoom-in">
              {/* 閉じるボタン */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="閉じる"
              >
                <XIcon className="w-5 h-5 text-white" />
              </button>

              {/* モーダルコンテンツ */}
              <div className="flex flex-col">
                <div
                  className="w-full h-64 sm:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
                <CardContent className="flex flex-col gap-4 p-6">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[0] leading-8">
                    {selectedProject.title}
                  </h3>

                  <p className="[font-family:'Noto_Sans_JP',Helvetica] font-light text-gray-300 text-base tracking-[0] leading-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-[#00a8ff33] text-[#00a8ff] hover:bg-[#00a8ff44] px-3 py-1 rounded-full [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-4"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };
  