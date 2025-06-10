import type { Route } from "./+types/home";
import Header from "../header/header";
import Banner from "../banner/banner";
import HeadlineVerticalLoop from "../headline/headline";
import Carousel from "../carrossel/carousel";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Semana " },
    { name: "description", content: "Semana de TDAH" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HeadlineVerticalLoop/>
      <Carousel />
    </>
  );
}
