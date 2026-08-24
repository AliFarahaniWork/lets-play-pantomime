import { useEffect, useState} from "react";
import type { Data } from "../types/data";
import lodash from "lodash";
import PlayGame from "../routes/playGame/playGame";
import { Link } from "react-router";
import { usePantomimeStore } from "~/stores/gameData";



const PageSetup = () => {

  const data = usePantomimeStore((s) => s.data);
  const setTeamName = usePantomimeStore((s) => s.setTeamName);
  const teamName = usePantomimeStore((s) => s.teamName);

  const playerName = usePantomimeStore((s) => s.playerName);
  const setPlayerName = usePantomimeStore((s) => s.setPlayerName);
  const addTeam = usePantomimeStore((s) => s.addTeam);
  const addPlayerName = usePantomimeStore((s) => s.addPlayerName);
  console.log(data);

  const [round, setRound] = useState<number>(0);
  const [duration, setDuration] = useState(0);
  const [score, setScore] = useState(0);




  return (
    <div className="mx-auto text-center">
      <h1>PageSetup</h1>
      <input
        className="input"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button className="button" onClick={() => addTeam(teamName)}>
        set team name
      </button>
      <div className="flex flex-row gap-1.5 ">
        {data.map((team: Data, indexTeam: number) => {
          return (
            <>
              {/* add team and players */}
              <div className="flex flex-col gap-1.5 justify-between align-middle ">
                <div
                  className="flex flex-col px-2.5 gap-5 mx-1.5 border border-white"
                  key={indexTeam}
                >
                  <h1 className="text-3xl"> {team.teamName}</h1>
                  <div className="">
                    {team.playerName.map((player: any, indexPlayer: any) => (
                      <div key={indexPlayer}>
                        <p className="border-white">{player}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <input
                    className="border"
                    placeholder="Player Name"
                    value={playerName}
                    onChange={(e) => addPlayerName(e.target.value)}
                  />
                  <button
                    className="border hover:bg-white hover:text-black hover:border-white"
                    onClick={() => addPlayerName(indexTeam, playerName)}
                  >
                    Player Name
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* add rounds */}
      <div>
        <h2>Number of rounds</h2>
        <button
          className={`px-5 mx-2 border border-white ${
            round === 3
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setRound(3)}
        >
          3
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            round === 5
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setRound(5)}
        >
          5
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            round === 7
              ? "bg-amber-50 text-black"
              : "hover:bg-amber-50 hover:text-black"
          }`}
          onClick={() => setRound(7)}
        >
          7
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            round === 9
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setRound(9)}
        >
          9
        </button>
      </div>
      {/* add duration */}
      <div>
        <h2>Turn duration</h2>
        <button
          className={`px-5 mx-2 border border-white ${
            duration === 30
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setDuration(30)}
        >
          30s
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            duration === 60
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setDuration(60)}
        >
          60s
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            duration === 90
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setDuration(90)}
        >
          90s
        </button>
        <button
          className={`px-5 mx-2 border border-white ${
            duration === 150
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={() => setDuration(150)}
        >
          150s
        </button>
      </div>

      <Link
        className={`px-5 mx-2 border border-gray-400 ${
          duration && round && data[1]?.playerName[0]
          ? "bg-white text-black"
          : "text-gray-400 hover:bg-gray-400 hover:text-amber-100"
        }`}
        to={"./playgame"}
      >
        Start Game
      </Link>

    </div>
  );
};

export default PageSetup;
