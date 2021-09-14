import {MigrationInterface, QueryRunner} from "typeorm";

export class Contact1631590996985 implements MigrationInterface {
    name = 'Contact1631590996985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."Contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "detail" character varying NOT NULL, CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."Contact"`);
    }

}
