import { useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface ImageUploaderProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
}

export function ImageUploader({ imageUrl, onImageChange }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      <h3 className="text-lg font-semibold text-gold">选手照片</h3>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {imageUrl ? (
        <div className="relative">
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-hltv-bg-light">
            <img
              src={imageUrl}
              alt="选手照片预览"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              更换
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
          className="w-full h-48 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gold hover:bg-hltv-bg-light/50 transition-colors"
        >
          <Upload className="w-12 h-12 text-gray-500 mb-2" />
          <p className="text-gray-400 text-sm">点击上传选手照片</p>
          <p className="text-gray-500 text-xs mt-1">支持 JPG、PNG 格式</p>
        </div>
      )}

      <p className="text-xs text-gray-500">
        建议上传高清半身照，照片将自动适配卡片布局
      </p>
    </div>
  );
}
