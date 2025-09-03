import React, { useRef, useState } from "react";
import { useOnScreen } from "./Home";
import { useDarkMode } from "../hooks/useDarkMode";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const darkMode = useDarkMode();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset input values
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="contact"
      className="w-full overflow-x-hidden overflow-y-hidden min:h-screen p-4"
    >
      <div
        ref={ref}
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8 text-center flex flex-col gap-3">
          <h1
            className={`text-4xl font-bold inline  transition duration-[1500ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Get in Touch
          </h1>
          <p
            className={`transition font-light text-lg duration-[1500ms] italic  ${
              isVisible ? "opacity-100" : "opacity-0 "
            }`}
          >
            Let's make cool stuff happen — drop me a message!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/5f4689d2-785e-4974-88b6-544485fa40a4"
            target="_blank"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <div
              className={`flex flex-col mb-4 transition duration-[1500ms] ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0  translate-x-5 sm:translate-x-20"
              }`}
            >
              <label
                htmlFor="email"
                className={`font-medium mb-2  transition duration-[1500ms] ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-5 sm:translate-x-20"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                required
                min={5}
                name="name"
                id="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="p-2 rounded-md  focus:outline-none  placeholder:font-extralight placeholder:text-sm"
                style={{
                  background: darkMode ? "#222831" : "#eeeeee",
                  boxShadow: darkMode
                    ? "inset 4px 4px 8px #1d222a, inset -4px -4px 8px #272e38"
                    : "inset 4px 4px 8px #cacaca, inset -4px -4px 8px #ffffff",
                }}
              />
            </div>
            <div
              className={`flex flex-col mb-4 transition duration-[1500ms] ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5 sm:-translate-x-20"
              }`}
            >
              <label
                htmlFor="name"
                className={` font-medium mb-2  transition duration-[1500ms] ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5 sm:-translate-x-20"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="p-2 rounded-md  focus:outline-none placeholder:font-extralight placeholder:text-sm"
                style={{
                  background: darkMode ? "#222831" : "#eeeeee",
                  boxShadow: darkMode
                    ? "inset 4px 4px 8px #1d222a, inset -4px -4px 8px #272e38"
                    : "inset 4px 4px 8px #cacaca, inset -4px -4px 8px #ffffff",
                }}
              />
            </div>
            <div
              className={`flex flex-col mb-4 transition duration-[1500ms] ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-y-5 sm:translate-y-20"
              }`}
            >
              <label
                htmlFor="message"
                className={`font-medium mb-2 transition duration-[1500ms] ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-y-5 sm:translate-y-20"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                required
                minLength={15}
                maxLength={150}
                name="message"
                placeholder="Enter your message"
                rows={8}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="p-2 rounded-md focus:outline-none  placeholder:font-extralight placeholder:text-sm"
                style={{
                  background: darkMode ? "#222831" : "#eeeeee",
                  boxShadow: darkMode
                    ? "inset 4px 4px 8px #1d222a, inset -4px -4px 8px #272e38"
                    : "inset 4px 4px 8px #cacaca, inset -4px -4px 8px #ffffff",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`mt-8 mx-auto  font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer transition duration-[300ms] ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-y-5 sm:translate-y-20"
              }`}
              style={{
                background: darkMode ? "#222831" : "#eeeeee",
                boxShadow: darkMode
                  ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                  : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
              }}
              onSubmit={handleSubmit}
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
