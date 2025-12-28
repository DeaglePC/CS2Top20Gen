import { PersonalStat } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useI18n } from "@/i18n";

interface StatsFormProps {
  stats: PersonalStat[];
  onChange: (stats: PersonalStat[]) => void;
}

export function StatsForm({ stats, onChange }: StatsFormProps) {
  const { t } = useI18n();

  const addStat = () => {
    onChange([
      ...stats,
      { name: "", value: 0 },
    ]);
  };

  const removeStat = (index: number) => {
    onChange(stats.filter((_, i) => i !== index));
  };

  const updateStat = (index: number, field: keyof PersonalStat, value: string | number) => {
    const updated = [...stats];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gold">{t("form.personalStats")}</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={addStat}
          className="text-gold hover:text-yellow-400"
        >
          <Plus className="w-4 h-4 mr-1" />
          {t("form.addStat")}
        </Button>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-3 bg-hltv-bg-light rounded-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{t("form.statItem")} #{index + 1}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeStat(index)}
                className="text-red-500 hover:text-red-400 h-6 w-6"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">{t("form.statName")}</Label>
                <Input
                  value={stat.name}
                  onChange={(e) => updateStat(index, "name", e.target.value)}
                  placeholder={t("form.statNamePlaceholder")}
                  className="h-8 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">{t("form.statValue")}</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={stat.value}
                  onChange={(e) =>
                    updateStat(index, "value", parseFloat(e.target.value) || 0)
                  }
                  placeholder="0"
                  className="h-8 text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {stats.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-4">
          {t("form.noStats")}
        </p>
      )}
    </div>
  );
}
