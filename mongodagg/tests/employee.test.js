
const request = require('supertest');
const mongoose=require("mongoose");
const app=require("../app");


beforeAll(async () => {
    const url = `"mongodb+srv://logan:logan123@cluster0.io38f.mongodb.net/mongoaugustbatchemp?retryWrites=true&w=majority`;
    await mongoose.connect(url, { useNewUrlParser: true });
});

afterAll(async () => {
    
    await mongoose.disconnect();

});


describe("GET /api/employee/getAll", () => {
    it("It should return the response 200", (done) => {
        request(app).
            get("/api/employee/getAll")
            
            .expect(200)
           
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });

    });
});

