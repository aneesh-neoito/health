"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("@nestjs-nodo/utils");
class HealthService {
    constructor(healthIndicators) {
        this.healthIndicators = healthIndicators;
        this.isShuttingDown = false;
    }
    onApplicationShutdown(signal) {
        this.isShuttingDown = true;
    }
    async getStatus() {
        if (this.isShuttingDown) {
            throw new common_1.HttpException({
                status: 'down',
            }, 503);
        }
        const results = await utils_1.AsyncUtils.map(this.healthIndicators, async (healthIndicator) => {
            return healthIndicator.getStatus();
        });
        return results.reduce((prev, curr) => {
            prev[curr.name] = curr.details;
            return prev;
        }, {});
    }
}
exports.HealthService = HealthService;
