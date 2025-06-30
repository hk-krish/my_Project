import React from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import { ConfigurationProps } from '../../../../Types/Layout';
import ConfigDB from '../../../../Config/Theme';
import { Cancel, ConfigurationTitle, CopyTextButton } from '../../../../Constants';
import Content from './Content';

const Configuration: React.FC<ConfigurationProps> = ({ modal, toggle }) => {

    const handleThemeCopy = async () => {
        try {
            const clipBoardString = JSON.stringify(ConfigDB, null, 2);
            await navigator.clipboard.writeText(clipBoardString);
        } catch (err) {
            toast.error("Failed to copy text: " + err);
        }
        toast.success("Code Copied to clipboard !", {
            position: "bottom-right",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
        });
    };

    return (
        <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
            <ModalHeader toggle={toggle}>{ConfigurationTitle}</ModalHeader>
            <ModalBody>
                <Container fluid={true} className="bd-example-row">
                    <Row>
                        <p>{"To replace our design with your desired theme. Please do configuration as mention"}</p>
                        <p>
                            <b> {"Path : src > Config > ThemeConfig.tsx "}</b>
                        </p>
                    </Row>
                    <Content />
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="notification" onClick={handleThemeCopy}>
                    {CopyTextButton}
                </Button>
                <Button color="secondary" onClick={toggle}>
                    {Cancel}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default Configuration;