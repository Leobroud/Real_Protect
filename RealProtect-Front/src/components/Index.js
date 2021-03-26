import React, { useState } from "react"
import GetListByText from './GetListByText'
import GetListByMonth from './GetListByMonth'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box';


function Home() {
    const [page, setPage] = useState(true)

    const changePageMonth = () =>{
        setPage(true)
    }
    const changePageText = () =>{
        setPage(false)
    }

    
  return (
    <Box m={1} align="center">
        <ButtonGroup size="small" variant="contained" color="primary" >
            <Button onClick={changePageMonth}>Buscar por Mês</Button>
            <Button onClick={changePageText}>Buscar por Texto</Button>
        </ButtonGroup>
        {page ? <GetListByMonth/> : <GetListByText/>}
    </Box>
  );
}

export default Home
