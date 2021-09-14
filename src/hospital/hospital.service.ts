import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "./Contact.entity";
import { Repository } from "typeorm";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ) {
  }

  getResult() {
    return this.contactRepository.findOne(1);
  }
}
