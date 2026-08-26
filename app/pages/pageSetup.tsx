import { useEffect, useState } from "react";
import type { Data } from "../types/pageSetupType";
import { Link } from "react-router";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";


const PageSetup = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [tempValue, setTempValue] = useState("");

  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Team detail
  const teamName = usePageSetupStore((s) => s.teamName);
  const setTeamName = usePageSetupStore((s) => s.setTeamName);
  const addTeam = usePageSetupStore((s) => s.addTeam);

  //Player detail
  const playerName = usePageSetupStore((s) => s.playerName);
  const setPlayerName = usePageSetupStore((s) => s.setPlayerName);
  const addPlayer = usePageSetupStore((s) => s.addPlayer);

  //Round detail
  const setRound = usePageSetupStore((s) => s.setRound);
  const round = usePageSetupStore((s) => s.round);

  //Time detail
  const setTime = usePageSetupStore((s) => s.setTime);
  const time = usePageSetupStore((s) => s.time);

  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  //Edit Function
  const removeTeam = usePageSetupStore((s) => s.removeTeam);
  const removePlayer = usePageSetupStore((s) => s.removePlayer);
  const updateTeamName = usePageSetupStore((s) => s.updateTeamName);


  return (
    <div className="mx-auto text-center">
      <h1>PageSetup</h1>
      <input
        className="input"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button
        className="button"
        onClick={() => {
          (addTeam(teamName));
        }}
      >
        set team name
      </button>
      <div className="flex flex-row gap-1.5 justify-center">
        {data.map((team: Data, indexTeam: number) => {
          return (
            <>
              {/* add team and players */}
              <div className="flex flex-col gap-1.5 justify-between align-middle ">
                <div
                  className="flex flex-col px-2.5 gap-5 mx-1.5 border border-white"
                  key={indexTeam}
                >
                  <h1 className="text-4xl">
                    {team.teamName}
                    <div className="flex flex-row justify-center">
                      <button
                        className="text-xs border hover:bg-white hover:text-black hover:border-white"
                        onClick={() => {
                          removeTeam(indexTeam);
                        }}
                      >
                        delete
                      </button>
                      <button
                        className="text-xs border hover:bg-white hover:text-black hover:border-white"
                        onClick={() => {
                          setOpenIndex(indexTeam);
                          setTempValue(team.teamName);
                        }}
                      >
                        edit
                      </button>
                      {openIndex === indexTeam && (
                        <div>
                          <input
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                          />
                          <button
                            onClick={() => {
                              updateTeamName(indexTeam, tempValue);
                              setOpenIndex(null);
                            }}
                          >
                            ok
                          </button>
                        </div>
                      )}
                    </div>
                  </h1>
                  <div className="">
                    {team.playerName.map((player: any, indexPlayer: any) => (
                      <div key={indexPlayer}>
                        <p className="border-white">
                          {player}
                          <button
                            className="text-xs border hover:bg-white hover:text-black hover:border-white"
                            onClick={() => removePlayer(indexTeam, indexPlayer)}
                          >
                            delete
                          </button>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <input
                    className="border"

                    placeholder="Player Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                  />
                  <button
                    className="border hover:bg-white hover:text-black hover:border-white"
                    onClick={() => addPlayer(indexTeam, playerName)}
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

      <Link
        className={`px-5 mx-2 border border-gray-400 ${
          time &&
          round &&
          data.length >= 2 &&
          data.every((team) => team.playerName.length >= 1)
            ? "bg-white text-black"
            : "text-gray-400 hover:bg-gray-400 hover:text-amber-100"
        }`}
        to={"./game"}
        onClick={() => setGameTime(time)}
      >
        Start Game
      </Link>
    </div>
  );
};

export default PageSetup;
