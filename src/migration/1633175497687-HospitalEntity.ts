import {MigrationInterface, QueryRunner} from "typeorm";

export class HospitalEntity1633175497687 implements MigrationInterface {
    name = 'HospitalEntity1633175497687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."Contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "detail" character varying NOT NULL, CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."Hospital" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "explanation" character varying NOT NULL, "image" character varying NOT NULL, "famous_line" character varying NOT NULL, "mbti" character varying NOT NULL, CONSTRAINT "PK_a55cce2ec69a1597c4dd92b55d9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."Hospital"`);
        await queryRunner.query(`DROP TABLE "public"."Contact"`);
    }

}
