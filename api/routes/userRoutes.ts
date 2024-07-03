import express from 'express';
import UserController from '../controllers/userController';
import { authenticateToken, getFormattedTimestamp } from '../middleware/authentification';
import encrypt from '../middleware/encrypt';

const router = express.Router();

// Route pour la connexion (login)
router.post('/login', encrypt, UserController.loginUser);

// Route pour obtenir tous les utilisateurs
router.get('/getAllUsers', UserController.getAllUsers);

// Route pour créer un utilisateur
router.post('/',  encrypt, UserController.createUser);

// Route pour obtenir un utilisateur par I
//@ts-ignore
router.get('/',  authenticateToken, UserController.getUserById);

// Route pour mettre à jour un utilisateur
//@ts-ignore
router.put('/', authenticateToken, UserController.updateUser);

// Route pour supprimer un utilisateur
//@ts-ignore
router.delete('/', authenticateToken, UserController.deleteUser);

// Route pour la déconnexion (logout)
router.post('/disconnect',  authenticateToken,  UserController.disconnectUser);

export default router;
