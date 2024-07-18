import React, { Fragment } from 'react';
import classes from './../styles/Info.module.css';
import Header from './../components/Header/Header';

const Info = () => {
    return (
        <Fragment>
            <head>
                <title>ЛМШ</title>
            </head>
            <body className={classes.body}>
                <Header/>
                <div className={classes.infopage}>
                    <p>Абоба</p>    
                </div>
            </body>
        </Fragment>
    );
};

export default Info;