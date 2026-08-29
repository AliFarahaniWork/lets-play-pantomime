import { usePageSetupStore } from "~/stores/pageSetupStore";
import type { Data } from "~/types/pageSetupType";

export const ListTeamPlayer = () => {
  // Main Data
  const data = usePageSetupStore((s) => s.data);

  return (
    <div className="flex w-full flex-row flex-wrap justify-center gap-3">
      {data.map((team: Data, indexTeam: number) => (
        <div
          key={indexTeam}
          className="
            min-w-[150px]
            rounded-lg
            border
            border-gray-200
            px-4
            py-3
          "
        >
          {/* Team Name */}
          <h2 className="text-center text-lg font-semibold">{team.teamName}</h2>

          {/* Players */}
          <div className="mt-2 flex flex-col gap-1">
            {team.playerName.map((player: string, indexPlayer: number) => (
              <p
                key={indexPlayer}
                className="text-center text-sm text-gray-500"
              >
                {player}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
