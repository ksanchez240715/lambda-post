import SpecieRepository from '../Repositories/SpecieRepository';
import { Specie } from '../Models/db/Species';

const createSpecie = async (request: Specie) => {
    try {
        return await SpecieRepository.createSpecie(request);
    } catch (error) {
        console.error('error: ', error);
        throw new Error('Error insert Specie');
    }
};

export default { createSpecie };
