import request from "supertest";

import app from "./app";

describe("GET /", () => {
  it("should retusn a JSON response with a message", async () => {
    // Step 1: Get the response from the server
    const response = await request(app).get('/');

    // Step 2: Check if the status code is 200
    expect(response.status).toBe(200);

    // 3. Check if the message matches exactly
    expect(response.body).toEqual({
      message: "Hello from the CI/CD Pipeline!",
    });
  });
});
