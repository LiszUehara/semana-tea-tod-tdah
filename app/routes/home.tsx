import type { Route } from "./+types/home";
import Header from "../header/header";
import Banner from "../banner/banner";
import HeadlineVerticalLoop from "../headline/headline";
import Carousel from "../carrossel/carousel";
import Evento from "~/evento/evento";
import Faq from "~/faq/faq";
import Footer from "~/footer/footer";
import Lead from "~/leaders/lead";
import Kit from "~/kit/kit";
import Local from "~/local/local";
import Agenda from "./agenda";




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
      <Evento />
      <Carousel />
      <Lead />
      <Local/>
      <Kit />
      <Faq />
      <Footer />
    </>
  );
}
