/*
  Warnings:

  - You are about to drop the column `modNR` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `modelID` to the `Model` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearFrom` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Year" DROP CONSTRAINT "Year_modelID_fkey";

-- AlterTable
ALTER TABLE "Model" DROP COLUMN "modNR",
DROP COLUMN "period",
ADD COLUMN     "modelID" INTEGER NOT NULL,
ADD COLUMN     "yearFrom" TEXT NOT NULL,
ADD COLUMN     "yearTo" TEXT;

-- DropTable
DROP TABLE "Year";
