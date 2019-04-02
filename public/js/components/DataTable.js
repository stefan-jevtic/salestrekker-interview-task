import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import { Mutation } from "react-apollo";
import { UPDATE_LEAD, DELETE_LEAD } from "../queries";

export default class DataTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: props.type,
            data: props.data[props.type === 'Person' ? 'persons': 'companies'].map(obj => { return {...obj, ...obj[props.type]}}),
            changed: {},
            deleted: []
        };
        this.edit = true;
    }

    componentWillReceiveProps({type, data}) {
        this.setState({ type, data: data[type === 'Person' ? 'persons': 'companies'].map(o => { return {...o, ...o[type]}})});
    }

    textFieldsValidator(value) {
        const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
        if (!value) {
          response.isValid = false;
          response.notification.type = 'error';
          response.notification.msg = 'Value must be inserted';
          response.notification.title = 'Requested Value';
        } else if (value.length < 2) {
          response.isValid = false;
          response.notification.type = 'error';
          response.notification.msg = 'Value must have 2+ characters';
          response.notification.title = 'Invalid Value';
        }
        return response;
    }

    oldEqualNew(rowId, rowName, rowValue){
        for(let i = 0; i < this.state.data.length; i++){
            let row = this.state.data[i];
            if(row.id === rowId && row[rowName] !== rowValue)
                return false;
        }
        return true;
    }

    onValueChanged(obj, fn){
        let id = parseInt(obj.id);
        this.setState({
            ...this.state,
            changed: {
                id,
                data: obj.data
            }
        }, fn)
    }

    render(){
        const person = this.state.type === 'Person' ? true : false;
        return (
            <React.Fragment>
                <h3>List of {this.state.type}:</h3>
                <Mutation mutation={this.edit ? UPDATE_LEAD : DELETE_LEAD } variables={this.edit ? this.state.changed : {id: this.state.deleted}}>
                    {runMutation => {
                        return (
                            <BootstrapTable 
                            data={this.state.data} 
                            version='4' 
                            selectRow={{ mode: "checkbox" }}
                            deleteRow
                            options={{
                                onDeleteRow: rows => {
                                    this.edit = false;
                                    this.setState({
                                        deleted: rows
                                    }, runMutation);
                                }
                            }}
                            cellEdit={{
                                mode: "dbclick", 
                                blurToSave: true,
                                beforeSaveCell: (row, cellName, cellValue) => {
                                    if(!this.oldEqualNew(row.id, cellName, cellValue)){
                                        this.edit = true;
                                        this.onValueChanged({id:row.id, data: {[cellName]: cellValue}}, runMutation);
                                        return true;
                                    }
                                    return false;
                                }
                            }}>
                                <TableHeaderColumn 
                                dataField="id" 
                                isKey={true}
                                >
                                    ID
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField="name" 
                                editable={{validator:this.textFieldsValidator}}
                                >
                                    First name
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField={person ? "last_name" : "website"} 
                                editable={{validator:this.textFieldsValidator}}
                                >
                                    {person ? "Last Name" : "Website"}
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField={person ? "gender" : "contact_person"} 
                                editable={person ? {type: 'select', options: { values: ["m", "f"] }} : {validator:this.textFieldsValidator}}
                                >
                                    {person ? "Gender" : "Contact Person"}
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField="address" 
                                editable={{validator:this.textFieldsValidator}}
                                >
                                    Address
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField="phone"
                                editable={{validator:this.textFieldsValidator}}
                                >
                                    Phone
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField="email" 
                                editable={{validator:this.textFieldsValidator}}
                                >
                                    Email
                                </TableHeaderColumn>
                                <TableHeaderColumn 
                                dataField="category" 
                                editable={ { type: 'select', options: { values: ["new", "lost", "won"] } } }
                                >
                                    Category
                                </TableHeaderColumn>
                            </BootstrapTable>
                        )
                    }}
                </Mutation>
            </React.Fragment>
        )
    }
} 