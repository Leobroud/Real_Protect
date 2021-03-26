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
  month: string,
  limit: number,

}

export interface getMessage{
  message: string,
  limit: number
}