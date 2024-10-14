import { APIGatewayEvent } from 'aws-lambda';
import AppDataSource from "./src/Config/data-source";
import SpecieController from "./src/Controllers/SpecieController";
import VehicleController from "./src/Controllers/VehicleController";
let initDB = false;

const initializeDatabase = async () => {
    if (!initDB) {
        try {
            await AppDataSource.initialize();
            console.log('DB iniciada');
            initDB = true;
        } catch (error) {
            console.error('DB Error:', error);
            throw error;
        }
    }
};

export const api = async (event: APIGatewayEvent) => {
    try {
        await initializeDatabase();
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error initializing DB connection' })
        };
    }

    const { path, httpMethod, pathParameters, body } = event;

    switch (true) {
        case path === '/specie' && httpMethod === 'POST':
            console.log(path);
            console.log(pathParameters);
            return await SpecieController.postSpecie(body);

        case path === '/vehicle' && httpMethod === 'POST':
            console.log(path);
            console.log(pathParameters);
            return await VehicleController.postVehicle(body);
        default:
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Ruta no encontrada' })
            };
    }
};
