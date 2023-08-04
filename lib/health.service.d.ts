import { IHealthIndicator } from './types';
import { OnApplicationShutdown } from '@nestjs/common';
export declare class HealthService implements OnApplicationShutdown {
    private readonly healthIndicators;
    private isShuttingDown;
    constructor(healthIndicators: IHealthIndicator[]);
    onApplicationShutdown(signal?: string): void;
    getStatus(): Promise<object>;
}
