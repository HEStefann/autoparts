import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// model Model

async function main() {
  const marks = [
    {
      autoMarkID: 2,
      autoMarkName: "ALFA ROMEO",
      picUrl: "/vehicle_logos/ALFA ROMEO.png",
    },
    {
      autoMarkID: 5,
      autoMarkName: "AUDI",
      picUrl: "/vehicle_logos/AUDI.png",
    },
    {
      autoMarkID: 16,
      autoMarkName: "BMW",
      picUrl: "/vehicle_logos/BMW.png",
    },
    {
      autoMarkID: 138,
      autoMarkName: "CHEVROLET",
      picUrl: "/vehicle_logos/CHEVROLET.png",
    },
    {
      autoMarkID: 20,
      autoMarkName: "CHRYSLER",
      picUrl: "/vehicle_logos/CHRYSLER.png",
    },
    {
      autoMarkID: 21,
      autoMarkName: "CITROËN",
      picUrl: "/vehicle_logos/CITROËN.png",
    },
    {
      autoMarkID: 139,
      autoMarkName: "DACIA",
      picUrl: "/vehicle_logos/DACIA.png",
    },
    {
      autoMarkID: 185,
      autoMarkName: "DAEWOO",
      picUrl: "/vehicle_logos/DAEWOO.png",
    },
    {
      autoMarkID: 25,
      autoMarkName: "DAIHATSU",
      picUrl: "/vehicle_logos/DAIHATSU.png",
    },
    {
      autoMarkID: 35,
      autoMarkName: "FIAT",
      picUrl: "/vehicle_logos/FIAT.png",
    },
    {
      autoMarkID: 36,
      autoMarkName: "FORD",
      picUrl: "/vehicle_logos/FORD.png",
    },
    {
      autoMarkID: 45,
      autoMarkName: "HONDA",
      picUrl: "/vehicle_logos/HONDA.png",
    },
    {
      autoMarkID: 183,
      autoMarkName: "HYUNDAI",
      picUrl: "/vehicle_logos/HYUNDAI.png",
    },
    {
      autoMarkID: 54,
      autoMarkName: "ISUZU",
      picUrl: "/vehicle_logos/ISUZU.png",
    },
    {
      autoMarkID: 55,
      autoMarkName: "IVECO",
      picUrl: "/vehicle_logos/IVECO.png",
    },
    {
      autoMarkID: 56,
      autoMarkName: "JAGUAR",
      picUrl: "/vehicle_logos/JAGUAR.png",
    },
    {
      autoMarkID: 882,
      autoMarkName: "JEEP",
      picUrl: "/vehicle_logos/JEEP.png",
    },
    {
      autoMarkID: 184,
      autoMarkName: "KIA",
      picUrl: "/vehicle_logos/KIA.png",
    },
    {
      autoMarkID: 63,
      autoMarkName: "LADA",
      picUrl: "/vehicle_logos/LADA.png",
    },
    {
      autoMarkID: 64,
      autoMarkName: "LANCIA",
      picUrl: "/vehicle_logos/LANCIA.png",
    },
    {
      autoMarkID: 1820,
      autoMarkName: "LAND ROVER",
      picUrl: "/vehicle_logos/LAND ROVER.png",
    },
    {
      autoMarkID: 842,
      autoMarkName: "LEXUS",
      picUrl: "/vehicle_logos/LEXUS.png",
    },
    {
      autoMarkID: 72,
      autoMarkName: "MAZDA",
      picUrl: "/vehicle_logos/MAZDA.png",
    },
    {
      autoMarkID: 74,
      autoMarkName: "MERCEDES-BENZ",
      picUrl: "/vehicle_logos/MERCEDES-BENZ.png",
    },
    {
      autoMarkID: 1523,
      autoMarkName: "MINI",
      picUrl: "/vehicle_logos/MINI.png",
    },
    {
      autoMarkID: 77,
      autoMarkName: "MITSUBISHI",
      picUrl: "/vehicle_logos/MITSUBISHI.png",
    },
    {
      autoMarkID: 80,
      autoMarkName: "NISSAN",
      picUrl: "/vehicle_logos/NISSAN.png",
    },
    {
      autoMarkID: 84,
      autoMarkName: "OPEL",
      picUrl: "/vehicle_logos/OPEL.png",
    },
    {
      autoMarkID: 88,
      autoMarkName: "PEUGEOT",
      picUrl: "/vehicle_logos/PEUGEOT.png",
    },
    {
      autoMarkID: 774,
      autoMarkName: "PONTIAC",
      picUrl: "/vehicle_logos/PONTIAC.png",
    },
    {
      autoMarkID: 93,
      autoMarkName: "RENAULT",
      picUrl: "/vehicle_logos/RENAULT.png",
    },
    {
      autoMarkID: 95,
      autoMarkName: "ROVER",
      picUrl: "/vehicle_logos/ROVER.png",
    },
    {
      autoMarkID: 99,
      autoMarkName: "SAAB",
      picUrl: "/vehicle_logos/SAAB.png",
    },
    {
      autoMarkID: 104,
      autoMarkName: "SEAT",
      picUrl: "/vehicle_logos/SEAT.png",
    },
    {
      autoMarkID: 106,
      autoMarkName: "SKODA",
      picUrl: "/vehicle_logos/SKODA.png",
    },
    {
      autoMarkID: 1138,
      autoMarkName: "SMART",
      picUrl: "/vehicle_logos/SMART.png",
    },
    {
      autoMarkID: 107,
      autoMarkName: "SUBARU",
      picUrl: "/vehicle_logos/SUBARU.png",
    },
    {
      autoMarkID: 109,
      autoMarkName: "SUZUKI",
      picUrl: "/vehicle_logos/SUZUKI.png",
    },
    {
      autoMarkID: 111,
      autoMarkName: "TOYOTA",
      picUrl: "/vehicle_logos/TOYOTA.png",
    },
    {
      autoMarkID: 120,
      autoMarkName: "VOLVO",
      picUrl: "/vehicle_logos/VOLVO.png",
    },
    {
      autoMarkID: 121,
      autoMarkName: "VW",
      picUrl: "/vehicle_logos/VW.png",
    },
    {
      autoMarkID: 124,
      autoMarkName: "ZASTAVA",
      picUrl: "/vehicle_logos/ZASTAVA.png",
    },
  ];

  const mappedMarks = marks.map((mark) => ({
    markID: mark.autoMarkID,
    markName: mark.autoMarkName,
    markLogo: mark.picUrl,
  }));

  await prisma.mark.createMany({ data: mappedMarks, skipDuplicates: true });

  console.log("Seeded marks successfully");

  const models = [
    {
      modNR: 278,
      modelName: "145 (930_)",
      period: "07.1994 - 01.2001",
    },
    {
      modNR: 1321,
      modelName: "146 (930_)",
      period: "12.1994 - 10.2001",
    },
    {
      modNR: 4735,
      modelName: "147 (937_)",
      period: "10.2000 - 03.2010",
    },
    {
      modNR: 282,
      modelName: "155 (167_)",
      period: "01.1992 - 12.1997",
    },
    {
      modNR: 2053,
      modelName: "156 (932_)",
      period: "09.1997 - 09.2005",
    },
    {
      modNR: 4635,
      modelName: "156 Sportwagon (932_)",
      period: "02.1997 - 05.2006",
    },
    {
      modNR: 5452,
      modelName: "159 (939_)",
      period: "06.2005 - 12.2012",
    },
    {
      modNR: 5543,
      modelName: "159 Sportwagon (939_)",
      period: "06.2005 - 12.2012",
    },
    {
      modNR: 287,
      modelName: "164 (164_)",
      period: "06.1987 - 09.1998",
    },
    {
      modNR: 3891,
      modelName: "166 (936_)",
      period: "09.1998 - 06.2007",
    },
    {
      modNR: 1818,
      modelName: "1750-2000 (105_)",
      period: "03.1968 - 07.1975",
    },
    {
      modNR: 7546,
      modelName: "1900 (190_)",
      period: "10.1950 - 09.1959",
    },
    {
      modNR: 4626,
      modelName: "2300 (102_)",
      period: "03.1974 - 12.1987",
    },
    {
      modNR: 7549,
      modelName: "2600 Berlina (117_)",
      period: "01.1962 - 12.1969",
    },
    {
      modNR: 7548,
      modelName: "2600 Spider (117_)",
      period: "01.1961 - 12.1965",
    },
    {
      modNR: 7547,
      modelName: "2600 Sprint (117_)",
      period: "01.1962 - 12.1966",
    },
    {
      modNR: 291,
      modelName: "33 (905_)",
      period: "05.1983 - 12.1993",
    },
    {
      modNR: 295,
      modelName: "33 (907_)",
      period: "01.1990 - 09.1994",
    },
    {
      modNR: 300,
      modelName: "33 Sportwagon (905_)",
      period: "01.1984 - 12.1989",
    },
    {
      modNR: 305,
      modelName: "33 Sportwagon (907_)",
      period: "01.1990 - 09.1994",
    },
    {
      modNR: 11241,
      modelName: "4C (960_)",
      period: "03.2013 - 12.2020",
    },
    {
      modNR: 13239,
      modelName: "4C SPIDER (960_)",
      period: "10.2014 - 12.2020",
    },
    {
      modNR: 309,
      modelName: "6 (119_)",
      period: "08.1979 - 12.1986",
    },
    {
      modNR: 312,
      modelName: "75 (162_)",
      period: "05.1985 - 12.1992",
    },
    {
      modNR: 9069,
      modelName: "8C (920_)",
      period: "01.2007 - 10.2009",
    },
    {
      modNR: 9071,
      modelName: "8C SPIDER (920_)",
      period: "01.2008 - 10.2010",
    },
    {
      modNR: 316,
      modelName: "90 (162_)",
      period: "09.1984 - 11.1987",
    },
    {
      modNR: 321,
      modelName: "ALFASUD (901_)",
      period: "06.1972 - 12.1984",
    },
    {
      modNR: 325,
      modelName: "ALFASUD Giardinetta (904_)",
      period: "01.1978 - 12.1981",
    },
    {
      modNR: 329,
      modelName: "ALFASUD Sprint (902_)",
      period: "09.1976 - 12.1989",
    },
    {
      modNR: 339,
      modelName: "ALFETTA (116_)",
      period: "07.1974 - 12.1984",
    },
    {
      modNR: 334,
      modelName: "ALFETTA GT (116_)",
      period: "01.1974 - 01.1986",
    },
    {
      modNR: 3847,
      modelName: "AR 6 Bus (280_)",
      period: "04.1985 - 12.1989",
    },
    {
      modNR: 3848,
      modelName: "AR 6 Van (280_)",
      period: "04.1985 - 12.1989",
    },
    {
      modNR: 3850,
      modelName: "AR 8 Platform/Chassis (280_)",
      period: "04.1978 - 12.1989",
    },
    {
      modNR: 3849,
      modelName: "AR 8 Van (280_)",
      period: "04.1978 - 12.1989",
    },
    {
      modNR: 353,
      modelName: "ARNA (920_)",
      period: "03.1983 - 12.1986",
    },
    {
      modNR: 30027,
      modelName: "BERLINA (105_)",
      period: "09.1968 - 03.1977",
    },
    {
      modNR: 5479,
      modelName: "BRERA (939_)",
      period: "01.2006 - 05.2011",
    },
    {
      modNR: 345,
      modelName: "GIULIA (105_)",
      period: "01.1962 - 12.1978",
    },
    {
      modNR: 36486,
      modelName: "GIULIA (952_)",
      period: "10.2015 - ",
    },
    {
      modNR: 3686,
      modelName: "GIULIA GT (105_)",
      period: "01.1962 - 12.1978",
    },
    {
      modNR: 483,
      modelName: "GIULIETTA (116_)",
      period: "10.1977 - 12.1985",
    },
    {
      modNR: 8603,
      modelName: "GIULIETTA (940_)",
      period: "04.2010 - 12.2020",
    },
    {
      modNR: 7551,
      modelName: "GIULIETTA Berlina (101_)",
      period: "01.1955 - 12.1962",
    },
    {
      modNR: 7555,
      modelName: "GIULIETTA Coupe (101_)",
      period: "01.1958 - 12.1961",
    },
    {
      modNR: 7553,
      modelName: "GIULIETTA Estate (101_)",
      period: "01.1957 - 12.1962",
    },
    {
      modNR: 7552,
      modelName: "GIULIETTA Spider (101_)",
      period: "01.1955 - 12.1962",
    },
    {
      modNR: 7550,
      modelName: "GIULIETTA Sprint (101_)",
      period: "01.1954 - 12.1962",
    },
    {
      modNR: 7554,
      modelName: "GIULIETTA Sprint Speciale (101_)",
      period: "01.1958 - 12.1961",
    },
    {
      modNR: 536,
      modelName: "GT (105_)",
      period: "03.1963 - 12.1977",
    },
    {
      modNR: 5080,
      modelName: "GT (937_)",
      period: "11.2003 - 09.2010",
    },
    {
      modNR: 4625,
      modelName: "GTA Coupe (113_)",
      period: "05.1968 - 12.1976",
    },
    {
      modNR: 3389,
      modelName: "GTV (116_)",
      period: "01.1978 - 02.1987",
    },
    {
      modNR: 1460,
      modelName: "GTV (916_)",
      period: "06.1995 - 10.2005",
    },
    {
      modNR: 7556,
      modelName: "MATTA Open Off-Road Vehicle (AR5_)",
      period: "01.1952 - 12.1954",
    },
    {
      modNR: 7587,
      modelName: "MITO (955_)",
      period: "08.2008 - 10.2018",
    },
    {
      modNR: 1819,
      modelName: "MONTREAL (105_)",
      period: "12.1972 - 03.1979",
    },
    {
      modNR: 3602,
      modelName: "RZ (162_)",
      period: "01.1992 - 12.1994",
    },
    {
      modNR: 10181,
      modelName: "SPIDER (102_)",
      period: "01.1958 - 12.1961",
    },
    {
      modNR: 289,
      modelName: "SPIDER (105_)",
      period: "03.1966 - 12.1977",
    },
    {
      modNR: 293,
      modelName: "SPIDER (115_)",
      period: "01.1971 - 12.1993",
    },
    {
      modNR: 1461,
      modelName: "SPIDER (916_)",
      period: "09.1994 - 04.2005",
    },
    {
      modNR: 5567,
      modelName: "SPIDER (939_)",
      period: "03.2006 - 03.2011",
    },
    {
      modNR: 37292,
      modelName: "STELVIO (949_)",
      period: "12.2016 - ",
    },
    {
      modNR: 3507,
      modelName: "SZ (162_)",
      period: "09.1988 - 08.1994",
    },
    {
      modNR: 42679,
      modelName: "TONALE (965_)",
      period: "03.2022 - ",
    },
  ];

  const mappedModels = models.map((model) => {
    const [yearFrom, yearTo] = model.period.split(" - ");
    return {
      modelID: model.modNR,
      modelName: model.modelName,
      yearFrom,
      yearTo,
      markID: 2,
    };
  });

  await prisma.model.createMany({ data: mappedModels, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
