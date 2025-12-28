import { TeamAchievement } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface AchievementsFormProps {
  achievements: TeamAchievement[];
  onChange: (achievements: TeamAchievement[]) => void;
}

export function AchievementsForm({
  achievements,
  onChange,
}: AchievementsFormProps) {
  const places: Array<"1ST" | "2ND" | "3RD"> = ["1ST", "2ND", "3RD"];

  const getAchievementByPlace = (place: "1ST" | "2ND" | "3RD") => {
    return achievements.find((a) => a.place === place) || { place, events: [] };
  };

  const updateAchievement = (place: "1ST" | "2ND" | "3RD", events: string[]) => {
    const existing = achievements.filter((a) => a.place !== place);
    if (events.length > 0) {
      onChange([...existing, { place, events }]);
    } else {
      onChange(existing);
    }
  };

  const addEvent = (place: "1ST" | "2ND" | "3RD") => {
    const current = getAchievementByPlace(place);
    updateAchievement(place, [...current.events, ""]);
  };

  const removeEvent = (place: "1ST" | "2ND" | "3RD", index: number) => {
    const current = getAchievementByPlace(place);
    updateAchievement(
      place,
      current.events.filter((_, i) => i !== index)
    );
  };

  const updateEvent = (
    place: "1ST" | "2ND" | "3RD",
    index: number,
    value: string
  ) => {
    const current = getAchievementByPlace(place);
    const updated = [...current.events];
    updated[index] = value;
    updateAchievement(place, updated);
  };

  const placeLabels = {
    "1ST": { label: "冠军 🥇", color: "text-yellow-400" },
    "2ND": { label: "亚军 🥈", color: "text-gray-300" },
    "3RD": { label: "季军 🥉", color: "text-amber-600" },
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gold">战队成就</h3>

      {places.map((place) => {
        const achievement = getAchievementByPlace(place);
        const { label, color } = placeLabels[place];

        return (
          <div key={place} className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className={color}>{label}</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => addEvent(place)}
                className={`${color} hover:opacity-80`}
              >
                <Plus className="w-4 h-4 mr-1" />
                添加赛事
              </Button>
            </div>
            {achievement.events.map((event, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={event}
                  onChange={(e) => updateEvent(place, index, e.target.value)}
                  placeholder="赛事名称，如: PGL Major"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEvent(place, index)}
                  className="text-red-500 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
            {achievement.events.length === 0 && (
              <p className="text-sm text-gray-500">暂无{label}成就</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
