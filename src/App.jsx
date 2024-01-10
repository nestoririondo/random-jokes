import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DisplayJoke from "./components/DisplayJoke";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";

function App() {
  const [jokes, setJokes] = useState([]);
  const [showArray, setShowArray] = useState([]);
  const [filters, setFilters] = useState("Any");
  const [isLoading, setIsLoading] = useState(false);
  const [contains, setContains] = useState("");

  const loadJokes = () => {
    setIsLoading(true);
    axios
      .get(`https://v2.jokeapi.dev/joke/${filters}?${contains}amount=10`)
      .then((response) => {
        setJokes(response.data.jokes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadJokes();
  }, [filters, contains]);

  const handleRefresh = () => {
    setJokes([]);
    loadJokes();
  };

  const bringMeUp = () => {
    window.scrollTo(0, 0);
  };

  const loadMore = () => {
    axios
      .get(`https://v2.jokeapi.dev/joke/${filters}?amount=10`)
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
      <Filters filters={filters} setFilters={setFilters} />
      <SearchBar contains={contains} setContains={setContains} />
      {filters && <button onClick={handleRefresh}>Load again</button>}
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
      {!filters && <p>Select some category!</p>}
      {filters && (
        <>
          <button onClick={loadMore}>Load More</button>
          <button onClick={bringMeUp}>Bring me UP!</button>
        </>
      )}
    </>
  );
}

export default App;
