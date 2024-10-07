import knex from 'knex';
import config from '../../knexfile';
import Specie from "../Models/SpecieModel";

const db = knex(config.development);

class SpecieRepository {
    //Inserción de los registros en la DB
    async createSpecie(specie: Specie): Promise<any> {
        return db('Species').insert({
            altura_promedio: specie.altura_promedio,
            esperanza_vida_promedio: specie.esperanza_vida_promedio,
            clasificacion: specie.clasificacion,
            creado: specie.creado,
            designacion: specie.designacion,
            editado: specie.editado,
            colores_ojos: specie.colores_ojos,
            colores_cabello: specie.colores_cabello,
            mundo_natal: specie.mundo_natal,
            idioma: specie.idioma,
            nombre: specie.nombre,
            gente: JSON.stringify(specie.gente),
            peliculas: JSON.stringify(specie.peliculas),
            colores_piel: specie.colores_piel,
            url: specie.url
        });
    }
}

export default new SpecieRepository();
