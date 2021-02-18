import React from 'react'
import {NavLink} from "react-router-dom";

import './header.css'

const Header = () => {
    return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Lyzhychka_LAB_1</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0 links">
                        <li className="nav-item active">
                            <NavLink to='/area'>Обчислити площу</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/perymetr'>Обчислити периметр</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Header;