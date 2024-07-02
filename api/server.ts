import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
var cors = require('cors')

const app = express();
const port = 4000;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

/* var corsOptions = {
  origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200
} */

app.use('/api/users', /*cors(corsOptions), */ userRoutes);

// Serve the frontend
// app.use(express.static('dist')); // Assurez-vous que votre dossier de build de la partie frontend est "dist"

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
