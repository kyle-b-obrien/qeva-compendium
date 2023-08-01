import React, { useState, useEffect, useContext } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CharacterSheet from './CharacterSheet';
import CharacterBuilder from './CharacterBuilder';
//CONTEXT
import { CharacterContext } from '../contexts/characterContext';

const CharacterCreator = () => {
    
    const [character, setCharacter] = useContext(CharacterContext);

    const {
        //Name
        playerName, name,
        //Ability Scores
        str, dex, con, int, wis, cha,
        //Alignment
        alignment, alignmentType, alignmentGem,
        //Race
        endrace,
        //Class
        endclass,
     } = character;

    const resetCharacter = () => {
        setCharacter({
            //Name
            playerName: "",
            name: "",
            //Ability Scores
            str: 0, strMod: -5,
            dex: 0, dexMod: -5,
            con: 0, conMod: -5,
            int: 0, intMod: -5,
            wis: 0, wisMod: -5,
            cha: 0, chaMod: -5,
            alignment: "", alignmentType: "", alignmentGem: undefined,
            endrace: undefined,
            endclass: undefined
        });
    }

    const [modalOne, setModalOne] = useState(false);
    const toggleOneStart = () => setModalOne(true);
    const toggleOne = () => setModal(false);

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const toggle = () => {
        let charObj, d20;
        if (!character.alignmentGem || !character.endrace || !character.endclass) {
            toggleError();
            return;
        }
        charObj = character;
        //Die Rolls
        d20 = Math.floor(Math.random() * 20) + 1;
        charObj.ac = (10 + parseInt(charObj.dexMod));
        charObj.init = `+${d20 + parseInt(charObj.dexMod)}`;
        
        setCharacter({...charObj});
        setModal(true);
    };
    const toggleNested = () => {
        if (charChange()) {
            setNestedModal(!nestedModal);
        } else {
            reset();
        }
    };
    const toggleError = () => {
        setErrorModal(!errorModal);
    };
    const charChange = () => {
        if (
            playerName !== "" ||
            name !== "" ||
            str !== 0 || 
            dex !== 0 || 
            con !== 0 || 
            int !== 0 || 
            wis !== 0 || 
            cha !== 0 ||
            alignment ||
            alignmentGem ||
            alignmentType ||
            alignmentGem ||
            endrace ||
            endclass
        ) {
            return true;
        }
    }
    const reset = () => {
        setNestedModal(false);
        setModal(false);
        setModalOne(false);
        resetCharacter();
        console.clear();
    };
    const componentRef = React.createRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleCharacter = (prop, value) => {
        let charObj = character;
        charObj[prop] = value;
        setCharacter({...charObj});
    };

    return (
        <div className="col-lg-4">
            <Link className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3"  onClick={toggleOneStart}>
                <i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i>
                <div className="ms-3">
                    <div className="d-flex align-items-center">
                        <h3 className="mb-0">Character Builder</h3>
                    </div>
                </div>
            </Link>
            <Modal isOpen={modalOne} toggle={toggleOne} fullscreen>
                <ModalHeader>
                    <i className="iconify fs-2" data-icon="noto:man-elf-light-skin-tone"></i> Character Builder for:&nbsp;
                    <input type='text' className='player-name-input' onBlur={(e) => handleCharacter('playerName', e.target.value)} />
                </ModalHeader>
                <ModalBody>
                    <CharacterBuilder />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle} >
                        Build Character Sheet
                    </Button>{' '}
                    <Button color="danger" onClick={toggleNested}>
                        Cancel
                    </Button>   
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader toggle={toggle}><i className="iconify fs-2" data-icon="noto:elf-medium-skin-tone"></i> Character Builder</ModalHeader>
                <ModalBody>
                    <CharacterSheet ref={componentRef} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleOne} >
                        Back
                    </Button>{' '}
                    <Button color="primary" onClick={handlePrint} >
                        Print
                    </Button>{' '}
                    <Button color="danger" onClick={toggleNested}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={nestedModal}
                toggle={toggleNested}
            >
                <ModalHeader>WARNING!</ModalHeader>
                <ModalBody>Are you sure you want to cancel? If you cancel now, all progress will be lost.</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={reset}>
                        Yes, Cancel
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleNested}>
                        Go back
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal
                isOpen={errorModal}
                toggle={toggleError}
            >
                <ModalHeader>Oops!</ModalHeader>
                <ModalBody>
                    <div className='text-start'>
                        Some critical information is missing:
                        <ul className="list-group-flush">
                            {!alignmentGem && (<li className='list-group-item'><strong className='text-danger'>! </strong>Alignment</li>)}
                            {!endrace && (<li className='list-group-item'><strong className='text-danger'>! </strong>Race</li>)}
                            {!endclass && (<li className='list-group-item'><strong className='text-danger'>! </strong>Class</li>)}
                        </ul>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleError}>
                        Okay
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CharacterCreator;