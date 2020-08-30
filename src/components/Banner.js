import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import '../assets/Banner.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button } from '@material-ui/core';

function Banner(props) {

    const [movie, setMovie] = useState([]);
    const [counter, setCounter] = useState(0);

    // setTimeout(function () {
    //     setCounter(counter + 1);
    // }, 15000);

    useEffect(() => {
        fetchData();
    }, [movie]);

    async function fetchData() {
        try {
            const res = await axios.get(requests.fetchNetflixOriginals);

            setMovie(res.data.results[counter]);

            return res;
        } catch (error) {
            console.log(error);
        }
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const prevButton = () => {
        console.log("Prev Button Clicked");
        setCounter(counter - 1);
    }

    const nextButton = () => {
        console.log("Next Button Clicked");
        setCounter(counter + 1);
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'top center',
                transition: 'all ease 1.2s'
            }}
        >

            <div className="prev-next">

                <Button
                    className={counter <= 0 ? "hiddenButton" : ""}
                    style={{ color: 'white', borderRadius: '100px' }}
                    startIcon={<ArrowBackIosIcon />}
                    size="large"
                    onClick={prevButton}></Button>
                <Button
                    className={counter >= 19 ? "hiddenButton" : ""}
                    style={{ color: 'white', borderRadius: '100px' }}
                    startIcon={<ArrowForwardIosIcon />}
                    size="large"
                    onClick={nextButton}></Button>
            </div>

            <div className="banner__contents">
                {/* Title */}
                <h1 className="banner__title">
                    {
                        movie?.title || movie?.name || movie?.original_name
                    }
                </h1>

                {/* Buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>

                {/* Description */}
                <h2 className="banner__description">
                    {
                        truncate(movie?.overview, 150)
                    }
                </h2>
            </div>
            <div className="banner--fadeButton"></div>
        </header>
    );
}

export default Banner;