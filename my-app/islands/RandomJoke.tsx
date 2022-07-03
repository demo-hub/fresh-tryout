/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { useState } from "preact/hooks";

export default function RandomJoke() {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
      const res = await fetch('/api/joke');
      const joke = await res.json();

      return setJoke(joke.joke);
  };

  const handleClick = (event) => {
    event.preventDefault();
    getJoke();
};
  
  const btn = tw`px-2 py-1 bg-green-700 text-white`;

  return (
    <div class={tw`flex gap-2 w-full`}>
      <button
        class={btn}
        onClick={handleClick}
        disabled={!IS_BROWSER}
      >
        Random joke
      </button>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{joke}</p>
    </div>
  );
}
