// import libs:
import React from 'react';
import { Link } from 'react-router-dom';

// import static:
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <a>aboba</a>
            </footer>
        </div>
    );
};

export default Footer;