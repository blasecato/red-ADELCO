import React from 'react';
import { Table, Divider, Tag,Card } from 'antd';
import { Input } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

const { Search } = Input;
const { Column, ColumnGroup } = Table;

class QueryUser extends React.Component {
    render() {
        const data = [
            {
              key: '1',
              firstName: 'John',
              lastName: 'Brown',
              age: 32,
              address: 'Jefe Finca',
              tags: ['Cacao', 'Cafe'],
            },
            {
              key: '2',
              firstName: 'Jim',
              lastName: 'Green',
              age: 42,
              address: 'Esposa',
              tags: ['Cacao', 'Caña','Cafe'],
            },
            {
              key: '3',
              firstName: 'Joe',
              lastName: 'Black',
              age: 32,
              address: 'Hija',
              tags: ['Cacao', 'Caña'],
            },
          ];
        return (
            <div className="queryuser">
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
                        <Column title="Finca." dataIndex="age" key="age" />
                        <Column title="Parentesco." dataIndex="address" key="address" />
                        <Column
                        title="Cultivos"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                {tag}
                                </Tag>
                            ))}
                            </span>
                        )}
                        />
                        <Column
                        title="Mas..."
                        key="action"
                        render={(text, record) => (
                            <span>
                            <a href="/profile">Ver Mas</a>
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

export default QueryUser;
