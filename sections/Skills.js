import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export default function Skills() {
    const skills = [
        {
            name: "HTML",
            value: "90",
            icon: <FaHtml5 size="1.5em" />,
        },
        {
            name: "CSS",
            value: "70",
            icon: <FaCss3Alt size="1.5em" />,
        },
        {
            name: "JavaScript",
            value: "70",
            icon: <FaJs size="1.5em" />,
        },
        {
            name: "React",
            value: "75",
            icon: <FaReact size="1.5em" />,
        },
        {
            name: "RPG GAMES",
            value: "100",
        },
    ];
    return (
        <div className="mockup-window backdrop-blur-md bg-[#2d374850] border border-base-300 shadow-lg sm:shadow-md mb-6 sm:shadow-[#aa65fa] sm:border-none">
            <div className="p-4 py-10 m-4 md:p-10 md:m-10 md:py-10">
                <h2 className="text-4xl font-bold text-white">Skills</h2>
                <div className="grid grid-cols-1 gap-6 mt-16 mb-10 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-row items-center mb-3 text-white">
                                {skill.icon && skill.icon}
                                <p className="ml-4 text-2xl font-bold">{skill.name}</p>
                            </div>
                            <progress className="w-56 progress progress-success" value={skill.value} max="100"></progress>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="z-0 sm:skills-gradient" />
        </div>
    )
}
