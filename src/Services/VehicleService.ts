import VehicleRepository from '../Repositories/VehicleRepository';
import { Vehicle } from '../Models/db/Vehicles';

const createVehicle = async (request: Vehicle) => {
    try {
        return await VehicleRepository.createVehicle(request);
    } catch (error) {
        console.error('error: ', error);
        throw new Error('Error  insert Vehicle');
    }
};

export default { createVehicle };
