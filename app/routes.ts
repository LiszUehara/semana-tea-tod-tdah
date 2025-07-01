import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("participante/:id", "routes/participante.tsx"), // Nova rota dinâmica
] satisfies RouteConfig;
