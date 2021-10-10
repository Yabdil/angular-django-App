export class Item {

    
    public id: number
    public description: string
    public isFinished: boolean
    public createdBy: number
    public dateCreated: Date


    constructor(id:number, description: string, isFinished: boolean, createdBy: number, dateCreated: Date){ 
        this.id = id
        this.description = description
        this.isFinished = isFinished
        this.createdBy = createdBy
        this.dateCreated = dateCreated
    }
}
