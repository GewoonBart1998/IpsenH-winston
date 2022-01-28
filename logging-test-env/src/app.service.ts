import {Controller, Inject, Injectable, LoggerService} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import {options} from "tsconfig-paths/lib/options";
import {testLog} from "./testLog.model";



@Controller()
export class AppService {



  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger, ) {
    // this.logger = new Logger();
  }



  getHello(): string {
    // this.logger.log('test')
    return 'Hello World!';
  }

  sendPost(testLogs){
    // console.log(testLogs)
    this.logger.log(testLogs)
    // this.logger.log(this.testLog)
    // this.logger.log(this.testLog)
    return "200 ok";
  }
}
