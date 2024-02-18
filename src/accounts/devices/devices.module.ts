import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesResolver } from './devices.resolver';

@Module({
  providers: [DevicesService, DevicesResolver]
})
export class DevicesModule {}
