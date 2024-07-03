import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import cron from 'node-cron';
import deleteInactiveUsers from './cron/deleteInactiveUsers';
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

// Planifier la tâche pour s'exécuter tous les jours à minuit
cron.schedule('0 0 * * *', () => {
  console.log('Running scheduled task to delete inactive users...');
  deleteInactiveUsers();
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
