import { Customer } from "./customer.model";
import { Role } from "./role.model";

export enum ROLE {
  super_admin = "super_admin",
  admin = "admin",
  subscriber = "subscriber",
}
export class User{
id!: number;
firstName: string;
middleName?: string;
lastname: string;
email: string;
phone: string;
address: string;
roleKey: ROLE;
createdon?: string;
modifiedon?: string;
customer:Customer;
roles!:Role;

constructor(
    id: number,
  firstName: string,
  middleName: string = "middle",
  lastName: string,
  email: string,
  phone: string,
  rolekey: ROLE,
  address: string,
  Customer:Customer
) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastname = lastName;
    this.email = email;
    this.phone = phone;
    this.roleKey = rolekey;
    this.address = address;
    this.createdon="";
    this.modifiedon="";
    this.customer = Customer;
  
}

}