const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

// require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});
describe("POST /api/auth/register // REGISTER", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "aesddsnfkjdsfk",
      email: "sssssssssssssss@gmail.com",
      password: "azertoyuiss",
    });
    // console.log("res.body :>> ", res.body);

    expect(res.statusCode).toBe(201);
    // expect(res.body.name).toBe("abdessamad");
  });
});
// describe("GET /api/auth/confirm/sjsjs", () => {
//   it("should verify email", async () => {
//     const res = await request(app).get("/api/auth/confirm/dnfsdjnfkdslf");
//     expect(res.statusCode).toBe(401);
//     // expect(res.body.name).toBe("abdessamad");
//   });
// });

/* Testing the API endpoints. */
// describe("GET /api/products", () => {
//   it("should return all products", async () => {
//     const res = await request(app).get("/api/products");
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });
// });

// describe("GET /api/products/:id", () => {
//   it("should return a product", async () => {
//     const res = await request(app).get(
//       "/api/products/6331abc9e9ececcc2d449e44"
//     );
//     expect(res.statusCode).toBe(200);
//     expect(res.body.name).toBe("Product 1");
//   });
// });

// describe("POST /api/products", () => {
//   it("should create a product", async () => {
//     const res = await request(app).post("/api/products").send({
//       name: "Product 2",
//       price: 1009,
//       description: "Description 2",
//     });
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe("Product 2");
//   });
// });

// describe("PUT /api/products/:id", () => {
//   it("should update a product", async () => {
//     const res = await request(app)
//       .patch("/api/products/6331abc9e9ececcc2d449e44")
//       .send({
//         name: "Product 4",
//         price: 104,
//         description: "Description 4",
//       });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.price).toBe(104);
//   });
// });

// describe("DELETE /api/products/:id", () => {
//   it("should delete a product", async () => {
//     const res = await request(app).delete(
//       "/api/products/6331abc9e9ececcc2d449e44"
//     );
//     expect(res.statusCode).toBe(200);
//   });
// });