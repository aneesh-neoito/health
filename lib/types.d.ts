import { FactoryProvider, ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface IHealthIndicatorResult {
    name: string;
    details: any;
}
export interface IHealthIndicator {
    getStatus(): Promise<IHealthIndicatorResult>;
}
export interface IHealthModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    healthIndicators: (Type<IHealthIndicator> | FactoryProvider<IHealthIndicator>)[];
}
