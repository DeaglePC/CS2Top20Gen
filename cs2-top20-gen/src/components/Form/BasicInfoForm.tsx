import { PlayerBasicInfo, countries } from "@/types/player";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/i18n";

interface BasicInfoFormProps {
  data: PlayerBasicInfo;
  onChange: (data: PlayerBasicInfo) => void;
}

export function BasicInfoForm({ data, onChange }: BasicInfoFormProps) {
  const { t } = useI18n();

  const handleChange = (field: keyof PlayerBasicInfo, value: string | number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gold">{t("form.basicInfo")}</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="playerId">{t("form.playerId")}</Label>
          <Input
            id="playerId"
            value={data.playerId}
            onChange={(e) => handleChange("playerId", e.target.value)}
            placeholder={t("form.playerIdPlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="realName">{t("form.realName")}</Label>
          <Input
            id="realName"
            value={data.realName}
            onChange={(e) => handleChange("realName", e.target.value)}
            placeholder={t("form.realNamePlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">{t("form.age")}</Label>
          <Input
            id="age"
            type="number"
            value={data.age}
            onChange={(e) => handleChange("age", parseInt(e.target.value) || 0)}
            placeholder={t("form.agePlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nationality">{t("form.nationality")}</Label>
          <select
            id="nationality"
            value={data.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="team">{t("form.team")}</Label>
          <Input
            id="team"
            value={data.team}
            onChange={(e) => handleChange("team", e.target.value)}
            placeholder={t("form.teamPlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rank">{t("form.rank")}</Label>
          <Input
            id="rank"
            type="number"
            value={data.rank}
            onChange={(e) => handleChange("rank", parseInt(e.target.value) || 1)}
            min={1}
            max={20}
            placeholder={t("form.rankPlaceholder")}
          />
        </div>

        <div className="space-y-2 col-span-2">
          <Label htmlFor="year">{t("form.year")}</Label>
          <Input
            id="year"
            type="number"
            value={data.year}
            onChange={(e) => handleChange("year", parseInt(e.target.value) || 2025)}
            placeholder={t("form.yearPlaceholder")}
          />
        </div>
      </div>
    </div>
  );
}
