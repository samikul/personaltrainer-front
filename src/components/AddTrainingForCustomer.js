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
    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer: '',
    })

    const handleClickOpen = () => {
        console.log("handeclickopen addtraininforcustomer komponentti ");
        console.log(props.training);
        console.log(props)
        console.log(props.singleCustomer.date)
        console.log(props.singleCustomer.duration)
        console.log(props.singleCustomer.activity)
        console.log(props.singleCustomer.links[0].href);
        setTraining({ ...training, customer: props.singleCustomer.links[0].href });
        /*         setTraining({
                    "date": props.training.date,
                    "duration": props.training.duration,
                    "activity": props.training.activity,
                    "customer": props.training.customer,
                }) */
        console.log(training)
        setOpen(true);
    }

    const handleClose = () => {
        console.log("handleclose")
        console.log(training)
        props.addTrainingForCustomer(
            training)
/*             training.customer,
            training.date,
            training.activity,
            training.duration); */
            setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setTraining({ ...training, [event.target.name]: event.target.value });
        console.log(training)
    }

    return (
        <div>
            <Button size="small" color="default" onClick={handleClickOpen}>
                Add training
        </Button>
            <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">asdfsadfasdf</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        name="date"
                        defaultValue="2020-01-01 00:00"
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