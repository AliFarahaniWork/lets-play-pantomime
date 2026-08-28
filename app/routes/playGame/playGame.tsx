import React, { useEffect } from "react";
import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";
import { useNavigate } from "react-router";

import { ChoicePlayer } from "~/components/play/choicePlayer";
import { ListTeamPlayer } from "~/components/play/listTeamPlayer";

const PlayGame = () => {
  const navigate = useNavigate();
  //Main Data
  const data = usePageSetupStore((s) => s.data);
  const words = usePlayGameStore((s) => s.words);

  //Round detail
  const round = usePageSetupStore((s) => s.round);

  //Time detail
  const time = usePageSetupStore((s) => s.time);

  const gameTime = usePlayGameStore((s) => s.gameTime);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  //Index detail
  const currentTeamIndex = usePlayGameStore((s) => s.currentTeamIndex);
  const setCurrentTeam = usePlayGameStore((s) => s.setCurrentTeam);

  const currentRound = usePlayGameStore((s) => s.currentRound);
  const setCurrentRound = usePlayGameStore((s) => s.setCurrentRound);

  const playerChoice = usePlayGameStore((s) => s.playerChoice);

  const wordIndex = usePlayGameStore((s) => s.wordIndex);

  const gameStarted = usePlayGameStore((s) => s.gameStarted);
  const setGameStarted = usePlayGameStore((s) => s.setGameStarted);

  //Score detail
  const setScore = usePageSetupStore((s) => s.setScore);

  const nextWord = usePlayGameStore((s) => s.nextWord);

  useEffect(() => {
    const nextTurn = () => {
      if (currentTeamIndex < data.length - 1) {
        setCurrentTeam(currentTeamIndex + 1);
      } else {
        let countCurrentRound = currentRound + 1;
        setCurrentRound(countCurrentRound);
        setCurrentTeam(0);
      }
      setGameStarted(false);
      setGameTime(time);
    };
    if (gameStarted && gameTime === 0 && currentRound !== round) {
      nextTurn();
    } else if (currentRound >= round) {
      navigate("/winner");
      console.log(data, gameStarted, currentRound, time, round);
    }
  }, [gameTime, gameStarted]);

  useEffect(() => {
    setGameTime(time);
  }, [time]);

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setGameTime((previousTime: number) => {
          if (previousTime > 0) {
            return previousTime - 1;
          }

          return time;
        });
      }, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStarted]);

  return (
    <>
      <div className="mx-auto text-center">
        <div className="border-2">
          <ListTeamPlayer />

          <div>round : {round}</div>
          <div>duration : {gameTime}s</div>
          <div>currentTeam : {data[currentTeamIndex]?.teamName}</div>
          <div>currentRound :{currentRound}</div>

          <div>
            {data[currentTeamIndex] && (
              <ChoicePlayer currentTeamIndex={currentTeamIndex} />
            )}
          </div>
          <div>
            turn player :
            {data[currentTeamIndex] &&
              data[currentTeamIndex]?.playerName[playerChoice]}
          </div>

          <div>
            {gameStarted && (
              <div className="text-3xl">{words[wordIndex]?.text} </div>
            )}

            <button
              className={`px-5 mx-2 border ${
                gameStarted
                  ? "border border-white text-white hover:bg-white hover:text-black"
                  : "text-gray-400 hover:bg-gray-400 hover:text-amber-100"
              }`}
              disabled={!gameStarted}

              onClick={() => nextWord()}
            >
              Skip
            </button>
            <button
              className={`px-5 mx-2 border ${
                gameStarted
                  ? "border border-white text-white hover:bg-white hover:text-black"
                  : "text-gray-400 hover:bg-gray-400 hover:text-amber-100"
              }`}
              onClick={() => {
                (nextWord(), setScore(currentTeamIndex, 1));
              }}
              disabled={!gameStarted}
            >
              Currect
            </button>

            <p>
              team{" "}
              <span className="text-3xl">
                {data[currentTeamIndex]?.teamName}
              </span>{" "}
              score is{" "}
              <span className="text-3xl">{data[currentTeamIndex]?.score} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayGame;
