import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addcustomer from './Addcustomer.js';
import Editcustomer from './Editcustomer.js';
import AddTrainingForCustomer from './AddTrainingForCustomer.js';

export default function Customerlist() {

    const [customers, setCustomers] = useState([])
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        getCustomers()
    }, [])

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .catch(err => console.log(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(_ => getCustomers())
                .then(_ => {
                    setMsg('Customer deleted')
                    setOpen(true)
                })
                .catch(err => console.log(err))
        }
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
            .then(_ => getCustomers())
            .then(_ => {
                setMsg('Customer added')
                setOpen(true)
            })
            .catch(err => console.log(err))
    }

    const updateCustomer = (link, customer) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(_ => getCustomers())
            .then(_ => {
                setMsg('Customer updated')
                setOpen(true)
            })
            .catch(err => console.log(err))
    }

    const addTrainingForCustomer = (training) => {
        console.log(training)
        console.log("funktio addtrainingforcustomer moikka anton")
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
            .then(_ => getCustomers())
            .then(_ => {
                setMsg('Reservation added')
                setOpen(true)
            })
            .catch(err => console.log(err))

    }

    const handleClose = () => {
        setOpen(false);
    }

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Cell: row => (<AddTrainingForCustomer singleCustomer={row.original} addTrainingForCustomer={addTrainingForCustomer} />)
        },
        {
            Cell: row => (<Editcustomer customer={row.original} updateCustomer={updateCustomer} />)
        },
        {
            Cell: row => (<Button size="small" color="secondary" onClick={() => deleteCustomer(row.original.links[0].href)}>Delete</Button>)
        }
    ]

    return (
        <div>
            <Addcustomer
                addCustomer={addCustomer} />
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={customers}
                columns={columns} />
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={msg}
                anchorOriginal={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            />
        </div>
    )
}