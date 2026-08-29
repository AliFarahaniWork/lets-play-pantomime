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
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {CATEGORY.map((category) => (
        <Button
          key={category}
          type="button"
          className={
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
