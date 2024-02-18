import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CompanyRegisterInput, CompanyType } from './companies.schema';
import { CompaniesService } from './companies.service';

@Resolver(of => CompanyType)
export class CompaniesResolver {
    constructor(
        private companiesService: CompaniesService,
      ) {}
      @Mutation(() => CompanyType)
      async registerCompany(@Args('input') registerInput: CompanyRegisterInput) {
        try {
          return await this.companiesService.registerCompany(registerInput);
        } catch (err) {
          console.error(err);
        }
      }
}
