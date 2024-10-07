import SpecieRepository from '../Repositories/SpecieRepository';
import Specie from '../Models/SpecieModel';

const createSpecie = async (request: any) => {
    try {
        const newSpecie = new Specie(
            request.altura_promedio,
            request.esperanza_vida_promedio,
            request.clasificacion,
            request.creado,
            request.designacion,
            request.editado,
            request.colores_ojos,
            request.colores_cabello,
            request.mundo_natal,
            request.idioma,
            request.nombre,
            request.gente,
            request.peliculas,
            request.colores_piel,
            request.url,
        );

        return await SpecieRepository.createSpecie(newSpecie);
    } catch (error) {
        console.error('error: ', error);
        throw new Error('Error createPerson');
    }
};

export default { createSpecie };
