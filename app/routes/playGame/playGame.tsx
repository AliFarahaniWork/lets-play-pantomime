import React, { useEffect, useState } from "react";
import type { Data } from "~/types/generalType";
import WinGame from "../winGame/winGame";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

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

const PlayGame = () => {
  //Main Data
  const data = usePageSetupStore((s) => s.data);
  const words = usePlayGameStore((s) => s.words);

  //Round detail
  const round = usePageSetupStore((s) => s.round);

  //Time detail
  const time = usePageSetupStore((s) => s.time);

  //Index detail
  const currentTeam = usePlayGameStore((s) => s.currentTeam);
  const setCurrentTeam = usePlayGameStore((s) => s.setCurrentTeam);

  const currentRound = usePlayGameStore((s) => s.currentRound);
  const setCurrentRound = usePlayGameStore((s) => s.setCurrentRound);

  const playerChoice = usePlayGameStore((s) => s.playerChoice);
  const setPlayerChoice = usePlayGameStore((s) => s.setPlayerChoice);

  const wordIndex = usePlayGameStore((s) => s.wordIndex);
  const setWordIndex = usePlayGameStore((s) => s.setWordIndex);

  const gameStarted = usePlayGameStore((s) => s.gameStarted);
  const setGameStarted = usePlayGameStore((s) => s.setGameStarted);


  const gameTime = usePlayGameStore((s) => s.gameTime);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);


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
      setGameTime(time);
    };
    if (gameStarted && gameTime === 0) {
      nextTurn();
    }
  }, [gameTime, gameStarted]);

  useEffect(() => {
    setGameTime(time);
  }, [time]);

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setGameTime((previousTime : number) => {
          if (previousTime > 0) {
            return previousTime - 1;
          }

          return time;
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
        {currentRound !== round && (
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
              {gameStarted && <div>{words[wordIndex]?.text}</div>}
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
        )}
      </div>
      <WinGame data={data}></WinGame>
    </>
  );
};

export default PlayGame;
