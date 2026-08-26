import type { Data } from "~/types/pageSetupType";
import lodash from "lodash";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";
import { Link } from "react-router";


const WinGame = () => {

    //Main Data
  const data = usePageSetupStore((s) => s.data);


  const maxScore = lodash.maxBy(data, "score");
  return (
    <div>
      <div className="mx-auto my-auto text-center">
        winner is team : <span className="text-4xl">{maxScore?.teamName}</span>
        with : <span className="text-3xl">{maxScore?.score}</span>
      </div>
      <Link
        className="text-xs border hover:bg-white hover:text-black hover:border-white"
        to={"/"}
        onClick={() => {}}
      >
        Restart
      </Link>
      <Link
        className="text-xs border hover:bg-white hover:text-black hover:border-white"
        to={"/game"}
        onClick={() => {}}
      >
        Play Again
      </Link>
    </div>
  );
};

export default WinGame;
