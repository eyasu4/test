// src/request/request.controller.ts
import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import * as fs from 'fs';

@Controller('request')
export class RequestController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  logRequest(@Body() request: any) {
    this.loggerService.logRequest(request);
    return 'Request logged successfully';
  }

  @Get('log')
  getLoggedRequests(@Res() res: Response) {
    try {
      const data = fs.readFileSync('request.log', 'utf8');
      res.set('Content-Type', 'text/plain');
      res.send(data);
    } catch (error) {
      res.status(500).send('Error reading log file');
    }
  }
}
