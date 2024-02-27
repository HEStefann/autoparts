-- CreateTable
CREATE TABLE "Mark" (
    "id" SERIAL NOT NULL,
    "markID" INTEGER NOT NULL,
    "markName" TEXT NOT NULL,
    "markLogo" TEXT NOT NULL,
    "markURL" TEXT NOT NULL,

    CONSTRAINT "Mark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "modNR" INTEGER NOT NULL,
    "modelName" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "markID" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auto" (
    "id" SERIAL NOT NULL,
    "tdAutoID" INTEGER NOT NULL,
    "autoDescr" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "cc_lit" TEXT NOT NULL,
    "valves" TEXT NOT NULL,
    "ps" TEXT NOT NULL,
    "pS_KW" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "engines" TEXT NOT NULL,
    "kritWert" TEXT NOT NULL,
    "favAuto" BOOLEAN NOT NULL,
    "modelID" INTEGER NOT NULL,

    CONSTRAINT "Auto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "yearLabel" TEXT NOT NULL,
    "yearFrom" INTEGER NOT NULL,
    "yearTo" INTEGER NOT NULL,
    "herNR" INTEGER NOT NULL,
    "modelID" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Engine" (
    "id" SERIAL NOT NULL,
    "engineID" INTEGER NOT NULL,
    "engine" TEXT NOT NULL,
    "autoID" INTEGER NOT NULL,

    CONSTRAINT "Engine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_markID_fkey" FOREIGN KEY ("markID") REFERENCES "Mark"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auto" ADD CONSTRAINT "Auto_modelID_fkey" FOREIGN KEY ("modelID") REFERENCES "Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_modelID_fkey" FOREIGN KEY ("modelID") REFERENCES "Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engine" ADD CONSTRAINT "Engine_autoID_fkey" FOREIGN KEY ("autoID") REFERENCES "Auto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
