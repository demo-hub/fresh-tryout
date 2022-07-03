/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import RandomJoke from "../islands/RandomJoke.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Click the button below to get a joke
      </p>
      <RandomJoke />
    </div>
  );
}
