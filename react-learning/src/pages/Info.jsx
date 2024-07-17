import React, { Fragment } from 'react';
import classes from './../styles/Info.module.scss';


const Info = () => {
    return (
        <Fragment>
            <head>
                <title>ЛМШ</title>
            </head>
            <body className={classes.container}>
                <p>Абоба</p>
            </body>
        </Fragment>
    );
};

export default Info;