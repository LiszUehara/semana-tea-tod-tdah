import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("participante/:id", "routes/participante.tsx"),
  route("agenda", "routes/agenda.tsx"),
] satisfies RouteConfig;
