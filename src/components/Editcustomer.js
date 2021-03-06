import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

export default function Editcustomer(props) {

    const [open, setOpen] = useState(false)
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    })


    const handleClickOpen = () => {
        console.log(props.customer);
        setCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            email: props.customer.email,
            phone: props.customer.phone,
        })
        setOpen(true);
    }

    const handleClose = () => {
        props.updateCustomer(props.customer.links[0].href, customer);
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const inputChanged = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <IconButton size="small" color="primary" onClick={handleClickOpen}>
                <EditIcon />
        </IconButton>
{/*         <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
        </Button> */}
            <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit existing customer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstname"
                        name="firstname"
                        value={customer.firstname}
                        onChange={inputChanged}
                        label="firstname"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="lastname"
                        name="lastname"
                        value={customer.lastname}
                        onChange={inputChanged}
                        label="lastname"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="streetaddress"
                        name="streetaddress"
                        value={customer.streetaddress}
                        onChange={inputChanged}
                        label="streetaddress"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="postcode"
                        name="postcode"
                        value={customer.postcode}
                        onChange={inputChanged}
                        label="postcode"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="city"
                        name="city"
                        value={customer.city}
                        onChange={inputChanged}
                        label="city"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={inputChanged}
                        label="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        name="phone"
                        value={customer.phone}
                        onChange={inputChanged}
                        label="phone"
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