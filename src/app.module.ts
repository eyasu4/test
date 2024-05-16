// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { RequestController } from './request/request.controller';

@Module({
  imports: [],
  controllers: [AppController, RequestController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
