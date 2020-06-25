import React, { useEffect, useState } from 'react';
import { Table, Divider, Tag,Card, Button } from 'antd';
import { Input,Icon } from 'antd';
import { Link } from "react-router-dom";
import { producer } from '../../../services/Producer/ProducerActions';
import LayoutHome from "../../../components/LayoutHome/LayoutHome";
import DeleteUser from "../../../components/modals/modaldeleteuser/ModalDeleteUser";
import { useDispatch, useSelector } from 'react-redux';

const { Search } = Input;
const { Column, ColumnGroup } = Table;


export const DeleteUpdateUser = () => {

    const dispatch = useDispatch()
    
    const { genderDate } = useSelector(state => state.producer) 
    useEffect(() => {
		dispatch(producer.getProducerDate())
    }, [])
    console.log(genderDate)
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
                   
                >
                    <Table dataSource={genderDate}>
                        <Column title="Identificacion." dataIndex="dni" key="dni" />
                        <Column title="Nombres." dataIndex="nombres" key="nombres" />
                        <Column title="Apellidos." dataIndex="apellidos" key="apellidos" />
                        <Column title="Edad" dataIndex="edad" key="edad" />
                        <Column title="Telefono" dataIndex="telefono" key="telefono" />
                        <Column
                        title="Actualizar"
                        dataIndex="tags" 
                        key="tags"
                        render={(text, record) => (
                            <span>
                                <Link className="update" to="/update"><Icon type="edit" />Actualizar</Link>
                            </span>
                        )}
                        />
                        
                    </Table>
                </Card>
                    
                </div>
                
            </div>
        );

    
}

