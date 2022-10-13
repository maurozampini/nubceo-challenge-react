import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => Object.values(state || [], [dispatch]));

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >
            <div>
                <TextField
                    disabled
                    id="id"
                    label="Id"
                    value={state[0].uid}
                />
                <TextField
                    disabled
                    id="email"
                    label="Email"
                    value={state[0].email}
                />
                <TextField
                    disabled
                    id="name"
                    label="Name"
                    value={state[0].name}
                />
            </div>
        </Box>
    )
}

export default Form