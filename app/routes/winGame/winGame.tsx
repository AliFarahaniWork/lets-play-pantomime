import type { Data } from "~/types/data";
import lodash from "lodash";

const WinGame = ({ data }: { data: Data[] }) => {
  const maxScore = lodash.maxBy(data, "score");
  return <div>winner is team : {maxScore?.teamName}</div>;
};

export default WinGame;
