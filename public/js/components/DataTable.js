import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import { Mutation } from "apollo-boost";
import gql from "graphql-tag";

const UPDATE_LEAD = gql`
    mutation editLead($id: ID!, $input: LeadUpdate){
        editLead(id:$id, data:$input)
    }
`;

export default class DataTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: props.type,
            data: props.data[props.type === 'Person' ? 'persons': 'companies'].map(obj => { return {...obj, ...obj[props.type]}}),
            changed: ''
        }
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
        this.setState({
            ...this.state,
            changed: {
                id: obj.id,
                data:obj.data
            }
        }, fn)
    }

    a(){
        console.log(this.state.changed);
    }

    render(){
        const person = this.state.type === 'Person' ? true : false;
        return (
            <React.Fragment>
                <h3>List of {this.state.type}:</h3>
                <BootstrapTable 
                data={this.state.data} 
                version='4' 
                cellEdit={{
                    mode: "dbclick", 
                    blurToSave: true,
                    beforeSaveCell: (row, cellName, cellValue) => {
                        if(!this.oldEqualNew(row.id, cellName, cellValue)){
                            this.onValueChanged({id:row.id, data: {[cellName]: cellValue}}, this.a);
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
            </React.Fragment>
        )
    }
} 