import lodash from "lodash";
import { usePageSetupStore } from "~/stores/pageSetupStore";

export const WhoIsWin = () => {
  //Main Data
  const data = usePageSetupStore((s) => s.data);

    const maxScore = lodash.maxBy(data, "score");

  return (
    <div className="mx-auto my-auto text-center">
      winner is team :
      <div>
        {data.every((team) => team.score === maxScore?.score) ? (
          <span>ridid</span>
        ) : (
          <p>
            {" "}
            <span className="text-4xl">{maxScore?.teamName}</span> with :{" "}
            <span className="text-3xl">{maxScore?.score}</span>
          </p>
        )}
      </div>
    </div>
  );
};
