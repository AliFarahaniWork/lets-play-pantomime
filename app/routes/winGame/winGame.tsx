import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";
import { Link } from "react-router";
import { WhoIsWin } from "~/components/game result/whoIsWin";


const WinGame = () => {

  const playAgain = usePlayGameStore((s) => s.playAgain);
  const resetScore = usePageSetupStore((s) => s.resetScore);
  const clearSetup = usePageSetupStore((s) => s.clearSetup);

  return (
    <div className="relative min-h-screen">
      <WhoIsWin />
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
