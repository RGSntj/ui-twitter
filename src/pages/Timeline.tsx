import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const tweets = [
  "Esse aqui é o primeiro tweet",
  "Esse aqui é o segundo tweet",
  "Esse aqui é o terceiro tweet",
];

import "./Timeline.css";

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rgsNTJ.png" alt="Rodrigo Gomes" />
          <textarea name="tweet" placeholder="What's happening?"></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
