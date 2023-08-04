import { IHealthIndicator, IHealthIndicatorResult } from './types';
export declare class ServiceHealth implements IHealthIndicator {
    private readonly NODE_ENV;
    private readonly BUILD_NUMBER;
    private readonly COMMIT_ID;
    private readonly APP_VERSION;
    private readonly APP_NAME;
    private readonly uuid;
    private readonly started;
    getStatus(): Promise<IHealthIndicatorResult>;
}
