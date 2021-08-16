import { Request, Response } from "express";
import { User } from "./models/User";
import { Customer } from "./models/Customer";

function associations(){
  User.belongsTo(Customer,{foreignKey:'customerId'});
}
associations();
class Queries {
  async getAllUsers(request: Request, response: Response) {
    const user = await User.findAll({include:{model:Customer}});
    response.status(200).json(user);
  }
  async getUserById(id: number) {
    return await User.findOne({ where: { id: 5 } });
  }

  async saveUser(request: Request, response: Response) {
    const user = request.body as User;
    try {
      await User.updateUser(user);
      response.status(200).send({ message: "ok" });
    } catch (error) {
      console.log(error);
      response.status(400).send({ message: error });
    }
  }

  async deleteUser(request: Request, response: Response) {
    const userId = request.params.id;
    try {
      await Customer.deleteCustomerByUserId(+userId);
      await User.deleteUser(+userId);
      response.status(200).send({ message: "ok" });
    } catch (error) {
      response.status(400).send({ message: error });
    }
  }
  async createUser(request: Request, response: Response) {
    try {
      User.create(request.body);
      response.status(200).send({ message: "ok" });
    } catch (error) {
      response.status(400).send(error);
    }
  }

  async getCustomers(request: Request, response: Response) {
    if (request.query.fields) {
      if (
        Array.isArray(request.query.fields) &&
        request.query.fields.length > 0
      ) {
        const fields = request.query.fields as string[];
        const customers = await Customer.findAll({ attributes: [...fields] });

        response.status(200).send(customers);
      }
    } else {
      const customers = await Customer.findAll();
      response.status(200).send(customers);
    }
  }
}

export const queries = new Queries();
