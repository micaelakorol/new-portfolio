import { download, email, github, linkedin } from "../../../assets/variables";
import cv from "./MicaelaKorolCV.pdf";

export const socialButtons = [
    {
      title: "Descargar CV",
      href: cv,
      download: "Micaela Korol CV",
      src: download,
      alt: "download"
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/micaelakorol/",
      src: linkedin,
      alt: "Linkedin",
      target: "_blank"
    },
    {
      title: "Github",
      href: "https://github.com/micaelakorol",
      src: github,
      alt: "Github",
      target: "_blank"
    },
    {
      title: "E-mail",
      href: "mailto:micaelakorol@gmail.com",
      src: email,
      alt: "Email",
      target: "_blank"
    }
  ];