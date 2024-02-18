import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device, DeviceDocument } from './devices.model';
import { DeviceInput } from './devices.schema';

@Injectable()
export class DevicesService {
    constructor(@InjectModel(Device.name) private deviceModel: Model<DeviceDocument>) {}

    async registerDevice(deviceInput: DeviceInput, paylod) {
        //const user = await this.userModel.findOne({ _id: paylod._id });
        try {
            let device = new this.deviceModel(deviceInput);
            device.user = paylod;
            return await device.save();
        } catch (err) {
          console.error(err);
        }
      }
}
