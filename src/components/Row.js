import React, { useEffect, useState } from 'react';
import '../assets/Row.css';
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);

    async function fetchData() {
        try {
            const res = await axios.get(fetchUrl);
            const data = res.data.results;
            setMovies(data);
            console.log(data);
            return res;
        } catch (error) {
            console.log(error);
        };
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        };
    };

    return (
        <div className="row">
            {/* TITLE */}
            <h2 className="title">{title}</h2>

            <div className="row__posters">
                {/* SEVERAL ROW POSTERS */}
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            loading="lazy"
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;