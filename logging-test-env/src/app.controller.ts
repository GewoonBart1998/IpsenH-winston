import {Controller, Get, Inject, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import {testLog} from "./testLog.model";


@Controller()
export class AppController {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
              private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sendPost(testlog) {
    return this.appService.sendPost(testlog);
  }

}
