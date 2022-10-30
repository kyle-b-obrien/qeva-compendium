import { 
    Navbar, 
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { DRaceIcon } from '../../utils/icon';
import { DRACES } from '../../assets/shared/DRACES';

const RaceNav = () => {
    return (
        <section className="highlights mt-2">
            <div className="row">
                <div className="col-lg-12 rounded-2">
                    <div className="box d-flex align-items-center mb-lg-0 p-1">
                        <div className="ms-3 ">
                            <div className="d-flex align-items-center">
                            <i className={DRaceIcon}></i>
                            <h5 className="mb-0">Dark Races</h5>
                            </div>
                        </div>
                    </div>
                    <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0">
                        <div className="">
                            <Navbar dark expand='xs'>
                                <Nav className='tab row' navbar>
                                    {DRACES.map((type) => {
                                        return (
                                            <NavItem className='col-md button' key={type.id}>
                                                <NavLink className='nav-link text-nowrap' to={type.link}>{type.name}</NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RaceNav;