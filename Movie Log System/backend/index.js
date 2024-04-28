import express from 'express';
import { PORT, MONGO_URL } from './config.js'; // Assuming config.js exports PORT and MONGO_URL
import mongoose from 'mongoose';

const app = express();

// Improved error handling for request logging
app.get('/', (request, response) => {
 console.log(request);
 return response.status(234).send('Hello World')
});

// Improved connection handling and error messages
mongoose.connect(MONGO_URL) // Add connection options
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    // Consider additional steps:
    // - Exit the process: process.exit(1);
    // - Log detailed error information for debugging
  });


