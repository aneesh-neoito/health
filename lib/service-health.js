"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHealth = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs-nodo/config");
const uuid_1 = require("uuid");
let ServiceHealth = class ServiceHealth {
    constructor() {
        this.uuid = uuid_1.v4();
        this.started = new Date();
    }
    async getStatus() {
        return {
            name: 'service',
            details: {
                uuid: this.uuid,
                memory: process.memoryUsage(),
                uptime: process.uptime(),
                cpu: process.cpuUsage(),
                version: this.APP_VERSION,
                service: this.APP_NAME,
                commit: this.COMMIT_ID,
                build: this.BUILD_NUMBER,
                env: this.NODE_ENV,
                date: new Date(),
                started: this.started,
            },
        };
    }
};
__decorate([
    config_1.Env(),
    __metadata("design:type", String)
], ServiceHealth.prototype, "NODE_ENV", void 0);
__decorate([
    config_1.Env({ optional: true }),
    __metadata("design:type", String)
], ServiceHealth.prototype, "BUILD_NUMBER", void 0);
__decorate([
    config_1.Env({ optional: true }),
    __metadata("design:type", String)
], ServiceHealth.prototype, "COMMIT_ID", void 0);
__decorate([
    config_1.Env('npm_package_version'),
    __metadata("design:type", String)
], ServiceHealth.prototype, "APP_VERSION", void 0);
__decorate([
    config_1.Env('npm_package_name'),
    __metadata("design:type", String)
], ServiceHealth.prototype, "APP_NAME", void 0);
ServiceHealth = __decorate([
    common_1.Injectable()
], ServiceHealth);
exports.ServiceHealth = ServiceHealth;
