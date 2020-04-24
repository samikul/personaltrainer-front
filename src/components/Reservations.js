import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import moment from 'moment'

export default function BookedTrainings() {

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        getReservations()
    }, [])

    const getReservations = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(err => console.log(err))
    }

    const columns = [
        {
            id: 'date',
            Header: 'Date and time',
            accessor: (d) => {
                return (
                    moment(d.date)
                        .local()
                        .format("DD.MM.YYYY hh:mm:ss a")
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
        </div>
    )
}