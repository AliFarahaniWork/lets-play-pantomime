import { usePageSetupStore } from "~/stores/pageSetupStore";
import { Slider } from "~/components/ui/slider";

export const TimeSelector = () => {
  // Time Detail
  const setTime = usePageSetupStore((s) => s.setTime);
  const time = usePageSetupStore((s) => s.time);

  return (
    <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-3 px-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-500">Duration</span>

        <span className="text-lg font-semibold text-black">{time}s</span>
      </div>

      <Slider
        className="w-full max-w-[420px]"
        value={time}
        onValueChange={(value) => setTime(value as number)}
        min={0}
        max={180}
        step={10}
      />

      <div className="flex w-full max-w-[420px] justify-between text-xs text-gray-400">
        <span>0s</span>
        <span>180s</span>
      </div>
    </div>
  );
};
