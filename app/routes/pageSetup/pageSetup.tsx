import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { InputTeamPlayerName } from "~/components/setup/inputTeamPlayerName";
import { ShowTeamPlayerName } from "~/components/setup/ShowTeamPlayerName";
import { RoundSelector } from "~/components/setup/roundSelected";
import { TimeSelector } from "~/components/setup/timeSelector";
import { useNavigate } from "react-router";


const PageSetup = () => {

  const navigate = useNavigate()

  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Round detail
  const round = usePageSetupStore((s) => s.round);

  //Time detail
  const time = usePageSetupStore((s) => s.time);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  const canPlay =
    time &&
    round &&
    data.length >= 2 &&
    data.every((team) => team.playerName.length >= 1);

  return (
    <div className="mx-auto text-center">
      <InputTeamPlayerName />
      <ShowTeamPlayerName />
      <RoundSelector />
      <TimeSelector />

      <button
        className={`px-5 mx-2 border border-gray-400 ${
          time &&
          round &&
          data.length >= 2 &&
          data.every((team) => team.playerName.length >= 1)
            ? "bg-white text-black"
            : "text-gray-400 hover:bg-gray-400 hover:text-amber-100"
          }`}
        disabled={!canPlay}
        onClick={() => {
          setGameTime(time),
          navigate("/game")
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default PageSetup;
