import { Award } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, X } from "lucide-react";
import { useI18n } from "@/i18n";

interface AwardsFormProps {
  mvpAwards: Award[];
  evpAwards: Award[];
  onMvpChange: (awards: Award[]) => void;
  onEvpChange: (awards: Award[]) => void;
}

export function AwardsForm({
  mvpAwards,
  evpAwards,
  onMvpChange,
  onEvpChange,
}: AwardsFormProps) {
  const { t } = useI18n();

  const addMvpAward = () => {
    onMvpChange([...mvpAwards, { type: "MVP", event: "", isGold: false }]);
  };

  const removeMvpAward = (index: number) => {
    onMvpChange(mvpAwards.filter((_, i) => i !== index));
  };

  const updateMvpAward = (index: number, event: string) => {
    const updated = [...mvpAwards];
    updated[index] = { ...updated[index], event };
    onMvpChange(updated);
  };

  const updateMvpGold = (index: number, isGold: boolean) => {
    const updated = [...mvpAwards];
    updated[index] = { ...updated[index], isGold };
    onMvpChange(updated);
  };

  const addEvpAward = () => {
    onEvpChange([...evpAwards, { type: "EVP", event: "", isGold: false }]);
  };

  const removeEvpAward = (index: number) => {
    onEvpChange(evpAwards.filter((_, i) => i !== index));
  };

  const updateEvpAward = (index: number, event: string) => {
    const updated = [...evpAwards];
    updated[index] = { ...updated[index], event };
    onEvpChange(updated);
  };

  const updateEvpGold = (index: number, isGold: boolean) => {
    const updated = [...evpAwards];
    updated[index] = { ...updated[index], isGold };
    onEvpChange(updated);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gold">{t("form.awards")}</h3>

      {/* MVP Awards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-yellow-500">{t("form.mvpAwards")}</Label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addMvpAward}
            className="text-yellow-500 hover:text-yellow-400"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t("form.add")}
          </Button>
        </div>
        {mvpAwards.map((award, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id={`mvp-gold-${index}`}
                checked={award.isGold ?? false}
                onChange={(e) => updateMvpGold(index, e.target.checked)}
                className="border-yellow-500"
              />
              <Label htmlFor={`mvp-gold-${index}`} className="text-xs text-yellow-500 cursor-pointer">
                {t("form.gold")}
              </Label>
            </div>
            <Input
              value={award.event}
              onChange={(e) => updateMvpAward(index, e.target.value)}
              placeholder={t("form.eventPlaceholder")}
              className="flex-1"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeMvpAward(index)}
              className="text-red-500 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {mvpAwards.length === 0 && (
          <p className="text-sm text-gray-500">{t("form.noMvp")}</p>
        )}
      </div>

      {/* EVP Awards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-gray-400">{t("form.evpAwards")}</Label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addEvpAward}
            className="text-gray-400 hover:text-gray-300"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t("form.add")}
          </Button>
        </div>
        {evpAwards.map((award, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id={`evp-gold-${index}`}
                checked={award.isGold ?? false}
                onChange={(e) => updateEvpGold(index, e.target.checked)}
                className="border-yellow-500"
              />
              <Label htmlFor={`evp-gold-${index}`} className="text-xs text-yellow-500 cursor-pointer">
                {t("form.gold")}
              </Label>
            </div>
            <Input
              value={award.event}
              onChange={(e) => updateEvpAward(index, e.target.value)}
              placeholder={t("form.eventPlaceholder")}
              className="flex-1"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeEvpAward(index)}
              className="text-red-500 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {evpAwards.length === 0 && (
          <p className="text-sm text-gray-500">{t("form.noEvp")}</p>
        )}
      </div>
    </div>
  );
}
