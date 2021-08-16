import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { Customer } from "./Customer";

export class User extends Model {
  public id!: number;
  public firstname!: string;
  public middlename!: string;
  public lastname!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public rolekey!: string;
  public customerId!:number;

  public static addUser(user: {}) {
    User.create(user)
      .then(() => {
        console.log("created user");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public static async updateUser(user: any) {
    return await User.update(user, { where: { id: user.id! } });
  }
  public static async deleteUser(id: number) {
    return await User.destroy({ where: { id: id } });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    middlename: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    lastname: {
      type: new DataTypes.STRING(),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    phone: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    rolekey: {
      type: new DataTypes.STRING(),
      allowNull: false,
      references: {
        model: "roles",
        key: "key",
      },
    },
    customerId:{
      type:new DataTypes.INTEGER()
    }
  },
  {
    tableName: "users",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);


