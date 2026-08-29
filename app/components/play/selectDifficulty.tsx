import { DIFFICULTY, type Difficulty } from "~/data/WORD_BANK";
import { Button } from "~/components/ui/button";

type SelectDifficultyProps = {
  selectDifficulty: Difficulty | null;
  selectDifficultyFunc: (difficulty: Difficulty) => void;
};

export const SelectDifficulty = ({
  selectDifficulty,
  selectDifficultyFunc,
}: SelectDifficultyProps) => {
  return (
    <div
      className="
        mt-8
        flex
        w-full
        flex-wrap
        justify-center
        gap-2

        max-[480px]:mt-5
        max-[480px]:gap-1.5

        md:mt-7
        md:gap-2

        lg:mt-8
        lg:gap-2
      "
    >
      {DIFFICULTY.map((difficulty) => (
        <Button
          key={difficulty}
          type="button"
          className={`
            max-[480px]:h-9
            max-[480px]:px-3
            max-[480px]:text-xs

            md:text-sm

            lg:text-sm

            ${
              difficulty === selectDifficulty
                ? `
                  border-[#FFAA0F]
                  bg-[#FFAA0F]
                  text-black
                  hover:bg-[#FFAA0F]
                  hover:text-black
                `
                : `
                  border
                  border-black
                  bg-white
                  text-black
                  hover:bg-black
                  hover:text-white
                `
            }
          `}
          onClick={() => {
            selectDifficultyFunc(difficulty);
          }}
        >
          {difficulty}
        </Button>
      ))}
    </div>
  );
};
