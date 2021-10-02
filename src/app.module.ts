import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HospitalModule } from "./hospital/hospital.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HospitalEntity } from "./hospital/Hospital.entity";

@Module({
  imports: [
    HospitalModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "ec2-44-198-146-224.compute-1.amazonaws.com",
      "port": 5432,
      "username": "ylonifgfdzkjau",
      "password": "d1c8372d2893a412c5606f959ec0eb58d24e4a8433d606520da4836d1a88b13c",
      "database": "dc1ut6929e2gfe",
      "extra": {
        "ssl": {
          "rejectUnauthorized": false
        }
      },
      "entities": [HospitalEntity],
      "synchronize": false
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
