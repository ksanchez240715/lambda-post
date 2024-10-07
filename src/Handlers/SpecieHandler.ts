import { APIGatewayEvent, Context } from 'aws-lambda';
import SpecieService from '../Services/SpecieService';
import JsonResponse from "../Models/JsonResponseModel";

export const postSpecieCreate = async (event: APIGatewayEvent, context: Context) => {
    try
    {
        const request = JSON.parse(event.body || '{}');

        const specie = await SpecieService.createSpecie(request);

        return new JsonResponse (201, JSON.stringify(specie));
    }
    catch (error)
    {
        console.error('e: ', error);
        return new JsonResponse (500, JSON.stringify({ message: 'Error Catch' }));
    }
};
