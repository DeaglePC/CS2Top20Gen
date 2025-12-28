import { useI18n } from "@/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 bg-gray-800 rounded-md p-0.5">
      <button
        onClick={() => setLocale("zh")}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          locale === "zh"
            ? "bg-yellow-500 text-black font-bold"
            : "text-gray-400 hover:text-white"
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 text-xs rounded transition-colors ${
          locale === "en"
            ? "bg-yellow-500 text-black font-bold"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
