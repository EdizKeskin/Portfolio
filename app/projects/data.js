import Manga from "@/assets/projects/manga.png";
import Ecom from "@/assets/projects/ecom.jpg";
import Chat from "@/assets/projects/chat.jpg";
import Medium from "@/assets/projects/medium.jpg";
import Kedy from "@/assets/projects/kedy.png";

const Projects = [
  {
    title: "Manga Reader",
    link: "https://github.com/EdizKeskin/MangaReader",
    image: Manga,
    tags: ["Next.js", "MongoDB", "Firebase", "Express"],
  },
  {
    title: "Kedy",
    link: "https://github.com/EdizKeskin/Kedy",
    image: Kedy,
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "E-Commerce",
    link: "https://github.com/EdizKeskin/Altogic-Commerce",
    image: Ecom,
    tags: ["React", "Altogic", "ChakraUI"],
  },
  {
    title: "Chat App Firebase",
    image: Chat,
    tags: ["React", "Firebase"],
  },
  {
    title: "Medium UI Clone",
    image: Medium,
    tags: ["Bootstrap"],
  },
];

export { Projects };
