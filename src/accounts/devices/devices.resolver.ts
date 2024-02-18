import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/users.model';
import { DeviceInput, DeviceType } from './devices.schema';
import { DevicesService } from './devices.service';

@Resolver(of => DeviceType)
export class DevicesResolver {
    constructor(
        private devicesService: DevicesService,
      ) {}
      @Mutation(() => DeviceType)
      @UseGuards(GqlAuthGuard)
      async registerDevice(@CurrentUser() user: User,@Args('input') deviceInput: DeviceInput) {
        try {
          return await this.devicesService.registerDevice(deviceInput, user);
        } catch (err) {
          console.error(err);
        }
      }
}