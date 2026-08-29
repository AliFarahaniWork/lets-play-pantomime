import lodash from "lodash";
import { usePageSetupStore } from "~/stores/pageSetupStore";

export const WhoIsWin = () => {
  // Main Data
  const data = usePageSetupStore((s) => s.data);

  const maxScore = lodash.maxBy(data, "score");

  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        items-center
        text-center
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-wider
          text-gray-400

          max-[480px]:text-xs

          md:text-sm

          lg:text-sm
        "
      >
        Game Over
      </p>

      {data.every((team) => team.score === maxScore?.score) ? (
        <div
          className="
            mt-4
            w-full

            max-[480px]:mt-3

            md:mt-4

            lg:mt-4
          "
        >
          <h1
            className="
              text-4xl
              font-bold

              max-[480px]:text-3xl

              md:text-4xl

              lg:text-4xl
            "
          >
            Draw!
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-gray-500

              max-[480px]:text-xs

              md:text-sm

              lg:text-sm
            "
          >
            All teams have the same score.
          </p>
        </div>
      ) : (
        <div
          className="
            mt-4
            w-full
            min-w-0

            max-[480px]:mt-3

            md:mt-4

            lg:mt-4
          "
        >
          <p
            className="
              text-sm
              text-gray-500

              max-[480px]:text-xs

              md:text-sm

              lg:text-sm
            "
          >
            Winner Team
          </p>

          <h1
            className="
              mt-2
              max-w-full
              break-words
              text-5xl
              font-bold

              max-[480px]:text-3xl

              md:text-4xl

              lg:text-5xl
            "
          >
            {maxScore?.teamName}
          </h1>

          <div
            className="
              mt-5

              max-[480px]:mt-4

              md:mt-5

              lg:mt-5
            "
          >
            <p
              className="
                text-sm
                text-gray-500

                max-[480px]:text-xs

                md:text-sm

                lg:text-sm
              "
            >
              Final Score
            </p>

            <p
              className="
                text-5xl
                font-bold
                text-[#FFAA0F]

                max-[480px]:text-4xl

                md:text-5xl

                lg:text-5xl
              "
            >
              {maxScore?.score}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
