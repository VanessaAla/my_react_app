import "./App.css";
import Title from "./components/Title";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";
function App() {
  return (
    <div>
      <main>
        <Title content="Some Simple Title" />
        <ArticleCard />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
