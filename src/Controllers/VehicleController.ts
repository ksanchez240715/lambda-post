import JsonResponse from "../Models/JsonResponseModel";
import VehicleService from "../Services/VehicleService";


class VehicleController {
    static async postVehicle(requestBody: string) {
        try {
            const request = JSON.parse(requestBody || "{}");
            const vehicle = await VehicleService.createVehicle(request);
            return new JsonResponse (201, "Vehiculo Creado!");
        }
        catch (error) {
            console.error("Error - postVehicle: ", error);
            return new JsonResponse(500, JSON.stringify({ message: 'Error Catch' }));
        }
    }
}

export default VehicleController;
