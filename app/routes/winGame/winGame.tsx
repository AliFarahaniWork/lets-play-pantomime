import { Link } from "react-router";

import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { WhoIsWin } from "~/components/gameResult/whoIsWin";

const WinGame = () => {
  const playAgain = usePlayGameStore((s) => s.playAgain);

  const resetScore = usePageSetupStore((s) => s.resetScore);
  const clearSetup = usePageSetupStore((s) => s.clearSetup);

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-white
        px-4
        py-8
        text-black

        max-[480px]:px-3
        max-[480px]:py-4

        md:px-6
        md:py-6

        lg:px-4
        lg:py-8
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[80vh]
          w-full
          max-w-[600px]
          flex-col
          items-center
          justify-center

          max-[480px]:min-h-[70vh]

          md:min-h-[75vh]

          lg:min-h-[80vh]
        "
      >
        {/* Winner */}
        <WhoIsWin />

        {/* Actions */}
        <div
          className="
            mt-12
            flex
            w-full
            max-w-md
            flex-col
            gap-3

            max-[480px]:mt-8
            max-[480px]:gap-2

            md:mt-10
            md:flex-row
            md:gap-3

            lg:mt-12
            lg:flex-row
            lg:gap-3
          "
        >
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

              max-[480px]:w-full

              md:w-auto

              lg:w-auto
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

              max-[480px]:w-full

              md:w-auto

              lg:w-auto
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
