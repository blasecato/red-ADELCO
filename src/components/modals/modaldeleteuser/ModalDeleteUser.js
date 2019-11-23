import React from 'react';
import { Modal, Button,Icon } from 'antd';

class DeleteUser extends React.Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className="ModalDeleteUser">
                <Button onClick={this.showModal}>
                    <Icon type="delete" /> Eliminar
                </Button>
                <Modal
                    title={<div className="title">Eliminar Usuario</div>}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <h3>¿Esta seguro/a que desea eliminar este Usuario?</h3>
                </Modal>
            </div>
        );

    }
}

export default DeleteUser;
