import { useState, useRef, useEffect } from "react";
import { PlayerData, defaultPlayerData } from "@/types/player";
import { PlayerCard } from "@/components/PlayerCard";
import { PlayerForm } from "@/components/Form";
import { Button } from "@/components/ui/button";
import { useExportImage } from "@/hooks/useExportImage";
import { Download, RotateCcw, Github } from "lucide-react";
import { useI18n } from "@/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const STORAGE_KEY = "cs2-top20-player-data";

function loadFromStorage(): PlayerData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as PlayerData;
    }
  } catch (e) {
    console.error("Failed to load from localStorage:", e);
  }
  return defaultPlayerData;
}

function saveToStorage(data: PlayerData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

function App() {
  const [playerData, setPlayerData] = useState<PlayerData>(loadFromStorage);
  const cardRef = useRef<HTMLDivElement>(null);
  const { exportAsImage, isExporting } = useExportImage(cardRef);
  const { t } = useI18n();

  // Save to localStorage whenever playerData changes
  useEffect(() => {
    saveToStorage(playerData);
  }, [playerData]);

  const handleExport = async () => {
    const filename = `hltv-top20-${playerData.basicInfo.playerId}-${playerData.basicInfo.year}`;
    await exportAsImage(filename);
  };

  const handleReset = () => {
    setPlayerData(defaultPlayerData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-hltv-bg-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-hltv-bg-dark/95 backdrop-blur border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold gold-gradient">
              {t("app.title")}
            </h1>
            <span className="text-xs text-gray-500 bg-hltv-bg-light px-2 py-1 rounded">
              {t("app.subtitle")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/DeaglePC/CS2Top20Gen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">{t("app.github")}</span>
              <span className="text-sm text-yellow-500">{t("app.star")}</span>
            </a>
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="border-gray-700"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              {t("app.reset")}
            </Button>
            <Button
              onClick={handleExport}
              disabled={isExporting}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-400 hover:to-yellow-500"
            >
              <Download className="w-4 h-4 mr-1" />
              {isExporting ? t("app.exporting") : t("app.export")}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 flex">
        {/* Left Panel - Form */}
        <aside className="w-[400px] h-[calc(100vh-64px)] fixed left-0 top-16 bg-hltv-bg-medium border-r border-gray-800 p-4 overflow-y-auto">
          <PlayerForm data={playerData} onChange={setPlayerData} />
        </aside>

        {/* Right Panel - Preview */}
        <div className="ml-[400px] flex-1 p-8 flex flex-col items-center min-h-[calc(100vh-64px)]">
          <div className="sticky top-24 w-full flex flex-col items-center">
            <div className="mb-4 w-full max-w-[800px] flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-300">{t("preview.title")}</h2>
              <span className="text-xs text-gray-500">
                {t("preview.size")}
              </span>
            </div>
            <div className="overflow-auto max-h-[calc(100vh-140px)] w-full flex justify-center">
              <div className="w-[800px] h-[900px] border border-gray-800 shadow-2xl overflow-hidden">
                <PlayerCard ref={cardRef} data={playerData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
