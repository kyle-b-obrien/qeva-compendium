import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const LgInneNav = (props) => {
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
                    <Navbar dark className='box'>   
                        <Nav className='tab row' style={{width: '100%'}} navbar>
                            <NavItem className='button'>
                                <NavLink className='nav-link text-nowrap text-center' to={props.link} >All {props.name}</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </section>
    );
}

export default LgInneNav