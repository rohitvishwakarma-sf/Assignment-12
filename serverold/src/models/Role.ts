import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class Role extends Model {
  public name!: string;
  public key!: string;
  public description!: string;
}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    description: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    tableName: "roles",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);
