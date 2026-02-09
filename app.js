import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello from the CI/CD Pipeline!'});
});

// Export the app so both index.js AND the tests can use it
export default app;