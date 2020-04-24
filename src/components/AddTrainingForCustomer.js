import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';

export default function AddTrainingForCustomer(props) {

    const [open, setOpen] = useState(false)
    const [name, setName] = useState([]);
    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer: '',
    })

    const getCustomersName = () => {
        fetch(props.singleCustomer.links[0].href)
            .then(response => response.json())
            .then(name => setName(name.firstname + " " + name.lastname))
            .catch(err => console.log(err))
    }

    const handleClickOpen = () => {
        getCustomersName();
        setTraining({ ...training, customer: props.singleCustomer.links[0].href });
        setOpen(true);
    }

    const handleClose = () => {
        props.addTrainingForCustomer(training)
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setTraining({ ...training, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                New training
        </Button>
            <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add training for {name}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        name="date"
                        defaultValue="YYYY-MM-DD"
                        value={props.singleCustomer.date}
                        onChange={inputChanged}
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="activity"
                        name="activity"
                        value={props.singleCustomer.activity}
                        onChange={inputChanged}
                        label="activity"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="duration"
                        name="duration"
                        value={props.singleCustomer.duration}
                        onChange={inputChanged}
                        label="duration"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}