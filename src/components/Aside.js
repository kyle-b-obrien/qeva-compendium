import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/imgs/sentinel-logo-white.png';
import { 
    BasicIcon,
    DivineIcon,
    DRaceIcon,
    GemIcon,
    RaceIcon,
    ClassIcon,
    CharIcon,
    FaunaIcon,
    FloraIcon,
    HistIcon,
    LocIcon,
    MapIcon,
    ToolIcon
} from '../utils/icon';
import { BasicLink, MapLink, ToolLink } from '../utils/link';
import Sidebar from './Sidebar';
import { CLASSES } from '../assets/shared/CLASSES';
import { DIVINE } from '../assets/shared/DIVINE';
import { DRACES } from '../assets/shared/DRACES';
import { GEMS } from '../assets/shared/GEMS';
import { RACES } from '../assets/shared/RACES';
import { CHARACTERS } from '../assets/shared/CHARACTERS';
import { FAUNA } from '../assets/shared/FAUNA';
import { FLORA } from '../assets/shared/FLORA';
import { HISTORY } from '../assets/shared/HISTORY';
import { LOCATIONS } from '../assets/shared/LOCATIONS';
import BelowSpace from './BelowSpace';



function Aside() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen('0');
      } else {
        setOpen(id);
      }
    };

    return (
        <aside className='sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1 d-none d-md-block'>
            <Link to='/qeva-compendium'>
                <div className="sidebar-header d-flex justify-content-center align-items-center px-3 py-4">
                    <img
                        className="rounded-pill img-fluid"
                        width="65"
                        src={mainLogo}
                        alt="worldbuilding logo" />
                </div>
            </Link>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <i className={BasicIcon}></i>
                        &nbsp; The Basics
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ul className='sidebar-dropdown list-unstyled'>
                            <li><Link to={BasicLink}>Discover what makes Qeṽa unique.</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <Sidebar name="Gemstones" id="2" array={GEMS} icon={GemIcon} />
                <Sidebar name="Supernatural Sphere" id="3" array={DIVINE} icon={DivineIcon} />
                <Sidebar name="Races" id="4" array={RACES} icon={RaceIcon} />
                <Sidebar name="Dark Races" id="5" array={DRACES} icon={DRaceIcon} />
                <Sidebar name="Classes" id="6" array={CLASSES} icon={ClassIcon} />
                <Sidebar name="Characters" id="7" array={CHARACTERS} icon={CharIcon} />
                <Sidebar name="Fauna" id="8" array={FAUNA} icon={FaunaIcon} />
                <Sidebar name="Flora" id="9" array={FLORA} icon={FloraIcon} />
                <Sidebar name="History" id="10" array={HISTORY} icon={HistIcon} />
                <Sidebar name="Locations" id="11" array={LOCATIONS} icon={LocIcon} />
                <AccordionItem>
                    <AccordionHeader targetId="12">
                        <i className={MapIcon}></i>
                        &nbsp; Map
                    </AccordionHeader>
                    <AccordionBody accordionId="12">
                        <ul className='sidebar-dropdown list-unstyled'>
                            <li><Link to={MapLink}>Avlim</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="13">
                        <i className={ToolIcon}></i>
                        &nbsp; Tools
                    </AccordionHeader>
                    <AccordionBody accordionId="13">
                        <ul className='sidebar-dropdown list-unstyled'>
                            <li><Link to={ToolLink}>Tabletop Tools</Link></li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <BelowSpace />
        </aside>
    )
}

export default Aside;