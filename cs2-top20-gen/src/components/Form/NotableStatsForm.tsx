import { NotableStat } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useI18n } from "@/i18n";

interface NotableStatsFormProps {
  stats: NotableStat[];
  onChange: (stats: NotableStat[]) => void;
}

export function NotableStatsForm({ stats, onChange }: NotableStatsFormProps) {
  const { t } = useI18n();

  const addStat = () => {
    onChange([...stats, { description: "", ranking: "" }]);
  };

  const removeStat = (index: number) => {
    onChange(stats.filter((_, i) => i !== index));
  };

  const updateStat = (
    index: number,
    field: keyof NotableStat,
    value: string
  ) => {
    const updated = [...stats];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gold">{t("form.notableStats")}</h3>
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

      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={stat.description}
              onChange={(e) => updateStat(index, "description", e.target.value)}
              placeholder={t("form.descPlaceholder")}
              className="flex-1"
            />
            <Input
              value={stat.ranking}
              onChange={(e) => updateStat(index, "ranking", e.target.value)}
              placeholder={t("form.rankingPlaceholder")}
              className="w-20"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeStat(index)}
              className="text-red-500 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      {stats.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-4">
          {t("form.noNotableStats")}
        </p>
      )}

      <div className="text-xs text-gray-500">
        <p>{t("form.notableTip")}</p>
        <p className="mt-1">{t("form.notableTipDesc")}</p>
        <p>{t("form.notableTipRank")}</p>
      </div>
    </div>
  );
}
