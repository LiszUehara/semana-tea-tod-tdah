import type { Route } from "./+types/home";
import { Header } from "../header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Semana " },
    { name: "description", content: "Semana de TDAH" },
  ];
}

export default function Home() {
  return <Header />;
}
