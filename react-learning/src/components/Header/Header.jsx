import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div class = "head">
        <div class = "right_buttons">
            <a class = "info"  aria-label="Инфо" title="Инфо" href="/">
                Инфо  
            </a>
            <a class = "Juniors"  aria-label="Juniors" title="Juniors" href="/junior">
                6 - 8 классы
            </a>
            <a class = "Seniors"  aria-label="Seniors" title="Seniors" href="">
                9 - 10 классы  
            </a>
        
        </div>
    </div>
    )
};

export default Header;