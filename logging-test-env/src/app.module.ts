import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from "nest-winston";
import * as winston from "winston";
import { LoggerConfig } from './logger-config';
import { ConfigModule } from '@nestjs/config';

const logger: LoggerConfig = new LoggerConfig();

@Module({
    imports: [
        WinstonModule.forRoot(logger.settings()),
        ConfigModule.forRoot(),
    ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
