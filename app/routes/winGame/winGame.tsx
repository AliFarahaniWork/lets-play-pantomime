import type { Data } from "~/types/generalType";
import lodash from "lodash";

const WinGame = ({ data }: { data: Data[] }) => {
  const maxScore = lodash.maxBy(data, "score");
  return (
    <div className="mx-auto my-auto text-center">
      winner is team : {maxScore?.teamName}
    </div>
  );
};

export default WinGame;
