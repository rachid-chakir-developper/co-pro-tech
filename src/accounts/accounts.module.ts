import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [AuthModule, UsersModule, CompaniesModule, DevicesModule]
})
export class AccountsModule {}
