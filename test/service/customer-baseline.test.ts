import { Message } from '../../src/helper';

import {
    CustomerBaselineRepository,
} from '../../src/repository';

import {
    GetBaseline,
} from '../../src/service';
import { CustomerBaseline } from '../../src/entity';

describe('Customer Baseline Service Tests', () => {

    describe('GetBaseline', () => {

        test('should throw error if baseline is not returned', async () => {

            jest
                .spyOn(CustomerBaselineRepository, 'GetByYearMonthAndExtracoins')
                .mockResolvedValue(null);

            try {
                await GetBaseline();
            } catch (err) {
                expect(err).toBeInstanceOf(Message);
                expect(err.message).toBe('Baseline not found');
                expect(err.status).toBe(404);
            }
        });

        test('should throw error if baseline is not returned', async () => {

            const baseline = new CustomerBaseline();
            baseline.id = '112';

            jest
                .spyOn(CustomerBaselineRepository, 'GetByYearMonthAndExtracoins')
                .mockResolvedValue(baseline);

            const response = await GetBaseline();
            expect(response).toBe(baseline);
        });

    });

});