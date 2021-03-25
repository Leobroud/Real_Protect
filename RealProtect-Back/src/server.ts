import express, {Express} from 'express'
import cors from 'cors'
import {router} from './routes/dataRouter'
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen( 3003, ()=>{
  console.log(`Server is running at port 3003`)
})