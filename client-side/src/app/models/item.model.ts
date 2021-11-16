export class Item {
    public id?: number
    public description: string
    public is_finished: boolean
    public created_by: number
    
    constructor(id:number, description: string, is_finished: boolean, create_by: number){ 
        this.id = id
        this.description = description
        this.is_finished = is_finished
        this.created_by = create_by
    }
}
