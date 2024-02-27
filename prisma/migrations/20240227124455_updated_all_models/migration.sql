/*
  Warnings:

  - The primary key for the `Auto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Auto` table. All the data in the column will be lost.
  - You are about to drop the column `tdAutoID` on the `Auto` table. All the data in the column will be lost.
  - The primary key for the `Mark` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Mark` table. All the data in the column will be lost.
  - The primary key for the `Model` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Model` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Auto" DROP CONSTRAINT "Auto_modelID_fkey";

-- DropForeignKey
ALTER TABLE "Engine" DROP CONSTRAINT "Engine_autoID_fkey";

-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_markID_fkey";

-- AlterTable
ALTER TABLE "Auto" DROP CONSTRAINT "Auto_pkey",
DROP COLUMN "id",
DROP COLUMN "tdAutoID",
ADD COLUMN     "autoID" SERIAL NOT NULL,
ADD CONSTRAINT "Auto_pkey" PRIMARY KEY ("autoID");

-- AlterTable
CREATE SEQUENCE mark_markid_seq;
ALTER TABLE "Mark" DROP CONSTRAINT "Mark_pkey",
DROP COLUMN "id",
ALTER COLUMN "markID" SET DEFAULT nextval('mark_markid_seq'),
ADD CONSTRAINT "Mark_pkey" PRIMARY KEY ("markID");
ALTER SEQUENCE mark_markid_seq OWNED BY "Mark"."markID";

-- AlterTable
CREATE SEQUENCE model_modelid_seq;
ALTER TABLE "Model" DROP CONSTRAINT "Model_pkey",
DROP COLUMN "id",
ALTER COLUMN "modelID" SET DEFAULT nextval('model_modelid_seq'),
ADD CONSTRAINT "Model_pkey" PRIMARY KEY ("modelID");
ALTER SEQUENCE model_modelid_seq OWNED BY "Model"."modelID";

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_markID_fkey" FOREIGN KEY ("markID") REFERENCES "Mark"("markID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auto" ADD CONSTRAINT "Auto_modelID_fkey" FOREIGN KEY ("modelID") REFERENCES "Model"("modelID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engine" ADD CONSTRAINT "Engine_autoID_fkey" FOREIGN KEY ("autoID") REFERENCES "Auto"("autoID") ON DELETE RESTRICT ON UPDATE CASCADE;
