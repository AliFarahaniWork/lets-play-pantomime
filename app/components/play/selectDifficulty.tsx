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
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {DIFFICULTY.map((difficulty) => (
        <Button
          key={difficulty}
          type="button"
          className={
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
