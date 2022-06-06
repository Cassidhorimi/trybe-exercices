"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercices2_1 = __importDefault(require("./exercices2"));
const exercices3_1 = __importDefault(require("./exercices3"));
const monthsNames = Object.values(exercices2_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
const seasonsSouth = {
    [exercices3_1.default.OUTONO]: [exercices2_1.default.MARCO, exercices2_1.default.ABRIL, exercices2_1.default.MAIO, exercices2_1.default.JUNHO],
    [exercices3_1.default.INVERNO]: [exercices2_1.default.JUNHO, exercices2_1.default.JULHO, exercices2_1.default.AGOSTO, exercices2_1.default.SETEMBRO],
    [exercices3_1.default.PRIMAVERA]: [exercices2_1.default.SETEMBRO, exercices2_1.default.OUTUBRO, exercices2_1.default.NOVEMBRO, exercices2_1.default.DEZEMBRO],
    [exercices3_1.default.VERAO]: [exercices2_1.default.DEZEMBRO, exercices2_1.default.JANEIRO, exercices2_1.default.FEVEREIRO, exercices2_1.default.MARCO],
};
const seasonsNorth = {
    [exercices3_1.default.PRIMAVERA]: seasonsSouth[exercices3_1.default.OUTONO],
    [exercices3_1.default.VERAO]: seasonsSouth[exercices3_1.default.INVERNO],
    [exercices3_1.default.OUTONO]: seasonsSouth[exercices3_1.default.PRIMAVERA],
    [exercices3_1.default.INVERNO]: seasonsSouth[exercices3_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
const month = Object.values(exercices2_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
