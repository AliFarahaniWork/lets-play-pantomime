import { Link } from "react-router";


const StartGame = () => {

  return (
    <div className="relative min-h-screen">
      <Link
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl border hover:bg-white hover:text-black hover:border-white"
        to={"/setup"}
      >
        Let's Play Pantomime
      </Link>
    </div>
  );
};

export default StartGame;
