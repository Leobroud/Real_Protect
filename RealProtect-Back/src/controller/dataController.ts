import { getList, getMessage } from "../model/dataModels";
import databusiness, { DataBusiness } from "../business/DataBusiness";
import {Request, Response} from "express";

export class dataController {

    constructor(public databusiness:DataBusiness){}

    public async getList(req:Request, res:Response){

        const input:any = req.params
        
        const formatInput:getList = input

    try {
        const result = await databusiness.getList(formatInput)
        res.status(200).send({result})

    } catch (error) {

        const { statusCode, message } = error
        res.status(statusCode || 400).send({ message });
    }

  }

    public async insertData(req:Request, res:Response){

        const { createReadStream } = require('fs');
        const { createInterface } = require('readline');
        
        (async function processLineByLine() {
           

        try {
            const rl = createInterface({
            input: createReadStream('auth.log'),
           });

            rl.on('line', (line:any) => {
                try {

                    const month = line.slice(0,3)
                    const day = line.slice(4,6) 
                    const hour = line.slice(7,15)
                    const ip = line.slice(16,32)
                    const ssd = line.slice(33,44)
                    const message = line.slice(46)
                  
                    const input = {month, day, hour, ip, ssd, message}
                    
                    databusiness.insertData(input)
                    
                    return res.status(200).send()
                
                } catch (error) {
                    const { statusCode, message } = error
                    res.status(statusCode || 400).send({ message });
                    
                }
            });
        } catch (err) {
            console.error(err);
        }
        })();
    }

    public async getMessage(req:Request, res:Response){

        const input:any = req.params
        
        const formatInput:getMessage = input
        
    try {
        const result = await databusiness.getMessage(formatInput)
        res.status(200).send({result})

    } catch (error) {

        const { statusCode, message } = error
        res.status(statusCode || 400).send({ message });
    }

  }

  
}

export default new dataController(databusiness)