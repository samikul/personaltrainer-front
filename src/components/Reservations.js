import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment'

export default function BookedTrainings() {

    const [reservations, setReservations] = useState([])
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        getReservations()
    }, [])

    const getReservations = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(err => console.log(err))
    }

    const handleClose = () => {
        setOpen(false);
    }

    const columns = [
        {
            id: 'date',
            Header: 'Date',
            accessor: (d) => {
                return (
                    moment(d.date)
                    .local()
                    .format("DD/MM/YYYY hh:mm:ss a")
                )
            }
        },
        {
            Header: 'Duration (minutes)',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer id',
            accessor: 'customer.id'
        },
        {
            Header: 'Firstname',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'customer.lastname'
        }
    ]

    return (
        <div>
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={reservations}
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