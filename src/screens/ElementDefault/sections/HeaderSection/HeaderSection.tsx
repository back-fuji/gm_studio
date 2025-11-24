import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about", isScroll: true },
  { label: "Works", href: "#works", isScroll: true },
  { label: "Skills", href: "/skills", isRoute: true },
  { label: "Contact", href: "#contact", isScroll: true },
];

const ACTIVE_ITEM_KEY = "headerActiveItem";

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(() => {
    // 初期値はlocalStorageから読み込む
    if (typeof window !== "undefined") {
      return localStorage.getItem(ACTIVE_ITEM_KEY);
    }
    return null;
  });

  // URLハッシュからactiveItemを復元
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const hashItem = navItems.find(item => item.href === hash);
      if (hashItem) {
        setActiveItem(hashItem.label);
        localStorage.setItem(ACTIVE_ITEM_KEY, hashItem.label);
      }
    }
  }, [location.hash]);

  // ページ遷移時にlocalStorageまたはlocation stateから復元
  useEffect(() => {
    const locationState = location.state as { activeItem?: string; scrollTo?: string } | null;
    if (locationState?.activeItem) {
      setActiveItem(locationState.activeItem);
      localStorage.setItem(ACTIVE_ITEM_KEY, locationState.activeItem);
      // スクロールが必要な場合
      if (locationState.scrollTo) {
        setTimeout(() => {
          scrollToSection(locationState.scrollTo!);
        }, 100);
      }
    } else {
      const savedItem = localStorage.getItem(ACTIVE_ITEM_KEY);
      if (savedItem) {
        setActiveItem(savedItem);
      }
    }
  }, [location.pathname, location.state]);

  const updateActiveItem = (label: string) => {
    setActiveItem(label);
    localStorage.setItem(ACTIVE_ITEM_KEY, label);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    
    // クリックされた項目を黄色で維持（localStorageにも保存）
    updateActiveItem(label);
    
    // スキルページからクリックした場合はトップページに戻る
    if (location.pathname !== "/") {
      navigate("/", { state: { activeItem: label, scrollTo: href } });
      // ナビゲーション後にスクロール
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
  };

  const handleRouteClick = (label: string) => {
    // ルート遷移時もクリックされた項目を黄色で維持
    updateActiveItem(label);
  };

  const scrollToSection = (href: string) => {
    const elementId = href.replace("#", "");
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-center bg-[#101622cc] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex max-w-screen-lg w-full items-center justify-between pt-4 pb-[17px] px-10 border-b border-gray-800">
        <Link to="/" className="inline-flex items-center gap-3">
          <div className="flex flex-col w-5 h-5 items-start">
            {/* モダンな幾何学的デザイン - レイヤー/スタック系 */}
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            {/* 候補1: モダンなキューブ/3D系
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            */}
            {/* 候補2: ミニマルなGとMの組み合わせ
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3s-1.343 3-3 3H9M15 12c0-1.657 1.343-3 3-3h0c1.657 0 3 1.343 3 3v6c0 1.657-1.343 3-3 3h-3"/>
            </svg>
            */}
            {/* 候補3: 抽象的な波/グラデーション系
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
            </svg>
            */}
            {/* 候補4: シンプルなボックス/フレーム系
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
            </svg>
            */}
          </div>

          <div className="inline-flex items-start flex-col">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[-0.27px] leading-[22.5px] whitespace-nowrap">
              GM Studio
            </h1>
          </div>
        </Link>

        <nav className="inline-flex items-center gap-8">
          {navItems.map((item, index) => {
            // クリックされた項目または現在のルートが一致する場合は黄色
            const isActiveItem = activeItem === item.label || (item.isRoute && location.pathname === item.href);
            const baseClass = "[font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-5 whitespace-nowrap transition-all duration-300";
            let className = baseClass;
            
            if (isActiveItem) {
              className += " text-star-filled hover:text-star-filled";
            } else {
              className += " text-gray-300 hover:text-white";
            }

            if (item.isRoute) {
              return (
                <Link 
                  key={index} 
                  to={item.href} 
                  className={className}
                  onClick={() => handleRouteClick(item.label)}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.isScroll) {
              return (
                <a
                  key={index}
                  href={item.href}
                  className={className}
                  onClick={(e) => handleScrollClick(e, item.href, item.label)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a key={index} href={item.href} className={className}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
