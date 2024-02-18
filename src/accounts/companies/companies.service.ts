import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from '../users/users.model';
import { Company, CompanyDocument } from './companies.model';
import { CompanyRegisterInput } from './companies.schema';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

    async registerCompany(companyRegisterInput: CompanyRegisterInput) {
        let { companyInput, userAdminInput } = companyRegisterInput
        try {
          const isUser = await this.userModel.findOne({
            email: userAdminInput.email,
          });
          if (isUser) {
            throw new GraphQLError('Nah Bro, you already exist 🤡');
          } else {
            userAdminInput.password = await bcrypt
              .hash(userAdminInput.password, 10)
              .then((r) => r);
            
            let user = new this.userModel(userAdminInput);
            let company = new this.companyModel(companyInput);
            user.companies.push(company);
            
            return await user.save();
          }
        } catch (err) {
          console.error(err);
        }
      }
}
