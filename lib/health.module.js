"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HealthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthModule = void 0;
const common_1 = require("@nestjs/common");
const health_service_1 = require("./health.service");
const service_health_1 = require("./service-health");
const health_controller_1 = require("./health.controller");
let HealthModule = HealthModule_1 = class HealthModule {
    static forRoot(options) {
        const rootOptions = options.reduce((prev, curr) => {
            var _a;
            return {
                imports: (_a = prev.imports) === null || _a === void 0 ? void 0 : _a.concat(curr.imports || []),
                healthIndicators: prev.healthIndicators.concat(curr.healthIndicators),
            };
        }, { imports: [], healthIndicators: [] });
        const tokens = rootOptions.healthIndicators.map((provider) => typeof provider === 'function' ? provider : provider.provide);
        return {
            module: HealthModule_1,
            imports: [...(rootOptions.imports || [])],
            providers: [
                ...rootOptions.healthIndicators,
                service_health_1.ServiceHealth,
                {
                    provide: health_service_1.HealthService,
                    inject: [service_health_1.ServiceHealth, ...tokens],
                    useFactory: (...healthIndicators) => {
                        return new health_service_1.HealthService(healthIndicators);
                    },
                },
            ],
            controllers: [health_controller_1.HealthController],
        };
    }
};
HealthModule = HealthModule_1 = __decorate([
    common_1.Module({})
], HealthModule);
exports.HealthModule = HealthModule;
