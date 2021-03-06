import React from 'react';
import './Navbar.css';
import MainLogo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const {logged, login} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;
    const [isLogin, setIsLogin] = logged;
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="py-3" to="/home"> <img className="logo" src={MainLogo} alt=""/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link ml-4 py-3">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link ml-4 py-3">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link ml-4 py-3">Our Team </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link ml-4 py-3">Dashboard</Link>
                        </li>
                        <div>
                            {
                                isLogin 
                                ?   <li class="nav-item dropdown">
                                        <p className="nav-link ml-4 pt-3 dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {loggedInUser.name}
                                        </p>
                                        <div class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                        <span className="dropdown-item">
                                            <img className="user-logo" src={loggedInUser.img} alt=""/>
                                        </span>
                                        <button className="dropdown-item" onClick={() => setIsLogin()}> Log out </button>
                                        </div>
                                    </li>
                                :   <li className="nav-item py-3">
                                        <Link to="/login" className="nav-link btn px-4 py-2 ml-4"> Login </Link>
                                    </li>
                            }
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;