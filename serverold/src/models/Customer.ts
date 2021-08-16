import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class Customer extends Model {
  public name!: string;
  public website!: string;
  public address!: string;
  public user_id!: number;

  public static async addCustomer(customer: any) {
    return await Customer.create(customer);
  }
  public static async deleteCustomerByUserId(user_id: number) {
    return Customer.destroy({ where: { user_id: user_id } });
  }
}

Customer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    user_id: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "customers",
    sequelize: sequelize,
    createdAt: "createdon",
    updatedAt: "modifiedon",
  }
);
