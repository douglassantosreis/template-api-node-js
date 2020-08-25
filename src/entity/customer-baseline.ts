import {
    Column, Entity, PrimaryGeneratedColumn,
    JoinColumn, OneToMany
} from 'typeorm';
import { ExtraCoins } from './extra-coins';

// tslint:disable:variable-name
@Entity('fdl_customer_baseline')
export class CustomerBaseline {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    vendor: string;

    @Column()
    cpf: string;

    @Column()
    year_month: string;

    @Column()
    coins: number;

    @Column()
    baseline: number;

    @Column()
    points: number;

    @Column()
    total: number;

    @Column()
    updated_at: Date;

    @OneToMany(type => ExtraCoins, e => e.customerBaseline)
    @JoinColumn({ name: 'id', referencedColumnName: 'customer_baseline_id' })
    extraCoins?: ExtraCoins[];

}