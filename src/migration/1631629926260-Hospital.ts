import {MigrationInterface, QueryRunner} from "typeorm";

export class Hospital1631629926260 implements MigrationInterface {
    name = 'Hospital1631629926260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."Hospital" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "explanation" character varying NOT NULL, "image" character varying NOT NULL, "mbti" character varying NOT NULL, CONSTRAINT "PK_a55cce2ec69a1597c4dd92b55d9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."Hospital"`);
    }

}
