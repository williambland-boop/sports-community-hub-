import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Sports and Community Projects Hub</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/sports">Sports</Link>
                        <ul>
                            <li><Link to="/sports/tennis">Tennis</Link></li>
                            <li><Link to="/sports/frisbee-golf">Frisbee Golf</Link></li>
                            <li><Link to="/sports/ultimate-frisbee">Ultimate Frisbee</Link></li>
                            <li><Link to="/sports/bocci-ball">Bocci Ball</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;