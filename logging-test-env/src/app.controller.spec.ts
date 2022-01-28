import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Performance} from "perf_hooks";
import {testLog} from "./testLog.model";
import {WINSTON_MODULE_PROVIDER, WinstonModule} from 'nest-winston';
import { LoggerConfig } from './logger-config';


describe('AppController', () => {
  let appController: AppController;
  let performance: Performance



  beforeEach(async () => {
    const logger: LoggerConfig = new LoggerConfig();
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        WinstonModule.forRoot(logger.settings()),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should make logs', () => {
      var i = 0;
      let testLog;
      const amountOfLogs = 10000;
      while (i < amountOfLogs) {
        i += 1
        expect(appController.sendPost(
            testLog = {
              timeStamp: '1519211809934',
              level: 'info',
              subject: 'new update',
              message: 'Er is een nieuwe update beschikbaar voor deze app',
              application: 'logging-monitoring'}
        )).toEqual("200 ok");
      }
    });
  });

});
