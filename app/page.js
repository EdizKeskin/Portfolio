import TypeWriter from "@/components/TypeWriter";
import {
  FaInstagram,
  FaSteam,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Logo from "@/components/Logo";
import Scroll from "@/components/Scroll";
import MotionDiv from "@/components/MotionDiv";
import About from "@/components/About";
import Skills from "@/components/Skills";


export default function Home() {
  const Social = [
    {
      name: "Github",
      href: "",
      icon: <FaGithub size={"30px"} color="white" />,
    },
    {
      name: "Twitter",
      href: "",
      icon: <FaTwitter size={"30px"} color="white" />,
    },
    {
      name: "Instagram",
      href: "",
      icon: <FaInstagram size={"30px"} color="white" />,
    },
    {
      name: "steam",
      href: "",
      icon: <FaSteam size={"30px"} color="white" />,
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-18 md:py-24 gap-8 md:gap-10 items-center justify-items-center">
        <aside>
          <div className="flex overflow-hidden">
            <Logo />
          </div>
        </aside>
        <main>
          <div>
            <div className="text-center leading-4 text-4xl backdrop-blur-sm sm:text-5xl md:text-6xl font-medium tracking-tight">
              <h1 className="text-white mb-8">
                I&apos;m
                <span className="after:w-full after:h-2/6 after:absolute after:bottom-1 after:left-0 after:bg-rose-500 after:-z-10 text-white relative ml-2">Ediz Keskin</span>
              </h1>
              <h2 className="text-rose-500 leading-10 md:leading-none" >
                <TypeWriter />
              </h2>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className="flex items-center flex-row justify-center p-13 mt-10 rounded-md gap-5">
                {Social.map((social) => (
                  <div key={social.name} className="tooltip tooltip-bottom" data-tip={social.name}>
                    <a className="text-white" href={social.href} rel="noopener noreferrer">
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
      <p className="hidden">Hello my name is Ediz Keskin. I&apos;m 17 years old. I want to be Full
        stack developer in the future.</p>
      <MotionDiv right>
        <About />
      </MotionDiv>
      <MotionDiv>
        <Skills />
      </MotionDiv>
    </div>
  );
}
