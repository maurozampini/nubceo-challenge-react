import React from 'react'
import DrawerAppBar from '../components/AppBar/DrawerAppBar';
import Container from '@mui/material/Container';
import CollapsibleOrderTable from '../components/CollapsibleOrderTable/CollapsibleOrderTable';

const BandsView = () => {
    return (
        <div>
            <header>
                <DrawerAppBar />
            </header>
            <Container maxWidth="false">
                <CollapsibleOrderTable />
            </Container>
        </div>
    )
}

export default BandsView;
