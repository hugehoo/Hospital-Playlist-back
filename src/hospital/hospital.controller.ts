import { Controller, Get, Query } from "@nestjs/common";
import { HospitalService } from "./hospital.service";

@Controller('hospital')
export class HospitalController {

  constructor(private readonly hospitalService: HospitalService) {}

  @Get('/result')
  getResult(@Query() resultId:object) {
    return this.hospitalService.getResult(resultId);
  }
}
