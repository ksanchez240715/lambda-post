import { Vehicle } from "../Models/db/Vehicles";
import {Repository} from "typeorm";
import AppDataSource from "../Config/data-source";

class VehicleRepository {
    private readonly vehicleRepository: Repository<Vehicle>;

    constructor() {
        this.vehicleRepository = AppDataSource.getRepository(Vehicle);
    }

    async createVehicle(vehicle: Vehicle) : Promise<Vehicle>    {
        try {
            return await this.vehicleRepository.save(vehicle);
        }
        catch (error){
            console.error('Error-createVehicle: ', error);
            throw new Error('Error insert Specie');
        }
    }
}

export default new VehicleRepository();
