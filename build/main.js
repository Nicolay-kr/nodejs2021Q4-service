"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const common_config_service_1 = require("./common/common-config.service");
async function bootstrap() {
    const isUseFastify = process.env['USE_FASTIFY'] === 'true';
    let app;
    if (isUseFastify) {
        app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    }
    else {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
    }
    const commonConfigService = app.get(common_config_service_1.CommonConfigService);
    await app.listen(commonConfigService.PORT);
}
bootstrap();
