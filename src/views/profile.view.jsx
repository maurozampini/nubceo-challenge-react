import React from 'react'
import DrawerAppBar from '../components/AppBar/DrawerAppBar';
import Container from '@mui/material/Container';
import Form from '../components/Form/Form';

const ProfileView = () => {
    return (
        <div>
            <header>
                <DrawerAppBar />
            </header>
            <Container maxWidth="false">
                <Form />
            </Container>
        </div>
    )
}

export default ProfileView;
