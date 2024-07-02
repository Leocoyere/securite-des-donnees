import express from 'express';
import UserController from '../controllers/userController';
import authenticateToken from '../middleware/authentification';

const router = express.Router();

// Route pour la connexion (login)
router.post('/login', UserController.loginUser);

// Route pour obtenir tous les utilisateurs
router.get('/', UserController.getAllUsers);

// Route pour créer un utilisateur
router.post('/', UserController.createUser);

// Route pour obtenir un utilisateur par ID
router.get('/:id', UserController.getUserById);

// Route pour mettre à jour un utilisateur
router.put('/:id', authenticateToken, UserController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', authenticateToken, UserController.deleteUser);

// Route pour la déconnexion (logout)
router.post('/disconnect',  authenticateToken,  UserController.disconnectUser);

export default router;
