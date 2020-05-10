import React from "react";
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col floatL">
                        <Link className="textAlignLeft" to="/">
                            <h2>viro ponpon</h2>
                        </Link>
                    </div>
                    <div className="col">
                        <Link className="textAlignRight" to="/">
                            <h2>About Us</h2>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header
