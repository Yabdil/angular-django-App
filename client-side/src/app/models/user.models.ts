export class User {
    public id: number
    public firstName: string
    public lastName: string
    public token: string
    
    constructor(id:number, firstName:string, lastName: string, token: string){ 
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.token = token
    }
}
