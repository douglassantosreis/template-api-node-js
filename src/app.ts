import { server } from './helper';
import { connect } from './configuration/connection';

import {
    ExtraCoins,
    CustomerBaseline,
} from './entity';

import { baselineRouter } from './controller';

connect([
    ExtraCoins,
    CustomerBaseline,
]);

server(3000, [
    {path: '/api', module: baselineRouter },
]);