'use client';

import Typewriter from "typewriter-effect";
export default function TypeWriter() {
    return (
        <Typewriter
            options={{
                autoStart: true,
                delay: 75,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .pauseFor(120)
                    .typeString('<span>Junior Frontend Developer<span>')
                    .pauseFor(600)
                    .deleteAll()
                    .pauseFor(600)
                    .typeString("<span>Learning Next.js<span>")
                    .pauseFor(600)
                    .start();
            }}
        />
    )
}
