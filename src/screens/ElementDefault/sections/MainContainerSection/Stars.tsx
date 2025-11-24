import React, { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const Stars: React.FC = () => {
  // 星の位置とサイズをランダムに生成（メモ化して再レンダリング時に再生成されないように）
  const stars = useMemo(() => {
    const starCount = 50; // 星の数
    const starsArray: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      starsArray.push({
        id: i,
        x: Math.random() * 100, // 0-100%
        y: Math.random() * 100, // 0-100%
        size: Math.random() * 2 + 1, // 1-3px
        delay: Math.random() * 3, // 0-3秒の遅延
        duration: Math.random() * 2 + 2, // 2-4秒のアニメーション時間
      });
    }

    return starsArray;
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* 黄色の光のエフェクト */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${star.size * 4}px`,
              height: `${star.size * 4}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(255, 193, 7, 0.6) 0%, rgba(255, 193, 7, 0) 70%)",
              animation: `star-glow ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
          {/* 白い星 */}
          <div
            className="rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

