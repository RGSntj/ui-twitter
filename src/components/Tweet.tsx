import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface Props {
  content: string;
}

export function Tweet({ content }: Props) {
  return (
    <Link to="/status" className="tweet">
      <img
        src="https://github.com/rgsNTJ.png"
        alt="Rodrigo Gomes Photo Profile"
      />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Rodrigo Gomes</strong>
          <span>@rogerinho</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
