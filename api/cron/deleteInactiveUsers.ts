import pool from "../db/database";

// Fonction pour supprimer les utilisateurs inactifs depuis plus d'un an
export default async function deleteInactiveUsers() {
  const query = `
    DELETE FROM users 
    WHERE lastconnection < NOW() - INTERVAL '1 year'
  `;
  try {
    await pool.query(query);
    console.log('Inactive users deleted successfully');
  } catch (error : unknown) {
    console.error('Error deleting inactive users:', error);
  }
}

