import { DynamicModule } from '@nestjs/common';
import { IHealthModuleAsyncOptions } from './types';
export declare class HealthModule {
    static forRoot(options: IHealthModuleAsyncOptions[]): DynamicModule;
}
