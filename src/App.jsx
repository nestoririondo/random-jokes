import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DisplayJoke from "./components/DisplayJoke";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";

function App() {
  const [jokes, setJokes] = useState([]);
  const [showArray, setShowArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState("Any");
  const [contains, setContains] = useState("");

  const loadJokes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://v2.jokeapi.dev/joke/${categories}?${contains}amount=10`
      );
      setJokes(response.data.jokes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJokes();
  }, [categories, contains]);

  const handleRefresh = () => {
    setJokes([]);
    loadJokes();
  };

  const bringMeUp = () => {
    window.scrollTo(0, 0);
  };

  const loadMore = () => {
    axios
      .get(`https://v2.jokeapi.dev/joke/${categories}?amount=10`)
      .then((response) => {
        setJokes([...jokes, ...response.data.jokes]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Random Jokes</h1>
      <Categories categories={categories} setCategories={setCategories} />
      <SearchBar contains={contains} setContains={setContains} />
      {categories && <button onClick={handleRefresh}>Load again</button>}
      <div className="joke-container">
        {isLoading && <p>Loading...</p>}
        {jokes &&
          jokes.map((joke) => {
            return (
              <DisplayJoke
                joke={joke}
                key={joke.id}
                showArray={showArray}
                setShowArray={setShowArray}
              />
            );
          })}
      </div>
      {!categories && <p>Select some category!</p>}
      {categories && (
        <>
          <button onClick={loadMore}>Load More</button>
          <button onClick={bringMeUp}>Bring me UP!</button>
        </>
      )}
    </>
  );
}

export default App;
