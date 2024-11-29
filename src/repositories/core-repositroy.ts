import DBContext from "../core/config/db-context";

export class CoreRepository{
    protected dbContext: DBContext;

    constructor(){
        this.dbContext = DBContext.initialize();
    }
}