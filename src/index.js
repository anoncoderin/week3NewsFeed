import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Stories from "./sample_news_stories.json";
import StyleSheet from "./styles.css";

export default function App() {
  return (
    <div className="wholeContainer">
      <h2>My News Feed</h2>
      {Stories.results.map(Contents)}
    </div>
  );
}

function Contents(props) {
  const placeHolder = "https://placehold.co/600x400?text=News+Story";

  function handleDelete(e) {
    const cross = e.target;
    if (cross.tagName === "SPAN" && cross.textContent === "X") {
      e.currentTarget.remove();
    }
  }
  
  return (
    <div className="mainContainer" onClick={handleDelete}>
      <div className="closeIt">
        <span className="delete">X</span>
      </div>
      <div className="image_text">
        <div className="imageContainer">
          <img src={props.image_url || placeHolder} />
        </div>
        <div>
          <h3>
            <a href={props.link} target="_blank">
              {props.title}
            </a>
          </h3>
          <span>By: {props.creator}</span>
        </div>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
