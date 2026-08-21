import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("/playgame", [index("routes/playGame/playGame.tsx")]),
] satisfies RouteConfig;
