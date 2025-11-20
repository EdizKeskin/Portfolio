import React from "react";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="mockup-window bg-[#2d374850] border border-base-300 backdrop-blur-md shadow-lg sm:shadow-md mb-6 mt-40 sm:shadow-[#7aebfb] sm:border-none"
      >
        <div className="flex flex-col p-4 py-10 m-4 md:p-10 md:m-10">
          <div className="flex flex-col items-center justify-center">
            <p className="justify-center text-lg text-center ">
              Merhaba, ben Ediz Keskin. 20 yaşındayım ve Yönetim Bilişim
              Sistemleri öğrencisiyim. Aynı zamanda 42 İstanbul&apos;da eğitim
              almaktayım. Full-stack geliştirici olmak için kendimi sürekli
              geliştiriyorum. Yazılım dünyasına olan tutkum ve öğrenme azmimle,
              teknolojinin farklı alanlarında kendimi ilerletmeye devam
              ediyorum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
