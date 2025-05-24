import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/homepage.css'; // Ensure you have the correct path to your CSS file

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [activeSection, setActiveSection] = useState('movies');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="main-header">
        <div className="header-top">
          <div className="logo">QUICKETT</div>
          <nav className="nav-links">
            <button onClick={() => setActiveSection('movies')}>Movies</button>
            <button onClick={() => setActiveSection('shows')}>TV Shows</button>
            <button onClick={() => setActiveSection('cricket')}>Cricket</button>
          </nav>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search movies, shows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        
        {/* Sub-header Navigation */}
        <div className="header-bottom">
          <nav className="sub-nav">
            <button>Trending</button>
            <button>New Releases</button>
            <button>Genres</button>
            <button>Upcoming</button>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="content-area">
        <section className="movie-grid">
          <h2>Popular {activeSection}</h2>
          <div className="grid-container">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  <div className="rating">⭐ {movie.vote_average}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li>Company Info</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© MOHIT</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
