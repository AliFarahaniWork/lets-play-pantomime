
import React, { useEffect, useState } from "react";
import type { Data } from "~/types/data";
import WinGame from "../winGame/winGame";
import { usePantomimeStore } from "~/stores/gameData";


const WORD_BANK = [
  {
    id: 1,
    text: "spider man",
  },
  {
    id: 2,
    text: "pizza",
  },
  {
    id: 3,
    text: "swimmig",
  },

  {
    id: 4,
    text: "Elephant",
  },

  {
    id: 5,
    text: "Sleeping",
  },
];

const PlayGame = ({
  data,
  round,
  duration,
  children,
}: {
  data: Data[];
  round: number;
  duration: number;
  children: React.ReactNode
  }) => {

  const score = usePantomimeStore((s) => s.data[currentTeam].score);

  const [currentTeam, setCurrentTeam] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const [playerChoice, setPlayerChoice] = useState(0);

  const [gameTime, setGameTime] = useState(duration);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const choicePlayer = (index: number) => {
    return (
      <div>
        {!gameStarted &&
          data[index].playerName.map((player: string, indexPlayer: number) => {
            return (
              <button
                className="px-5 mx-2 border border-white hover:bg-amber-50 hover:text-black"
                key={indexPlayer}
                onClick={() => {
                  setPlayerChoice(indexPlayer);
                  setGameStarted(true);
                }}
              >
                {player}
              </button>
            );
          })}
      </div>
    );
  };

  useEffect(() => {
    const nextTurn = () => {
      if (currentTeam < data.length - 1) {
        setCurrentTeam(currentTeam + 1);
      } else {
        let countCurrentRound = currentRound + 1;
        setCurrentRound(countCurrentRound);
        setCurrentTeam(0);
      }
      setPlayerChoice(0);
      setGameStarted(false);
      setGameTime(duration);
    };
    if (gameStarted && gameTime === 0) {
      nextTurn();
    }
  }, [gameTime, gameStarted]);

  useEffect(() => {
    setGameTime(duration);
  }, [duration]);

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setGameTime((previousTime) => {
          if (previousTime > 0) {
            return previousTime - 1;
          }

          return duration;
        });
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStarted]);

  const nextWordCurrect = () => {
    setWordIndex(wordIndex + 1);
    data[currentTeam].score = data[currentTeam]?.score + 1;
    console.log(data[currentTeam]);
  };

  const nextWordSkip = () => {
    setWordIndex(wordIndex + 1);
  };

  return (
    <>
      <div>
        {
          <div className="border-2">
            <p>currentTeam: {currentTeam}</p>
            <div className="flex flex-row">
              {data.map((team: any, indexTeam: any) => {
                return (
                  <>
                    <div className="flex flex-col" key={indexTeam}>
                      <h1 className="text-3xl"> {team.teamName}</h1>
                      <div className="">
                        {team.playerName.map(
                          (player: any, indexPlayer: any) => (
                            <div key={indexPlayer}>
                              {player}
                              <div className="text-mist-300 text-2xl"></div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div>round : {round}</div>
            <div>duration : {gameTime}s</div>

            <div>currentTeam : {data[currentTeam]?.teamName}</div>
            <div>currentRound :{currentRound}</div>

            <div>{data[currentTeam] && choicePlayer(currentTeam)}</div>
            <div>
              turn player :
              {data[currentTeam] && data[currentTeam]?.playerName[playerChoice]}
            </div>

            <div>
              {gameStarted && <div>{WORD_BANK[wordIndex]?.text}</div>}
              <button
                className="px-5 mx-2 border border-white hover:bg-amber-50 hover:text-black"
                onClick={() => nextWordSkip()}
              >
                Skip
              </button>
              <button
                className="px-5 mx-2 border border-white hover:bg-amber-50 hover:text-black"
                onClick={() => nextWordCurrect()}
              >
                Currect
              </button>

              <p>score : {gameStarted && data[currentTeam].score}</p>
            </div>
          </div>
        }
      </div>
      <WinGame data={data}></WinGame>
    </>
  );
};


export default PlayGame
