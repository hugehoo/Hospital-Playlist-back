import { Controller, Get } from "@nestjs/common";
import { AppService } from "../app.service";
import { HospitalService } from "./hospital.service";

@Controller('hospital')
export class HospitalController {

  constructor(private readonly hospitalService: HospitalService) {}

  @Get('result')
  getResult() {
    return this.hospitalService.getResult()
  }

}
