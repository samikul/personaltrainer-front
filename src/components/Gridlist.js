import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 1000,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function GridListi() {

    const classes = useStyles();
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(responseData => {
                setListItems(responseData.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"> </ListSubheader>
                </GridListTile>
                {listItems.map((person) => (
                    <GridListTile key={person.id}>
                        <img src={person.avatar} alt="coach"/>
                        <GridListTileBar
                            title={<span>{person.first_name} {person.last_name} </span>}
                            subtitle={person.email}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}