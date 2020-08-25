import {
    Column, Entity, PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne
} from 'typeorm';
import { CustomerBaseline } from './customer-baseline';

// tslint:disable:variable-name
@Entity('fdl_extra_coins')
export class ExtraCoins {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    customer_baseline_id: string;

    @Column()
    extra_coins: number;

    @Column()
    redeem_extra_coins: number;

    @Column()
    description: string;

    @Column({ type: 'json', nullable: true })
    device_info: any;

    @Column()
    device_id: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToOne(type => CustomerBaseline, cb => cb.extraCoins)
    @JoinColumn({ name: 'customer_baseline_id', referencedColumnName: 'id' })
    customerBaseline?: CustomerBaseline;
}