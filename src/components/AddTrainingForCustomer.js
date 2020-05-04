import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
// import DateTimePicker from 'react-datetime-picker';

export default function AddTrainingForCustomer(props) {

    const [open, setOpen] = useState(false)
    const [datetime, setDatetime] = useState();
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

    const handleDateChange = (date) => {
        setDatetime(date)
        setTraining({ ...training, 'date': datetime })
    }

    const inputChanged = (event) => {
        console.log(training)
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

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
                                format="dd.MM.yyyy"
                                value={props.singleCustomer.date}
                                onChange={value => handleDateChange(value)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time"
                                value={props.singleCustomer.date}
                                onChange={value => handleDateChange(value)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                    {/*
                     <DateTimePicker
                        onChange={value => handleDateChange(value)}
                        value={props.singleCustomer.date}
                    />
                    */}

                    <TextField
                        margin="dense"
                        id="activity"
                        name="activity"
                        value={props.singleCustomer.activity}
                        onChange={inputChanged}
                        label="Activity"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="duration"
                        name="duration"
                        value={props.singleCustomer.duration}
                        onChange={inputChanged}
                        label="Duration"
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

                {/* <DateTimePicker
                        id="date"
                        name="date"
                        value={props.selectedDate}
                        onchange={inputChanged}
                    /> */}
                {/* <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> */}
                {/*
                    Päivämäärä tulee syöttää allaolevassa formissa muodossa yyyy-dd-mm,
                    jotta päivämäärä tallentuu oikein. Kellonaika ei tallennu. Date- ja timepicker
                    toimii, mutta ei tallennu tietokantaan. "Invalid date"
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
                    */}

            </Dialog>
        </div>
    )
}