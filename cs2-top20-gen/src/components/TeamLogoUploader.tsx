import { useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useI18n } from "@/i18n";

interface TeamLogoUploaderProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
}

export function TeamLogoUploader({ imageUrl, onImageChange }: TeamLogoUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useI18n();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleClear = () => {
    onImageChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gold">{t("upload.teamLogo")}</h3>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {imageUrl ? (
        <div className="relative">
          <div className="relative w-full h-24 rounded-lg overflow-hidden bg-hltv-bg-light flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Team logo preview"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleClick}
              className="bg-hltv-bg-dark/80 hover:bg-hltv-bg-medium"
            >
              <Upload className="w-4 h-4 mr-1" />
              {t("upload.change")}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleClear}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-24 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gold hover:bg-hltv-bg-light/50 transition-colors"
        >
          <Upload className="w-8 h-8 text-gray-500 mb-1" />
          <p className="text-gray-400 text-sm">{t("upload.click")}</p>
        </div>
      )}
    </div>
  );
}
