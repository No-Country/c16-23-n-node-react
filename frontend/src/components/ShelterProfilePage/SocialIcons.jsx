import React from "react";
import { useForm } from "react-hook-form";
import inatagram from "/img/networks/instagram.svg";
import twitter from "/img/networks/twitter.svg";
import linkedIn from "/img/networks/linkedIn.svg";

function SocialIcons() {
  const instagramInputId = "galleryInputInstagram";
  const linkedinInputId = "galleryInputLinkedin";
  const twitterInputId = "galleryInputTwitter";

  const {
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    reset({
      userName: "",
    });
  };

  return (
    <main className="select-none bg-Primary p-0 font-poppins text-black">
      <div className="mb-6 flex flex-col gap-2 px-4 py-4 md:flex-row">
        <h1 className="mb-3 block text-lg font-semibold" htmlFor="description">
          Redes Sociales
        </h1>

        <div className="mb-5 flex flex-row items-center gap-2 px-0 py-0 font-poppins">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id={instagramInputId}
          />
          <a
            href="/img"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={inatagram}
              alt="Red Social"
              className="mx-6 mb-3 md:mx-6 md:mb-0"
            />
          </a>
          <div className="mb-5">
            <input
              className="mt-1 block w-full rounded-2xl bg-White px-2 py-2 shadow-xl outline-none"
              value={reset.userName || ""}
              onChange={(e) => reset({ userName: e.target.value })}
              type="text"
              id="name"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row items-center gap-2 px-0 py-0 font-poppins">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id={linkedinInputId}
          />
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={linkedIn}
              alt="Red Social"
              className="color-black mx-6 mb-3 md:mx-6 md:mb-0"
            />
          </a>
          <div className="mb-5">
            <input
              className="mt-1 block w-full rounded-2xl bg-White px-2 py-2 shadow-xl outline-none"
              value={reset.userName || ""}
              onChange={(e) => reset({ userName: e.target.value })}
              type="text"
              id="name"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="mb-5 flex h-0 flex-col gap-2 px-0 py-0 font-poppins md:flex-row">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id={twitterInputId}
          />
          <a
            href={"twitter"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={twitter}
              alt="Red Social"
              className="mx-6 mb-3 md:mx-6 md:mb-0"
            />
            <button className="mx-auto h-10 w-full rounded-2xl bg-Tertiary text-White md:mx-5 md:w-200">
              Vinculo
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default SocialIcons;
