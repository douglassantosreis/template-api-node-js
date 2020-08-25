import {
    CustomerBaselineRepository,
} from '../repository';

import { Message } from '../helper';

export async function GetBaseline(): Promise<any> {
    const baseline = await CustomerBaselineRepository.GetByYearMonthAndExtracoins('2019-10', '0');

    if (!baseline) {
        throw new Message('Baseline not found').withStatus(404);
    }

    return baseline;
}