import { PlayerData } from "@/types/player";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BasicInfoForm } from "./BasicInfoForm";
import { AwardsForm } from "./AwardsForm";
import { AchievementsForm } from "./AchievementsForm";
import { StatsForm } from "./StatsForm";
import { NotableStatsForm } from "./NotableStatsForm";
import { ImageUploader } from "../ImageUploader";
import { TeamLogoUploader } from "../TeamLogoUploader";

interface PlayerFormProps {
  data: PlayerData;
  onChange: (data: PlayerData) => void;
}

export function PlayerForm({ data, onChange }: PlayerFormProps) {
  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="basic" className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="basic">基础</TabsTrigger>
          <TabsTrigger value="awards">奖项</TabsTrigger>
          <TabsTrigger value="achievements">成就</TabsTrigger>
          <TabsTrigger value="stats">数据</TabsTrigger>
          <TabsTrigger value="notable">详细</TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1 pr-4">
          <TabsContent value="basic" className="mt-0 space-y-6">
            <ImageUploader
              imageUrl={data.photoUrl}
              onImageChange={(url) => onChange({ ...data, photoUrl: url })}
            />
            <TeamLogoUploader
              imageUrl={data.teamLogoUrl}
              onImageChange={(url) => onChange({ ...data, teamLogoUrl: url })}
            />
            <BasicInfoForm
              data={data.basicInfo}
              onChange={(basicInfo) => onChange({ ...data, basicInfo })}
            />
          </TabsContent>

          <TabsContent value="awards" className="mt-0">
            <AwardsForm
              mvpAwards={data.mvpAwards}
              evpAwards={data.evpAwards}
              onMvpChange={(mvpAwards) => onChange({ ...data, mvpAwards })}
              onEvpChange={(evpAwards) => onChange({ ...data, evpAwards })}
            />
          </TabsContent>

          <TabsContent value="achievements" className="mt-0">
            <AchievementsForm
              achievements={data.teamAchievements}
              onChange={(teamAchievements) =>
                onChange({ ...data, teamAchievements })
              }
            />
          </TabsContent>

          <TabsContent value="stats" className="mt-0">
            <StatsForm
              stats={data.personalStats}
              onChange={(personalStats) => onChange({ ...data, personalStats })}
            />
          </TabsContent>

          <TabsContent value="notable" className="mt-0">
            <NotableStatsForm
              stats={data.notableStats}
              onChange={(notableStats) => onChange({ ...data, notableStats })}
            />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
