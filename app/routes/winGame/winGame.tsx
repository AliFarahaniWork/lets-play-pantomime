import type { Data } from "~/types/pageSetupType";
import lodash from "lodash";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";
import { Link } from "react-router";


const WinGame = () => {

    //Main Data
  const data = usePageSetupStore((s) => s.data);

  const playAgain = usePlayGameStore((s) => s.playAgain);

  const resetScore = usePageSetupStore((s) => s.resetScore);
    const clearSetup = usePageSetupStore((s) => s.clearSetup);

  const maxScore = lodash.maxBy(data, "score");
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto my-auto text-center">
        winner is team : <span className="text-4xl">{maxScore?.teamName}</span>
        with : <span className="text-3xl">{maxScore?.score}</span>
      </div>
      <div className="absolute top-1/5 left-1/2 -translate-x-1/2">
        <Link
          className="mx-2 px-5 text-3xl border hover:bg-white hover:text-black hover:border-white"
          to={"/setup"}
          onClick={() => {
            (playAgain(), clearSetup());
          }}
        >
          Restart
        </Link>
        <Link
          className="mx-2 px-5 text-3xl border hover:bg-white hover:text-black hover:border-white"
          to={"/game"}
          onClick={() => {
            (playAgain(), resetScore());
          }}
        >
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default WinGame;
