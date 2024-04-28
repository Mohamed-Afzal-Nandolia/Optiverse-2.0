import "./Bubble.css";

const FrameComponent = () => {
  return (
    <div className="bubble-parent">
      <div className="bubble">
        <textarea
          className="bubble-child"
          placeholder="How are you feeling today?"
          rows={7}
          cols={21}
        />
        <div className="bubble-item" />
        <button className="post-wrapper">
          <div className="post">Post</div>
        </button>
      </div>
      <img
        className="image-1-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="image-2-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="image-3-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
