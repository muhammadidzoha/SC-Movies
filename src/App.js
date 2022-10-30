import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import api from "./api";

function App() {
  return (
    <>
      <Navbar />
      <Wrapper />
      <Main featured="NETFLIX ORIGINAL" url={api.fetchNetflixOriginals} />
      <Main featured="TRENDING" url={api.fetchTrending} />
      <Main featured="TOP RATED" url={api.fetchTopRated} />
      <Main featured="ACTION" url={api.fetchActionMovies} />
      <Main featured="HORROR" url={api.fetchHorrorMovies} />
      <Main featured="ROMANCE" url={api.fetchRomanceMovies} />
      <Main featured="COMEDY" url={api.fetchComedyMovies} />
      <Main featured="DOCUMENTARY" url={api.fetchDocumentaries} />
      <Footer />
    </>
  );
}

export default App;
