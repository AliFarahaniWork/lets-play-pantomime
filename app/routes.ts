import {
  type RouteConfig,
  index,
  route,
  
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // تنظیمات بازی
  // route("/", "routes/pages/pageSetup.tsx"),

  // خود بازی
  route("/game", "routes/playGame/playGame.tsx"),

  // نتیجه نهایی
  route("/winner", "routes/winGame/winGame.tsx"),
] satisfies RouteConfig;
