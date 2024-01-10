const DisplayJoke = ({ joke, showArray, setShowArray }) => {
  return (
    <div className="joke">
      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <>
          <p>{joke.setup}</p>
          {showArray.includes(joke.id) ? (
            <>
              <p>{joke.delivery}</p>
              <button
                onClick={() =>
                  setShowArray(showArray.filter((id) => id !== joke.id))
                }
              >
                Hide punchline
              </button>
            </>
          ) : (
            <button onClick={() => setShowArray([...showArray, joke.id])}>
              Show punchline
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayJoke;
