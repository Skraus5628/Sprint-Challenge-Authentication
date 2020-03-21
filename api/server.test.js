const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

test("welcome route", async () =>{
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("We're all mad here...")
    expect(res.body.message).toHaveLength(21)
    expect(res.body.message).toMatch(/We're/i)
  
})