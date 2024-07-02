import express from 'express';
import UserController from '../controllers/userController';
import authenticateToken from '../middleware/authentification';
import encode from '../middleware/encode';

const router = express.Router();

// Route pour la connexion (login)
router.post('/login', encode, UserController.loginUser);

// Route pour obtenir tous les utilisateurs
router.get('/getAllUsers', UserController.getAllUsers);

// Route pour créer un utilisateur
router.post('/',  encode, UserController.createUser);

// Route pour obtenir un utilisateur par I
//@ts-ignore
router.get('/',  authenticateToken, UserController.getUserById);

// Route pour mettre à jour un utilisateur
//@ts-ignore
router.put('/', authenticateToken, UserController.updateUser);

// Route pour supprimer un utilisateur
//@ts-ignore
router.delete('/:id', authenticateToken, UserController.deleteUser);

// Route pour la déconnexion (logout)
router.post('/disconnect',  authenticateToken,  UserController.disconnectUser);

export default router;
