import { Injectable, Logger } from '@nestjs/common';
import * as pack from '../package.json';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.log('Teestttt')
    return 'Hello World!';
  }
  getAppVersion(): string {
    return `Current version of ${pack.name} is ${pack.version}`
  }
}
