import express from "express";
import cors from "cors";
import { queries } from "./queries";
import { User } from "./models/User";
import { sequelize } from "./database";
import { Customer } from "./models/Customer";
import { Role } from "./models/Role";
const port = 5000;

var corsOptions = {
  // origin: "http://192.168.29.216:8080",
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Role.sync({ force: true }).then(() => {
//     Role.create({
//       name: "Super Admin",
//       key: "super_admin",
//       description: "Having all access",
//     });
//     Role.create({
//       name: "Admin",
//       key: "admin",
//       description: "Having less access then super admin",
//     });
//     Role.create({
//       name: "Subscriber",
//       key: "subscriber",
//       description: "The end customer",
//     });
//   });
  



  // User.sync({ force: true }).then(() => {
  //   User.addUser({
  //     firstname: "rohit",
  //     lastname: "vishwakarma",
  //     email: "rohit@gmail.com",
  //     phone: "12323213",
  //     address: "Jabalpur",
  //     rolekey: "admin",
  //   });
  //   User.addUser({
  //     firstname: "swami",
  //     lastname: "vivekanda",
  //     email: "swami@gmail.com",
  //     phone: "12323213",
  //     address: "pryagraj",
  //     rolekey: "subscriber",
  //   });
  //   User.addUser({
  //     firstname: "satya",
  //     lastname: "nadella",
  //     email: "satya@gmail.com",
  //     phone: "12323213",
  //     address: "mumbai",
  //     rolekey: "admin",
  //   });
  //   User.addUser({
  //     firstname: "Narendra",
  //     middlename: "damodar das",
  //     lastname: "Modi",
  //     email: "narendra@gmail.com",
  //     phone: "12323213",
  //     address: "delhi",
  //     rolekey: "admin",
  //   });
  //   User.addUser({
  //     firstname: "sundar",
  //     lastname: "pichai",
  //     email: "sundar@gmail.com",
  //     phone: "12323213",
  //     address: "banglore",
  //     rolekey: "admin",
  //   });
  // });
  // User.addUser({
  //   firstname: "rohit",
  //   lastname: "vishwakarma",
  //   email: "rohit@gmail.com",
  //   phone: "12323213",
  //   address: "Jabalpur",
  //   rolekey: "admin",
  // });
  // User.addUser({
  //   firstname: "swami",
  //   lastname: "vivekanda",
  //   email: "swami@gmail.com",
  //   phone: "12323213",
  //   address: "pryagraj",
  //   rolekey: "subscriber",
  // });
  // User.addUser({
  //   firstname: "satya",
  //   lastname: "nadella",
  //   email: "satya@gmail.com",
  //   phone: "12323213",
  //   address: "mumbai",
  //   rolekey: "admin",
  // });
  // User.addUser({
  //   firstname: "Narendra",
  //   middlename: "damodar das",
  //   lastname: "Modi",
  //   email: "narendra@gmail.com",
  //   phone: "12323213",
  //   address: "delhi",
  //   rolekey: "admin",
  // });
  // User.addUser({
  //   firstname: "sundar",
  //   lastname: "pichai",
  //   email: "sundar@gmail.com",
  //   phone: "12323213",
  //   address: "banglore",
  //   rolekey: "admin",
  // });









  // Customer;
  // Customer.sync({ force: true }).then(() => {
  //   Customer.create({
  //     name: "c1",
  //     website: "c1.com",
  //     address: "c1address",
  //     user_id: 1,
  //   });
  //   Customer.create({
  //     name: "c2",
  //     website: "c2.com",
  //     address: "c2address",
  //     user_id: 2,
  //   });
  //   Customer.create({
  //     name: "c3",
  //     website: "c3.com",
  //     address: "c3address",
  //     user_id: 3,
  //   });
  //   Customer.create({
  //     name: "c4",
  //     website: "c4.com",
  //     address: "c4address",
  //     user_id: 4,
  //   });
  //   Customer.create({
  //     name: "c5",
  //     website: "c5.com",
  //     address: "c5address",
  //     user_id: 5,
  //   });
  // });
// Customer.hasOne(User,{foreignKey:"user_id"})


// User.belongsTo(Customer,{foreignKey:"customerId"})
// async function findUser(){
//   const u = await User.findAll({where:{
//     id:1
//   },include:{model:Customer,attributes:['name']}})
//   console.debug("ye h user with id 1");
  
//   // console.log((u?.toJSON()as any));

// }
// findUser()

// User.associations()
const db = sequelize;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", queries.getAllUsers);

app.patch("/save", queries.saveUser);

app.delete("/:id", queries.deleteUser);

app.put("/", queries.createUser);
app.get("/customers/", queries.getCustomers);

app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("Error connecting databse " + error);
    });
});
