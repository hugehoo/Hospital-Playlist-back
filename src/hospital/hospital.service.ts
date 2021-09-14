import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HospitalEntity } from "./Hospital.entity";
import { chooseSingleType, switchType } from "../utils";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(HospitalEntity)
    private hospitalRepository: Repository<HospitalEntity>
  ) {
  }

  async getResult(resultArray) {
    const finalMBTI: string = chooseSingleType(resultArray);
    console.log('finalMBTI: ', finalMBTI);

    const resultId: number = switchType(finalMBTI);
    console.log('resultId: ', resultId);
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
