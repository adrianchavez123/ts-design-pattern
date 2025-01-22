import BigTable from "./big-table";
import MediumTable from "./medium-table";
import SmallTable from "./small-table";
import { ITable } from "./table";

export default class TableFactory {
  static getTable(Table: string): ITable {
    if (Table === "BigTable") {
      return new BigTable();
    } else if (Table === "MediumTable") {
      return new MediumTable();
    } else if (Table === "SmallTable") {
      return new SmallTable();
    } else {
      throw new Error("No Table Found");
    }
  }
}
