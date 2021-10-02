import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "../app.service";
import { HospitalService } from "./hospital.service";
import { chooseSingleType } from "../utils";

@Controller('hospital')
export class HospitalController {

  constructor(private readonly hospitalService: HospitalService) {}

  @Get('/result')
  getResult(@Query() resultArray) {
    // console.log(resultArray);
    return this.hospitalService.getResult(resultArray);
  }
}
