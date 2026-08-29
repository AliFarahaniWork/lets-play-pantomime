import { usePageSetupStore } from "~/stores/pageSetupStore";
import type { Data } from "~/types/pageSetupType";

export const ListTeamPlayer = () => {
  // Main Data
  const data = usePageSetupStore((s) => s.data);

  return (
    <div
      className="
        flex
        w-full
        flex-row
        flex-wrap
        justify-center
        gap-3

        max-[480px]:gap-2

        md:gap-3
        lg:gap-3
      "
    >
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

            max-[480px]:w-full
            max-[480px]:min-w-0
            max-[480px]:px-3
            max-[480px]:py-2

            md:w-auto
            md:min-w-[150px]
            md:px-4
            md:py-3

            lg:w-auto
            lg:min-w-[150px]
            lg:px-4
            lg:py-3
          "
        >
          {/* Team Name */}
          <h2
            className="
              break-words
              text-center
              text-lg
              font-semibold

              max-[480px]:text-base

              md:text-lg
              lg:text-lg
            "
          >
            {team.teamName}
          </h2>

          {/* Players */}
          <div className="mt-2 flex flex-col gap-1">
            {team.playerName.map((player: string, indexPlayer: number) => (
              <p
                key={indexPlayer}
                className="
                  break-words
                  text-center
                  text-sm
                  text-gray-500

                  max-[480px]:text-xs

                  md:text-sm
                  lg:text-sm
                "
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
