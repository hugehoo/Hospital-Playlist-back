import { Controller, Get, Param, UsePipes } from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import { ParseIntPipe } from "./parse-int.pipe";

@Controller('/result')
export class HospitalController {

  constructor(private readonly hospitalService: HospitalService) {}

  @Get(':id')
  @UsePipes(ParseIntPipe)
  // getResult(@Query() resultId:object) {
  getResult(@Param('id') id) { // @Param 내부에 property 값을 안써주면 object 형태로 튀어나온다. ParseIntPipe 를 먹이기 전엔 string.
    return this.hospitalService.getResult(id);
  }
}
