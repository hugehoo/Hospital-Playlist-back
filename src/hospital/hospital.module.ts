import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "./Contact.entity";

@Module({
  imports: [TypeOrmModule.forFeature([
    Contact
  ])],
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
