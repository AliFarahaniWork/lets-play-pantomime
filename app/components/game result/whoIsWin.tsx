import lodash from "lodash";
import { usePageSetupStore } from "~/stores/pageSetupStore";

export const WhoIsWin = () => {
  // Main Data
  const data = usePageSetupStore((s) => s.data);

  const maxScore = lodash.maxBy(data, "score");

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm uppercase tracking-wider text-gray-400">
        Game Over
      </p>

      {data.every((team) => team.score === maxScore?.score) ? (
        <div className="mt-4">
          <h1 className="text-4xl font-bold">Draw!</h1>

          <p className="mt-2 text-sm text-gray-500">
            All teams have the same score.
          </p>
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Winner Team</p>

          <h1 className="mt-2 text-5xl font-bold">{maxScore?.teamName}</h1>

          <div className="mt-5">
            <p className="text-sm text-gray-500">Final Score</p>

            <p className="text-5xl font-bold text-[#FFAA0F]">
              {maxScore?.score}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
