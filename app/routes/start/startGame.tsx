      import { Button } from "../../components/ui/button"
import { Link, useNavigate } from "react-router";


const StartGame = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/setup")}
      className="min-h-screen w-full bg-white text-black flex items-center   justify-center cursor-pointer"
    >
      <Button
        className="absolute hover:scale-105 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl border cursor-pointer hover:bg-white hover:text-black hover:border-white"
        variant="ghost"
      >
        Let's Play Pantomime
      </Button>
    </div>
  );
};

export default StartGame;
