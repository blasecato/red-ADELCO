import React from 'react';
import { Table, Divider, Tag,Card, Button } from 'antd';
import { Input,Icon } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import DeleteUser from "../../../components/modals/modaldeleteuser/ModalDeleteUser";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

class DeleteUpdateUser extends React.Component {
    render() {
        const data = [
            {
              key: '1',
              firstName: 'John',
              lastName: 'Brown',
              age: 3234324367,
              address: 'Jefe Finca',
              tags: ['Cacao', 'Cafe'],
            },
            {
              key: '2',
              firstName: 'Jim',
              lastName: 'Green',
              age: 4243543543,
              address: 'Esposa',
              tags: ['Cacao', 'Caña','Cafe'],
            },
            {
              key: '3',
              firstName: 'Joe',
              lastName: 'Black',
              age: 3234543543,
              address: 'Hija',
              tags: ['Cacao', 'Caña'],
            },
          ];
        return (
            <div className="deleteupdateuser">
                <LayoutHome/>
                <div className="queryuser__content">
                    <div className="users--title">
                        <h1>Consultar Usuarios</h1> 
                    </div>
                <Card title="Listado de Beneficiarios" 
                    extra={<Search
                    placeholder="Buscar Usuario"
                    onSearch={value => console.log(value)}
                    />}
                >
                    <Table dataSource={data}>
                        <Column title="Nombres." dataIndex="firstName" key="firstName" />
                        <Column title="Apellidos." dataIndex="lastName" key="lastName" />
                        <Column title="DNI" dataIndex="age" key="age" />
                        <Column
                        title="Actualizar"
                        dataIndex="tags"
                        key="tags"
                        render={(text, record) => (
                            <span>
                                <Button className="update" href="/update"><Icon type="edit" />Actualizar</Button>
                            </span>
                        )}
                        />
                        <Column
                        title="Mas..."
                        key="Eliminar"
                        render={(text, record) => (
                            <span>
                                <DeleteUser></DeleteUser>
                            </span>
                        )}
                        />
                    </Table>
                </Card>
                    
                </div>
                
            </div>
        );

    }
}

export default DeleteUpdateUser;