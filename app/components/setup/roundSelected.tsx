import { ROUND } from "~/data/ROUND";
import { usePageSetupStore } from "~/stores/pageSetupStore";

import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";

export const RoundSelector = () => {
  // Round Detail
  const setRound = usePageSetupStore((s) => s.setRound);
  const round = usePageSetupStore((s) => s.round);

  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-3 px-4">
      <span className="text-sm font-medium text-gray-500">Round</span>

      <ButtonGroup>
        {ROUND.map((item) => (
          <Button
            key={item.id}
            type="button"
            size="lg"
            variant="outline"
            onClick={() => setRound(item.round)}
            className={`
              px-7
              transition-all
              duration-200

              ${
                round === item.round
                  ? `
                    border-[#FFAA0F]
                    bg-[#FFAA0F]
                    text-black
                    hover:bg-[#FFAA0F]
                    hover:text-black
                  `
                  : `
                    border-gray-300
                    bg-white
                    text-black
                    hover:border-black
                    hover:bg-black
                    hover:text-white
                  `
              }
            `}
          >
            {item.round}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
