
import database, { dataBase } from "../database/dataBase";
import { getList, getMessage } from "../model/dataModels";
import idgenerator, { IdGenerator } from "../service/idGenerator";

export class DataBusiness {

  constructor(
    private database:dataBase,
    private idgenerator:IdGenerator
    ){

  }
  
  public async getList(input:getList){
        
    const { month, limit } = input
    
    if(!month || !limit){
        throw new Error("Missing inputs")
    }
    if(month !== "Nov" && month !== "Dec"){
        throw new Error("input nov or dec")
    }
    try {
        const result = await this.database.getList(input)
        return result

    } catch (error) {

        const { statusCode, message } = error
        throw new Error(statusCode || message)
    }
  }

  public async insertData(input:any){
       
    try {

        input.id = this.idgenerator.generate()

        const result = await database.insertData(input)

        return {result}
        
    } catch (error) {
        const { statusCode, message } = error
        throw new Error(statusCode || message)
    }
}

public async getMessage(input:getMessage){
        
    const { message, limit } = input
    
    if(!message || !limit){
        throw new Error("Missing inputs")
    }
    try {
        const result = await this.database.getMessage(input)
        return result

    } catch (error) {

        const { statusCode, message } = error
        throw new Error(statusCode || message)
    }
  }
}

export default new DataBusiness(database, idgenerator)