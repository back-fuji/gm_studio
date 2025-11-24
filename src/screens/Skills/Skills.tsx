import { HeaderSection } from "../ElementDefault/sections/HeaderSection";
import { SkillsContentSection } from "./sections/SkillsContentSection";

export const Skills = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-start bg-[linear-gradient(0deg,rgba(16,22,34,1)_0%,rgba(16,22,34,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="9:125"
    >
      <HeaderSection />
      <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-20 lg:px-40 w-full pt-24">
        <div className="flex flex-col max-w-[960px] flex-1">
          <SkillsContentSection />
          <footer className="text-center py-10 mt-10 border-t border-solid border-white/10">
            <p className="text-text-muted-dark text-sm font-display">
              © 2024 Engineer's Portfolio. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

