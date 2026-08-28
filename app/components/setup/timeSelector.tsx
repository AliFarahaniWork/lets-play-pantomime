import { usePageSetupStore } from "~/stores/pageSetupStore";


export const TimeSelector = () => {

  //Time detail
  const setTime = usePageSetupStore((s) => s.setTime);
  const time = usePageSetupStore((s) => s.time);

  return (
    <div>
      <h2>Turn duration</h2>
      <button
        className={`px-5 mx-2 border border-white ${
          time === 30
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setTime(30)}
      >
        30s
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          time === 60
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setTime(60)}
      >
        60s
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          time === 90
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setTime(90)}
      >
        90s
      </button>
      <button
        className={`px-5 mx-2 border border-white ${
          time === 150
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
        onClick={() => setTime(150)}
      >
        150s
      </button>
    </div>
  );
}
