import { Link } from "react-router";

import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { WhoIsWin } from "~/components/game result/whoIsWin";

const WinGame = () => {
  const playAgain = usePlayGameStore((s) => s.playAgain);

  const resetScore = usePageSetupStore((s) => s.resetScore);
  const clearSetup = usePageSetupStore((s) => s.clearSetup);

  return (
    <main className="min-h-screen w-full bg-white px-4 py-8 text-black">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-[600px] flex-col items-center justify-center">
        {/* Winner */}
        <WhoIsWin />

        {/* Actions */}
        <div className="mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          {/* Restart */}
          <Link
            to="/setup"
            onClick={() => {
              playAgain();
              clearSetup();
            }}
            className="
              flex
              h-11
              flex-1
              items-center
              justify-center
              rounded-md
              border
              border-black
              bg-white
              text-sm
              font-medium
              text-black
              transition-all
              duration-200
              hover:bg-black
              hover:text-white
            "
          >
            Restart
          </Link>

          {/* Play Again */}
          <Link
            to="/game"
            onClick={() => {
              playAgain();
              resetScore();
            }}
            className="
              flex
              h-11
              flex-1
              items-center
              justify-center
              rounded-md
              border
              border-[#FFAA0F]
              bg-[#FFAA0F]
              text-sm
              font-medium
              text-black
              transition-all
              duration-200
              hover:border-black
              hover:bg-black
              hover:text-white
            "
          >
            Play Again
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WinGame;
