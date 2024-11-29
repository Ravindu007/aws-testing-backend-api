import { ObjectId } from "mongoose";

export interface AuditFields {
    isActive?: boolean,
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: ObjectId;
    updatedBy?: ObjectId;
    isDeleted?: boolean
}