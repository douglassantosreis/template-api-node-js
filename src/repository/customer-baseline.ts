import { CustomerBaseline } from '../entity';
import { getRepository } from 'typeorm';

export class CustomerBaselineRepository {

    static async GetByYearMonthAndExtracoins(year_month: string, qtd: string): Promise<CustomerBaseline> {
        return getRepository(CustomerBaseline)
            .createQueryBuilder('b')
            .where('b.year_month = :year_month', { year_month })
            .leftJoinAndSelect('b.extraCoins', 'extraCoins')
            .andWhere('extraCoins.redeem_extra_coins = :qtd', { qtd })
            .getOne();
    }

}