import express from 'express';
import csurf from 'csurf';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { join, dirname, resolve } from 'path';
// now my project will be done with github
// changing once again
// check now

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const csrfProtection = csurf({ cookie: true });

const mongoAtlasUri = 'mongodb+srv://username:siddhant@cluster0.gnmxc7i.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoAtlasUri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cookieParser());

// Routes
const routesPath = './routes';

readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.js')) {
    const routePath = resolve(__dirname, 'routes', file);
    const routeUrl = new URL(`file://${routePath}`);

    import(routeUrl)
      .then((module) => {
        app.use('/api', module.default); // Assuming your route exports a default middleware
      })
      .catch((error) => console.error(`Error importing route ${routePath}:`, error));
  }
});

// CSRf

// Error handling middleware
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
