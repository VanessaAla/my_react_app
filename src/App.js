import "./App.css";
import Title from "./components/Title";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <main>
        <Title content="Some Simple Title" />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
