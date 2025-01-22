// Abstract Factory Use Case Example Code
import FurnitureFactory from "./furniture-factory";

let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());

FURNITURE = FurnitureFactory.getFurniture("MediumChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
