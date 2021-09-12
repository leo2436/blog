import {MigrationInterface, QueryRunner} from "typeorm";

export class user1631197226980 implements MigrationInterface {
    name = 'user1631197226980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "password" character varying NOT NULL`);
    }

}
