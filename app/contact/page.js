"use client";
import { useState } from "react";
import { BsGithub, BsInstagram, BsPerson, BsTwitter } from "react-icons/bs";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState("Copy Email");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("gmail", "content", e.target, process.env.NEXT_PUBLIC_EMAIL_ID)
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
    e.target.reset();
    setLoading(false);
  };
  const textToCopy = "edizkeskin@gmail.com";

  function copyToClipboard() {
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopied("Copied!");
    setTimeout(() => {
      setCopied("Copy Email");
    }, 3000);
  }

  const socials = [
    {
      name: "Github",
      icon: <BsGithub size="1.5em" />,
      link: "https://github.com/EdizKeskin",
    },
    {
      name: "Twitter",
      icon: <BsTwitter size="1.5em" />,
      link: "https://twitter.com/sharpness_4",
    },
    {
      name: "Instagram",
      icon: <BsInstagram size="1.5em" />,
      link: "https://www.instagram.com/sharpness_4/",
    },
  ];

  return (
    <div className="flex justify-center mt-10 overflow-hidden" id="contact">
      <div className="z-20 m-10 rounded-lg">
        <div>
          <div className="flex sm:gap-4 md:gap-8 lg:gap-10 ">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="flex flex-row md:flex-col justify-space-around">
                <div className="p-6">
                  <div className="tooltip tooltip-bottom" data-tip={copied}>
                    <div
                      onClick={copyToClipboard}
                      className=" p-3 sm:p-4 md:p-5 hover:cursor-pointer rounded-full text-xl border-none shadow-lg bg-transparent hover:bg-primary hover:text-[#2D3748]"
                    >
                      <BsPerson size="1.5em" />
                    </div>
                  </div>
                </div>
                {socials.map((social) => (
                  <div key={social.name} className="p-6">
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={social.name}
                    >
                      <Link href={social.link}>
                        <button className="p-3 sm:p-4 md:p-5 rounded-full text-xl border-none shadow-lg bg-transparent hover:bg-primary hover:text-[#2D3748]">
                          {social.icon}
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-[#2D3748] w-10/12 md:w-[400px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-5">
                    <div className="w-full form-control required">
                      <label className="text-gray-300 label">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className={`w-full p-2 rounded-lg text-gray-30 input ${
                          errors.name && "border-error"
                        }`}
                        disabled={loading === true ? true : false}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span className="mt-2 text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="w-full form-control required">
                      <label className="text-gray-300 label">E-Mail</label>
                      <input
                        name="email"
                        placeholder="johndoe@gmail.com"
                        className={`w-full p-2 rounded-lg text-gray-30 input ${
                          errors.email && "border-error"
                        }`}
                        disabled={loading === true ? true : false}
                        {...register("email", {
                          required: "Email Address is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid Email Address",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="mt-2 text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="w-full form-control required">
                      <label className="text-gray-300 label">Message</label>
                      <textarea
                        name="message"
                        className={`resize-none max-h-[100px] textarea text-gray-300 ${
                          errors.message && "border-error"
                        }`}
                        disabled={loading === true ? true : false}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 15,
                            message: "Message must be at least 15 characters",
                          },
                        })}
                      />
                      {errors.message && (
                        <span className="mt-2 text-red-500">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                    <button
                      className={`w-full btn btn-primary ${
                        loading === true && "loading"
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-0 contact-gradient-1" />
      <div className="z-0 contact-gradient-2" />
      {success && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div>
              <span>Message sent successfully.</span>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <div>
              <span>Something went wrong</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
