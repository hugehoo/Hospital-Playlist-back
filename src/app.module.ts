import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
