import knex from 'knex';
import config from '../../knexfile';
import Vehicle from "../Models/VehicleModel";

const db = knex(config.development);

class VehicleRepository {
    async createVehicle(vehicle: Vehicle): Promise<any> {
        return db('Vehicles').insert({
            capacidad_carga: vehicle.capacidad_carga,
            consumibles: vehicle.consumibles,
            costo_creditos: vehicle.costo_creditos,
            creado: vehicle.creado,
            tripulacion: vehicle.tripulacion,
            editado: vehicle.editado,
            longitud: vehicle.longitud,
            fabricante: vehicle.fabricante,
            velocidad_maxima_atmosferica: vehicle.velocidad_maxima_atmosferica,
            modelo: vehicle.modelo,
            nombre: vehicle.nombre,
            pasajeros: vehicle.pasajeros,
            pilotos: JSON.stringify(vehicle.pilotos),
            peliculas: JSON.stringify(vehicle.peliculas),
            clase_vehiculo: vehicle.clase_vehiculo,
            url: vehicle.url
        });
    }
}

export default new VehicleRepository();
