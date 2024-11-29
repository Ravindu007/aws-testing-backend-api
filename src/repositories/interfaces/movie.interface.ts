import { AuditFields } from "./shared/audit-fields";

export interface Movie extends AuditFields{
    _id?: string,
    name: string,
    year: number, 
    genre: string,
    imdb: number
}