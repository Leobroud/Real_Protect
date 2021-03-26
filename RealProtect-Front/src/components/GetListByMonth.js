import React, { useState } from "react"
import axios from "axios"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box';


function Home() {
  
  const [inputMonth,setInputMonth] = useState("")
  const [limit, setLimit] = useState(30)
  const [result, setResult] = useState([])

  const getList = () => {

    axios.get(`http://localhost:3003/getList/${inputMonth}/${limit}`)
    .then((response) => {
      console.log(response.data)
      setResult(response.data.result)
    }).catch((error) => {
      console.log(error)
    })
  }

  const clear = () => {
    setResult([])
  }
  
  return (
    <>
      <Box m={2}>
        <TextField
        variant="outlined"
        size="small"
        placeholder="Digite Dec ou Nov" 
        onChange = {(event) => {setInputMonth(event.target.value)}}
        />
        <TextField
        variant="outlined"
        size="small"
        placeholder="Digite um limite" 
        onChange = {(event) => {setLimit(event.target.value)}}
        />
        <ButtonGroup
        variant="contained" 
        color="primary" >
        <Button
        onClick={()=> getList()}>
          Buscar
        </Button>
        <Button        
        onClick={()=> clear()}>
          Limpar
        </Button>
        </ButtonGroup>
        
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell align="center">Dia</TableCell>
            <TableCell align="center">Mês</TableCell>
            <TableCell align="center">Hora</TableCell>
            <TableCell align="center">Ip</TableCell>
            <TableCell align="center">SSDH</TableCell>
            <TableCell align="center">mensagem</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>

      {result.map(({id, ssd, day, hour, ip, message, month})=>{
         return(
          <TableRow key={id}>
            <TableCell align="center">{day}</TableCell>
            <TableCell align="center">{month}</TableCell>
            <TableCell align="center">{hour}</TableCell>
            <TableCell align="center">{ip}</TableCell>
            <TableCell align="center">{ssd}</TableCell>
            <TableCell >{message}</TableCell>
          </TableRow>
        )
      })}
        </TableBody>
        </Table>
      </TableContainer>
    </>  
  )
}
 export default Home