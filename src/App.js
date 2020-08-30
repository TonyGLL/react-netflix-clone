import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './layout/Nav';
import requests from './requests';

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <Nav />

      {/* BANNER */}
      <Banner />

      {/* NETFLIX ORGINALS */}
      <Row
        title="NETFLIX ORGINALS - Trailers Available"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      {/* Trending Movies */}
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />

      {/* Top Rated */}
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      {/* Action Movies */}
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      {/* Comedy Movies */}
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      {/* Horror Movies */}
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      {/* Romance Movies */}
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      {/* Documentaries */}
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
