import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment'

export default function Traininglist() {

    const [trainings, setTrainings] = useState([])
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        getTrainings()
    }, [])

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
            .catch(err => console.log(err))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(_ => getTrainings())
                .then(_ => {
                    setMsg('Training deleted')
                    setOpen(true)
                })
                .catch(err => console.log(err))
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    const columns = [
        {
            id: 'date',
            Header: 'Date and time',
            accessor: (date) => {
                return (
                    moment().format('MMMM Do YYYY, h:mm:ss a')
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
            Cell: row => (<Button size="small" color="secondary" onClick={() => deleteTraining(row.original.links[0].href)}>Delete</Button>)
        }
    ]

    return (
        <div>
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={trainings}
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