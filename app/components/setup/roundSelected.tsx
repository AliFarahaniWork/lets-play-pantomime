import { ROUND } from "~/data/ROUND";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { Button } from "../ui/button";
import { ButtonGroup } from "~/components/ui/button-group";

export const RoundSelector = () =>{
  //Round detail
  const setRound = usePageSetupStore((s) => s.setRound);
  const round = usePageSetupStore((s) => s.round);

  return (
    <div className="w-full max-w-[1080px] mx-auto px-4 flex flex-col items-center">
      <span>Round</span>
      <ButtonGroup>
        {ROUND.map((item) => {
          return (
            <Button
              size="lg"
              variant="outline"
              key={item.id}
              className={` px-7 py-5 ${
                round === item.round
                  ? "bg-[#ffaa0f] text-black"
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={() => setRound(item.round)}
            >
              {item.round}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}
