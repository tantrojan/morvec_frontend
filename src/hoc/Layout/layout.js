import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './layout.css'

// Components
import Header from '../Header/header'
import Footer from '../Footer/footer'

class Layout extends Component {
    render() {
        return (
            <div className=''>
                <Header/>
                    <Row className="main_body">
                        <Col xs={2} className="sidebar">
                            <ul>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/movies'>Movies</Link></li>
                                <li><Link to='/getmerc'>Get Recommendation</Link></li>
                                <li><Link to='/help'>Help</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </Col>
                        <Col xs={10} className="body_container">
                                {this.props.children}
                        </Col>
                    </Row>
                <Footer/>
            </div>
        );
    }
}

export default Layout;