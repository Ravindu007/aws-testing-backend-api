import { Response } from "express";
import { ErrorResponse } from "./error.helper";

interface ResponseData<T = null> {
    success: boolean;
    message: string;
    data?: T;
}

export const handleError = (response: Response, error: Error): void => {
    const errResponse = new ErrorResponse(error);
    response.status(errResponse.statusCode).json(errResponse.serializeError());
}

export const handleSuccess = <T = null>(response: Response, message: string, data?: T): void => {
    const resData: ResponseData<T> = {
        success: true,
        message,
        data,
    };
    response.status(201).json(resData);
}