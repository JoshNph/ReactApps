const vendor1 = ["pizza", "pasta"];
const vendor2 = ["pizza", "calzones"];
const vendor3 = ["lobster"];
const vendor4 = ["calzones"];

const menuRaw = [...vendor1,...vendor2,...vendor3,...vendor4];
const menu = new Set(menuRaw);

console.log(menu);
