import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
import { IoSendSharp } from "react-icons/io5";

const Form = () => {
  const form = useRef();
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!inputs.name || !inputs.email || !inputs.message) {
      return toast.error("All fields are required!");
    }
    setLoading(true);
    emailjs
      .sendForm("service_lefvgmj", "template_sgfcdsp", form.current, {
        publicKey: "6MixTc1hu41wRYzci",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setInputs({ name: "", email: "", message: "" });
          toast.success("Message send!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    // Adjust the height of the textarea when the content changes
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height to auto
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px"; // Set the height to the scrollHeight
    }
  }, [inputs]);

  return (
    <form
      className="flex gap-4 flex-col  text-xs w-[300px] "
      ref={form}
      onSubmit={sendEmail}
    >
      <input
        type="text"
        placeholder="Name"
        value={inputs.name}
        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        name="user_name"
        className="text-mud p-2 text-md rounded-md font-semibold w-full focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="text-mud p-2 text-md rounded-md font-semibold w-full focus:outline-none"
        name="user_email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <textarea
        ref={textareaRef}
        placeholder="Message"
        name="message"
        value={inputs.message}
        onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
        className="text-mud p-2 text-md rounded-md font-semibold w-full resize-none focus:outline-none"
      ></textarea>
      <button
        type="submit"
        className="w-fit py-2 flex items-center gap-2 px-3 active:scale-90 rounded-xl text-base font-bold  bg-[burlywood] hover:bg-opacity-80 duration-200"
        value="Send"
      >
        {loading ? <ClipLoader color="#FFFFFF" size={15} /> : <IoSendSharp />}
        Submit
      </button>
    </form>
  );
};

export default Form;
