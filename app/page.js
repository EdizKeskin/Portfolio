import TypeWriter from "@/components/TypeWriter";
import { FaInstagram, FaSteam, FaTwitter, FaGithub } from "react-icons/fa";
import dynamic from "next/dynamic";
import Scroll from "@/components/Scroll";
import MotionDiv from "@/components/MotionDiv";

const Logo = dynamic(() => import("@/components/models/Logo"));
const Skills = dynamic(() => import("@/sections/Skills"));
const About = dynamic(() => import("@/sections/About"));

export default function Home() {
  const Social = [
    {
      name: "Github",
      href: "https://github.com/EdizKeskin",
      icon: <FaGithub size={"30px"} color="white" />,
      ariaLabel: "Github",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/EdizKeskin_",
      icon: <FaTwitter size={"30px"} color="white" />,
      ariaLabel: "Twitter",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ediz.keskinn",
      icon: <FaInstagram size={"30px"} color="white" />,
      ariaLabel: "Instagram",
    },
    {
      name: "steam",
      href: "https://steamcommunity.com/id/sharpness4",
      icon: <FaSteam size={"30px"} color="white" />,
      ariaLabel: "Steam",
    },
  ];

  return (
    <div className="container px-4 mx-auto mt-5 overflow-hidden max-w-7xl">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 py-18 md:py-24 md:gap-10 justify-items-center">
        <aside>
          <div className="flex overflow-hidden">
            <Logo />
          </div>
          <div className="z-0 gradient-1" />
          <div className="z-0 gradient-2" />
        </aside>
        <main className="z-30">
          <div>
            <div className="z-40 text-4xl font-medium leading-4 tracking-tight text-center sm:text-5xl md:text-6xl">
              <h1 className="mb-8 text-white">
                I&apos;m
                <span className="after:w-full after:h-2/6 after:absolute after:bottom-1 after:left-0 after:bg-[#8b55c9] after:-z-20 text-white relative ml-2">
                  Ediz Keskin
                </span>
              </h1>
              <h2 className="text-[#aa65fa] leading-10 md:leading-none text-3xl">
                <TypeWriter />
              </h2>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-center justify-center gap-5 mt-10 rounded-md p-13">
                {Social.map((social) => (
                  <div
                    key={social.name}
                    className="tooltip tooltip-bottom tooltip-primary"
                    data-tip={social.name}
                  >
                    <a
                      className="text-white"
                      href={social.href}
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                    >
                      {social.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Scroll />
        </main>
      </div>

      <div className="-mt-20 sm:-mt-0">
        <MotionDiv right>
          <About />
        </MotionDiv>
        <MotionDiv>
          <Skills />
        </MotionDiv>
      </div>
      <p className="hidden">
        Merhaba, ben Ediz Keskin. 20 yaşındayım ve Yönetim Bilişim Sistemleri
        öğrencisiyim. Aynı zamanda 42 İstanbul&apos;da eğitim almaktayım.
        Full-stack geliştirici olmak için kendimi sürekli geliştiriyorum.
        Yazılım dünyasına olan tutkum ve öğrenme azmimle, teknolojinin farklı
        alanlarında kendimi ilerletmeye devam ediyorum.
      </p>
      <div className="gradient-05" />
    </div>
  );
}
