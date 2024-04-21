import * as React from "react";

const EmojiImage = ({ src, alt }) => (
  <img className="emoji" src={src} alt={alt} />
);

const emojiData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ad495d088440f17fa949a8625df3677980440e5f6a603d3158ac25ce0f859b8?apiKey=92661a4911ce42ce899c384973a8d963&", alt: "Smiling face emoji" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df4bdfd37641e71813593b2c88ac8695a68eac5f524dc5786af56c13a3cfe7e2?apiKey=92661a4911ce42ce899c384973a8d963&", alt: "Neutral face emoji" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2078a9933186c5c25a2d3e3f6661204e8f83e71ff4e3a418f942ebeaf46a98d?apiKey=92661a4911ce42ce899c384973a8d963&", alt: "Frowning face emoji" },
];

function MyComponent() {
  return (
    <>
      <article className="feeling-card">
        <h2 className="question">How are you feeling today?</h2>
        <div className="feeling-input">
          <div className="emoji-container">
            {emojiData.map((emoji, index) => (
              <EmojiImage key={index} src={emoji.src} alt={emoji.alt} />
            ))}
          </div>
          <button className="post-button">Post</button>
        </div>
      </article>
    </>
  );
}

export default MyComponent;