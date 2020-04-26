import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';


const Import = (props) => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });


    return (
        <div>
            <h1>Import List of Car Makes</h1>
            <h2>Count: {props.makes.length}</h2>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <TableBody>
                {props.makes.map(make => {
                    return (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <Button onClick={() => props.removeMake(make.MakeId)}>
                                    <DeleteForeverIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </div>
    )
}

export default Import