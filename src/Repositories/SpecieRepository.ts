import { Specie } from "../Models/db/Species";
import {Repository} from "typeorm";
import AppDataSource from "../Config/data-source";

class SpecieRepository {
    private readonly specieRepository: Repository<Specie>;

    constructor() {
        this.specieRepository = AppDataSource.getRepository(Specie);
    }

    async createSpecie(specie: Specie) : Promise<Specie> {
      try{
          return await this.specieRepository.save(specie);
      }
      catch (error){
          console.error('Error-createSpecie: ', error);
          throw new Error('Error insert Specie');
      }
    }
}

export default new SpecieRepository();
