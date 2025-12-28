import { NotableStat } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface NotableStatsFormProps {
  stats: NotableStat[];
  onChange: (stats: NotableStat[]) => void;
}

export function NotableStatsForm({ stats, onChange }: NotableStatsFormProps) {
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
        <h3 className="text-lg font-semibold text-gold">详细数据统计</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={addStat}
          className="text-gold hover:text-yellow-400"
        >
          <Plus className="w-4 h-4 mr-1" />
          添加数据
        </Button>
      </div>

      <div className="space-y-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={stat.description}
              onChange={(e) => updateStat(index, "description", e.target.value)}
              placeholder="数据描述，如: 1.13 rating 3.0"
              className="flex-1"
            />
            <Input
              value={stat.ranking}
              onChange={(e) => updateStat(index, "ranking", e.target.value)}
              placeholder="排名，如: #15"
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
          暂无详细数据，点击上方按钮添加
        </p>
      )}

      <div className="text-xs text-gray-500">
        <p>提示：每条数据包含描述和排名，如：</p>
        <p className="mt-1">• 描述: "1.13 rating 3.0"</p>
        <p>• 排名: "#15"</p>
      </div>
    </div>
  );
}
