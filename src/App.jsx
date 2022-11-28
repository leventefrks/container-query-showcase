import './App.css';
import Card from './Card';
import movies from './movies.json';

const App = () => {
  return (
    <div className="App">
      <h1>The 6 best films of 2022 (so far)</h1>
      <div className="wrapper">
        <div className="layout">
          <main className="container">
            <Card {...movies[5]} />
            <Card {...movies[4]} />
            <Card {...movies[3]} />
            <Card {...movies[2]} />
          </main>
          <aside className="container">
            <Card {...movies[1]} />
            <Card {...movies[0]} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default App;
