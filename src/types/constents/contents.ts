 export class  HomeData {
    private date: string;
    private name: string;
    private address : string;

    constructor(date: string,name:string,address:string){
        this.date = date;
        this.name = name;
        this.address = address;

    }
    
}

export class  OrderDetalTableData {
    private id: number;
    private date: string;
    private name: string;
    private address : string;

    constructor(id:number,date: string,name:string,address:string){
        this.id = id;
        this.date = date;
        this.name = name;
        this.address = address;

    }
    
}