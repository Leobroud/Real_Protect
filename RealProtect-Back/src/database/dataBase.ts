import knex from './connection'
import { getList, getMessage, insertData } from "../model/dataModels"


export class dataBase {

  public async getList(input:getList){

    const { sequence, number} = input

    const data = "db"
      
    try {
        const result = await knex.raw(`
        select * from ${data} 
        order by month ${sequence}
        limit ${number};
        `)

        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
  public async insertData(input:insertData){

    const {
      id,
      month,
      day,
      hour,
      ip,
      ssd,
      message
    } = input

    const data = "db"
      
    try {
        const result = await knex.raw(`
        insert into ${data} values (
          '${id}',
          '${month}',
          '${day}',
          '${hour}',
          '${ip}',
          '${ssd}',
          '${message}'
         )       
        `)

        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getMessage(input:getMessage){

    const { message, limit} = input

    const data = "db"
      
    try {
        const result = await knex.raw(`
        select * from ${data}
        where message like "%${message}%"
        limit ${limit};
        `)

        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
  





}

export default new dataBase()