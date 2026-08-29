import { usePageSetupStore } from "~/stores/pageSetupStore";
import { Slider } from "~/components/ui/slider";

export const TimeSelector = ()=> {
  //Time detail
  const setTime = usePageSetupStore((s) => s.setTime);
  const time = usePageSetupStore((s) => s.time);

  return (
    <div className="w-full max-w-[1080px] mx-auto px-4 flex flex-col items-center">
      Duration: {time}s
      <Slider
        className="w-full max-w-[540px]"
        value={time}
        onValueChange={(value) => setTime(value as number)}
        min={0}
        max={180}
        step={10}
      />
    </div>
  );
}
