import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './companies.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])],
  providers: [CompaniesService, CompaniesResolver]
})
export class CompaniesModule {}
