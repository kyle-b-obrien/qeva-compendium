import React from 'react';
import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const InnerExMenu = (props) => {
    return (
        <section className="highlights mt-2">
            <div className="row">
                <div className="col-lg-12 rounded-2">
                    <div className="box d-flex align-items-center mb-lg-0 p-1">
                        <div className="ms-3">
                            <div className="d-flex align-items-center">
                            <i className={props.icon}></i>
                            <h5 className="mb-0">{props.name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0">
                        <div className="">
                            <Navbar dark expand='xs'>
                                <Nav className='tab row' navbar>
                                    {props.array.map((type) => {
                                        return (
                                            <React.Fragment key={type.id}>
                                                <NavItem className='button'>
                                                    <NavLink className='nav-link text-nowrap text-center' to={type.link}>{type.name}</NavLink>
                                                </NavItem>
                                                    {type.topics && (
                                                        <div className='box text-center fst-italic pt-3'>
                                                            {type.topics.map((props) => (
                                                                <React.Fragment key={props.id}>
                                                                    <p>{props.name}</p>
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    )}
                                            </React.Fragment>
                                        );
                                    })}
                                    <NavItem className='button' id="inactive">
                                        <NavLink className='nav-link text-nowrap text-center' to='/qeva-compendium'>Home</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InnerExMenu;