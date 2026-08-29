import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { ChoicePlayer } from "~/components/play/choicePlayer";
import { Button } from "~/components/ui/button";

import { type Category, type Difficulty } from "~/data/WORD_BANK";
import { SelectDifficulty } from "~/components/play/selectDifficulty";
import { SelectCategory } from "~/components/play/selectCategory";

const PlayGame = () => {
  const navigate = useNavigate();

  // Main Data
  const data = usePageSetupStore((s) => s.data);
  const words = usePlayGameStore((s) => s.words);

  // Round detail
  const round = usePageSetupStore((s) => s.round);

  // Time detail
  const time = usePageSetupStore((s) => s.time);

  const gameTime = usePlayGameStore((s) => s.gameTime);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  // Index detail
  const currentTeamIndex = usePlayGameStore((s) => s.currentTeamIndex);
  const setCurrentTeam = usePlayGameStore((s) => s.setCurrentTeam);

  const currentRound = usePlayGameStore((s) => s.currentRound);
  const setCurrentRound = usePlayGameStore((s) => s.setCurrentRound);

  const playerChoice = usePlayGameStore((s) => s.playerChoice);

  const wordIndex = usePlayGameStore((s) => s.wordIndex);

  const gameStarted = usePlayGameStore((s) => s.gameStarted);
  const setGameStarted = usePlayGameStore((s) => s.setGameStarted);

  // Score detail
  const setScore = usePageSetupStore((s) => s.setScore);

  const nextWord = usePlayGameStore((s) => s.nextWord);

  // Next Round useEffect
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

  // Timer useEffect
  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setGameTime((previousTime: number) => {
          if (previousTime > 0) {
            return previousTime - 1;
          }

          return time;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStarted]);

  // Select Category
  const [selectCategory, setSelectedCategory] = useState<Category | null>(null);

  const selectCategoryFunc = (category: Category) => {
    setSelectedCategory(category);
  };

  // Select Difficulty
  const [selectDifficulty, setDifficulty] = useState<Difficulty | null>(null);

  const getDifficultyScore = (difficulty: Difficulty) => {
    if (difficulty === "easy") return 1;
    if (difficulty === "medium") return 2;
    return 3;
  };

  const selectDifficultyFunc = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  // Filter words by category
  const filteredWords = words.filter(
    (word) =>
      word.category === selectCategory && word.difficulty === selectDifficulty,
  );

  // Current word from selected category
  const currentWord =
    filteredWords.length > 0
      ? filteredWords[wordIndex % filteredWords.length]
      : undefined;

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-white
        px-4
        py-8
        text-black

        max-[480px]:px-3
        max-[480px]:py-4

        md:px-6
        md:py-6

        lg:px-4
        lg:py-8
      "
    >
      <div className="mx-auto flex w-full max-w-[700px] flex-col">
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            pb-4

            max-[480px]:pb-3

            md:pb-4
            lg:pb-4
          "
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Round
            </p>

            <p
              className="
                text-xl
                font-semibold

                max-[480px]:text-lg

                md:text-xl
                lg:text-xl
              "
            >
              {currentRound} / {round}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Time
            </p>

            <p
              className={`
                text-3xl
                font-bold

                max-[480px]:text-2xl

                md:text-3xl
                lg:text-3xl

                ${
                  gameTime <= 10 && gameStarted
                    ? "text-[#FFAA0F]"
                    : "text-black"
                }
              `}
            >
              {gameTime}s
            </p>
          </div>
        </div>

        {/* BEFORE START */}
        {!gameStarted && (
          <div
            className="
              flex
              flex-1
              flex-col
              items-center
              py-14

              max-[480px]:py-6

              md:py-10
              lg:py-14
            "
          >
            {/* CURRENT TEAM */}
            <div className="w-full min-w-0 text-center">
              <p
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-wider
                  text-gray-400

                  max-[480px]:text-xs

                  md:text-sm
                  lg:text-sm
                "
              >
                Current Team
              </p>

              <h1
                className="
                  mt-2
                  break-words
                  text-4xl
                  font-bold

                  max-[480px]:text-2xl

                  md:text-3xl
                  lg:text-4xl
                "
              >
                {data[currentTeamIndex]?.teamName}
              </h1>
            </div>

            {/* PLAYER */}
            <div
              className="
                mt-10
                w-full
                max-w-md
                rounded-xl
                border
                p-8
                text-center

                max-[480px]:mt-5
                max-[480px]:p-4

                md:mt-8
                md:p-6

                lg:mt-10
                lg:p-8
              "
            >
              <p
                className="
                  text-sm
                  uppercase
                  tracking-wider
                  text-gray-400

                  max-[480px]:text-xs

                  md:text-sm
                  lg:text-sm
                "
              >
                Turn Player
              </p>

              <p
                className="
                  mt-3
                  break-words
                  text-4xl
                  font-bold

                  max-[480px]:text-2xl

                  md:text-3xl
                  lg:text-4xl
                "
              >
                {data[currentTeamIndex]?.playerName[playerChoice]}
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  text-gray-400

                  max-[480px]:mt-3
                  max-[480px]:text-xs

                  md:mt-4
                  md:text-sm

                  lg:mt-4
                  lg:text-sm
                "
              >
                Get ready to act the word
              </p>
            </div>

            {/* CHOICE PLAYER */}
            <div
              className="
                mt-5
                w-full

                max-[480px]:mt-4

                md:mt-5
                lg:mt-5
              "
            >
              {data[currentTeamIndex] && (
                <ChoicePlayer currentTeamIndex={currentTeamIndex} />
              )}
            </div>

            {/* SELECT CATEGORY */}
            <SelectCategory
              selectCategory={selectCategory}
              selectCategoryFunc={selectCategoryFunc}
            />

            {/* SELECT Difficulty */}
            <SelectDifficulty
              selectDifficulty={selectDifficulty}
              selectDifficultyFunc={selectDifficultyFunc}
            />

            {/* START */}
            <Button
              className="
                mt-10
                h-12
                w-full
                max-w-md
                bg-[#FFAA0F]
                text-base
                font-semibold
                text-black
                transition-all
                duration-200
                hover:bg-black
                hover:text-white

                max-[480px]:mt-6
                max-[480px]:h-11
                max-[480px]:text-sm

                md:mt-8
                md:h-12
                md:text-base

                lg:mt-10
                lg:h-12
                lg:text-base
              "
              onClick={() => setGameStarted(true)}
            >
              Start Turn
            </Button>
          </div>
        )}

        {/* GAME STARTED */}
        {gameStarted && (
          <div
            className="
              flex
              flex-col
              items-center
              py-16

              max-[480px]:py-8

              md:py-12
              lg:py-16
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-wider
                text-gray-400

                max-[480px]:text-xs

                md:text-sm
                lg:text-sm
              "
            >
              Act this word
            </p>

            {/* WORD */}
            <div
              className="
                flex
                min-h-[240px]
                w-full
                min-w-0
                items-center
                justify-center

                max-[480px]:min-h-[160px]
                max-[480px]:px-2

                md:min-h-[200px]

                lg:min-h-[240px]
              "
            >
              <h1
                className="
                  max-w-full
                  break-words
                  text-center
                  text-6xl
                  font-black

                  max-[480px]:text-4xl

                  md:text-6xl

                  lg:text-7xl
                "
              >
                {currentWord?.text}
              </h1>
            </div>

            {/* BUTTONS */}
            <div
              className="
                grid
                w-full
                max-w-md
                grid-cols-2
                gap-3

                max-[480px]:grid-cols-1
                max-[480px]:gap-2

                md:grid-cols-2
                md:gap-3

                lg:grid-cols-2
                lg:gap-3
              "
            >
              <Button
                type="button"
                variant="outline"
                className="
                  h-12
                  border-black
                  text-base
                  hover:bg-black
                  hover:text-white

                  max-[480px]:h-11
                  max-[480px]:text-sm

                  md:h-12
                  md:text-base

                  lg:h-12
                  lg:text-base
                "
                onClick={() => nextWord()}
              >
                Skip
              </Button>

              <Button
                type="button"
                className="
                  h-12
                  bg-[#FFAA0F]
                  text-base
                  text-black
                  hover:bg-black
                  hover:text-white

                  max-[480px]:h-11
                  max-[480px]:text-sm

                  md:h-12
                  md:text-base

                  lg:h-12
                  lg:text-base
                "
                onClick={() => {
                  if (!selectDifficulty) return;

                  const score = getDifficultyScore(selectDifficulty);

                  setScore(currentTeamIndex, score);
                  nextWord();
                }}
              >
                Correct
              </Button>
            </div>
          </div>
        )}

        {/* SCORE BAR */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            pt-5

            max-[480px]:pt-3

            md:pt-4
            lg:pt-5
          "
        >
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Team
            </p>

            <p
              className="
                break-words
                font-semibold

                max-[480px]:text-sm

                md:text-base
                lg:text-base
              "
            >
              {data[currentTeamIndex]?.teamName}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Score
            </p>

            <p
              className="
                text-3xl
                font-bold
                text-[#FFAA0F]

                max-[480px]:text-2xl

                md:text-3xl
                lg:text-3xl
              "
            >
              {data[currentTeamIndex]?.score}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlayGame;
