import React from 'react'
import { Link } from "react-router-dom";

import { getCurrentDate } from '../../utils/getCurrentDate';
import LookupContainer from '../lookup/LookupContainer';

export const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <Link to={`/${getCurrentDate()}`} className="navbar-brand">NewsRoom Portal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={`/politics/${1}`} className="nav-link">Politics</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/international/${2}`} className="nav-link">Iternational</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/technology/${3}`} className="nav-link">Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/entertainment/${4}`} className="nav-link">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/sports/${5}`} className="nav-link">Sports</Link>
                    </li>
                </ul>
                <LookupContainer />
            </div>
        </nav>
    )
}

