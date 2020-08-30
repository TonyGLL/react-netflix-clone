import React, { useState, useEffect } from 'react';
import '../assets/Nav.css';
import Img from '../assets/images/netflix_logo.png'
import { Button } from '@material-ui/core';

function Nav(props) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src={Img}
                alt="Netflix Logo"
            />
            <div className="nav__avatar">
                <Button
                    className="login"
                    variant="outlined"
                    color="primary"
                >Login
                </Button>

                <Button
                    className="register"
                    variant="outlined"
                    color="secondary"
                >Register
                </Button>
            </div>
        </div>
    );
}

export default Nav;         