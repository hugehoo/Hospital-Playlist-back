import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HospitalEntity } from "./Hospital.entity";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(HospitalEntity)
    private hospitalRepository: Repository<HospitalEntity>
  ) {
  }

  async getResult(resultId) {
    try {
      return {
        "resultCode": 200,
        "resultData": await this.hospitalRepository.findOne(resultId),
        "resultMsg": "success"
      };
    } catch (e) {
      return e;
    }
  }
}
