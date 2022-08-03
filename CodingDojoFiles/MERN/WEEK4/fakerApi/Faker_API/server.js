const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// setting variables for creating a user
const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
});
// ------------------------------------------------------

// setting variables for creating a company
const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

// 7. creates new user
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// 8. creates new company
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// 9. does both , new user and new company
app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const both = {
    user: newUser,
    company: newCompany,
    };
    res.json(both);
});

// displays when u run the server
app.listen( port, () => console.log(`Listening on port: ${port}`) );