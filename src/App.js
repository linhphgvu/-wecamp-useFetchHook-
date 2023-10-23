import './App.css';
import useFetch from './useFetch';

function App() {
  const { data, error, loading } = useFetch('https://api.quotable.io/random');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="App">
      <div>
        <h2>Random Quote</h2>
        <p>{data.content}</p>
        <p>- {data.author}</p>
      </div>
    </div>
  );
}

export default App;

