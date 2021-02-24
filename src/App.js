import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";

function App() {
  return (
    <div>
      <main>
        <Title content="Some Simple Title" />
        <LikeCounter />
      </main>
    </div>
  );
}

export default App;
