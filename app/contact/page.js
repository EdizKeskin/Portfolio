import React from 'react'
import { BsGithub, BsInstagram, BsPerson, BsTwitter } from "react-icons/bs";

export default function Contact() {
    const socials = [
        {
            name: "E-Mail",
            icon: <BsPerson size="1.5em" />,
            link: ""
        },
        {
            name: "Github",
            icon: <BsGithub size="1.5em" />,
            link: ""
        },
        {
            name: "Twitter",
            icon: <BsTwitter size="1.5em" />,
            link: ""
        },
        {
            name: "Instagram",
            icon: <BsInstagram size="1.5em" />,
            link: ""
        }
    ]
    return (
        <div className='flex justify-center overflow-hidden mt-10' id='contact'>
            <div className="rounded-lg m-10">
                <div>
                    <div className='flex sm:gap-4 md:gap-8 lg:gap-10 '>
                        <div className='flex flex-col md:flex-row  justify-center items-center'>
                            <div className='flex flex-row md:flex-col justify-space-around'>
                                {socials.map((social) => (
                                    <div key={social.name} className='p-6'>
                                        <btn className="btn text-xl border-none bg-transparent hover:bg-blue-400 hover:text-[#2D3748]">{social.icon}</btn>
                                    </div>
                                ))}
                            </div>
                            <div className='p-8 rounded-lg shadow-sm bg-[#2D3748] w-10/12 md:w-[400px]'>
                                <form>
                                    <div className='flex gap-5 flex-col'>
                                        <div className='w-full form-control required'>
                                            <label className='text-gray-300 label'>Name</label>
                                            <input
                                                type='text'
                                                name="name"
                                                placeholder="John Doe"
                                                className='w-full rounded-lg text-gray-300 p-2 input '
                                            />
                                        </div>
                                        <div className='w-full form-control required'>
                                            <label className='text-gray-300 label'>Name</label>
                                            <input
                                                type='email'
                                                name="name"
                                                placeholder="johndoe@gmail.com"
                                                className='w-full rounded-lg text-gray-300 p-2 input '
                                            />
                                        </div>
                                        <div className='w-full form-control required'>
                                            <label className='text-gray-300 label'>Message</label>
                                            <textarea name='message' className='resize-none max-h-[100px] textarea text-gray-300' />
                                        </div>
                                        <button className='btn btn-primary w-full'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
