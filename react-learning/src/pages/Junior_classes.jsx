import React, { Fragment } from 'react';
import classes from './../styles/Junior.module.css';
import Header from './../components/Header/Header';

const Junior_clases = () => {
    return (
        <Fragment>
            <head>
                <title>ЛМШ</title>
            </head>
            <body classes="Junior">
                <Header />      
                <div className={classes.back_ground}></div>
                <div>
                    <p>fff</p>
                </div>
                <p>test</p>
            </body>
        </Fragment>
    );
};

export default Junior_clases;