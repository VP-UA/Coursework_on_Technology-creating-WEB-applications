import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo"><Link to="/">Наукові публікації</Link></div>
            <nav>
                <ul>
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/">Список наукових публікацій</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
