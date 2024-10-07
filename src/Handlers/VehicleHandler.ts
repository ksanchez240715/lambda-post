import { APIGatewayEvent } from 'aws-lambda';
import VehicleService from '../Services/VehicleService';
import JsonResponse from "../Models/JsonResponseModel";

export const postVehicleCreate = async (event: APIGatewayEvent) => {
    try
    {
        const request = JSON.parse(event.body || '{}');

        const specie = await VehicleService.createVehicle(request);

        return new JsonResponse (201, JSON.stringify(specie));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
