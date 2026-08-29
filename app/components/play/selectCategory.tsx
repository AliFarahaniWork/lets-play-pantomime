import { CATEGORY, type Category } from "~/data/WORD_BANK";
import { Button } from "~/components/ui/button";

type SelectCategoryProps = {
  selectCategory: Category | null;
  selectCategoryFunc: (category: Category) => void;
};

export const SelectCategory = ({
  selectCategory,
  selectCategoryFunc,
}: SelectCategoryProps) => {
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
      {CATEGORY.map((category) => (
        <Button
          key={category}
          type="button"
          className={`
            max-[480px]:h-9
            max-[480px]:px-3
            max-[480px]:text-xs

            md:text-sm

            lg:text-sm

            ${
              category === selectCategory
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
            selectCategoryFunc(category);
          }}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
