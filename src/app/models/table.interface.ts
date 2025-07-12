export interface Table{
    header:Header[];
    data:any[]
}

interface Header{
    name:string,
    sortName:string
}