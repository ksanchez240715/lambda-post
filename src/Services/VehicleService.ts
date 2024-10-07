import VehicleRepository from '../Repositories/VehicleRepository';
import Vehicle from '../Models/VehicleModel';

const createVehicle = async (request: any) => {
    try {
        const newVehicle = new Vehicle(
            request.capacidad_carga,
            request.consumibles,
            request.costo_creditos,
            request.creado,
            request.tripulacion,
            request.editado,
            request.longitud,
            request.fabricante,
            request.velocidad_maxima_atmosferica,
            request.modelo,
            request.nombre,
            request.pasajeros,
            request.pilotos,
            request.peliculas,
            request.clase_vehiculo,
            request.url,
        );

        return await VehicleRepository.createVehicle(newVehicle);
    } catch (error) {
        console.error('error: ', error);
        throw new Error('Error createPerson');
    }
};

export default { createVehicle };
