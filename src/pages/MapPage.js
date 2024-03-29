import React, { useState } from 'react';
import { CloseIcon } from '../utils/icon';
import { 
    Modal, 
    ModalBody 
} from 'reactstrap';
import {
    Magnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";
import { MapIcon } from "../utils/icon";
import avlimMap from '../assets/imgs/maps/avlim-map.jpg'
import InnerSmNav from "../features/navs/InnerSmNav";

const MapPage = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="py-2 px-3">
            <InnerSmNav icon={MapIcon} name="Map" />
            <div className="row">
                <div className="col-12 col-lg-10 col-xl-9 btn">
                    <img src={avlimMap} style={{ width: '100%' }} onClick={toggle} alt='Map of Avlim' />
                </div>
                <Modal isOpen={modal} toggle={toggle} fullscreen>
                    <ModalBody>
                        <button onClick={toggle} style={{color: 'white' }} >
                            Press 'ESC' or <i className={CloseIcon} ></i> to close
                        </button>
                        <Magnifier
                            imageSrc={avlimMap}
                            imageAlt="Map of Avlim"
                            mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK}
                            touchActivation={TOUCH_ACTIVATION.SINGLE_TAP}
                        />
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default MapPage;