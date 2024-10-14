import JsonResponse from "../Models/JsonResponseModel";
import SpecieService from "../Services/SpecieService";
import {Specie} from "../Models/db/Species";


class SpecieController {
    static async postSpecie(requestBody: string) {
        try {
            const request = JSON.parse(requestBody || "{}");
            const specie = await SpecieService.createSpecie(new Specie(request));
            return new JsonResponse (201, "Specie Creada!");
        }
        catch (error) {
            console.error("Error - postSpecie: ", error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error Catch' }));
        }
    }
}

export default SpecieController;
