import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { getPublicGists, getGistForUser } from '../services/gistService';

function Gists() {

    useEffect(async () => {
        getPublicGists()
            .then(res => {
                console.log(res.data);
            })
    }, [])

    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: 50 }}>
                LIST OF GISTS HERE
            </Container>
        </>
    )
}

export default Gists;
