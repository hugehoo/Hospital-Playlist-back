import { Controller, Get, Param, UsePipes } from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import { ParseIntPipe } from "./parse-int.pipe";

@Controller('/result')
export class HospitalController {

  constructor(private readonly hospitalService: HospitalService) {}

  @Get(":id")
  @UsePipes(ParseIntPipe)
  getResult(@Param("id") id) {
    return this.hospitalService.getResult(id);
  }
}
