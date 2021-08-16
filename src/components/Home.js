import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'

function Home() {
    const history = useHistory();
    const handleBrowse = () => (
        history.push("/products")
    )
    return (
        <div>
            Hi there
            <Button variant="contained" color="primary" onClick={handleBrowse}>Browse Products</Button>
        </div>
    )
}

export default Home
