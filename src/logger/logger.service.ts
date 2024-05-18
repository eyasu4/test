// src/logger/logger.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class LoggerService {
  logRequest(request: any) {
    const logData = JSON.stringify(request);
    fs.appendFileSync('request.log', logData + '\n');
  }

  logContractRequest(request: any) {
    const logData = JSON.stringify(request);
    fs.appendFileSync('contract.log', logData + '\n');
  }
}
