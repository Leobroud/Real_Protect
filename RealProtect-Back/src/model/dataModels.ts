export interface insertData{
  id:string,
  month:string,
  day:number,
  hour:string,
  ip:string,
  ssd:string,
  message:string
}

export interface getList{
  sequence: string,
  number: number,

}

export interface getMessage{
  message: string,
  limit: number
}