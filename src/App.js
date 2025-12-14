import './App.css';

function App() {
    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];
    
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
        </div>
    );
}

export default App;
