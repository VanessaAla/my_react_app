import "./App.css";
import Title from "./components/Title";
import ArticleList from "./components/ArticleList";
import LikeCounter from "./components/LikeCounter";

function App() {
  return (
    <div>
      <main>
        <Title content="Some Simple Title" />
        <LikeCounter />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
