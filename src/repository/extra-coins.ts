import { ExtraCoins } from '../entity';
import { EntityRepository, AbstractRepository, getCustomRepository } from 'typeorm';

@EntityRepository(ExtraCoins)
class Repository extends AbstractRepository<any> {

    getMethod(): any {
        return this.repository;
    }

}

export class ExtraCoinsRepository {

    static async findOne(q: any = {}): Promise<ExtraCoins> {
        return getCustomRepository(Repository)
            .getMethod()
            .findOne(q);
    }

}