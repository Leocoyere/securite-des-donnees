import { User } from "../modele/user";
import pool from "../db/database";

class UserRepository {
  static async getAllUsers(): Promise<User[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw error
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getUserById(userId: string): Promise<User> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM users WHERE users.user_id = $1';
        const values = [userId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getUserByEmailAndPassword(email: string, password: string): Promise<User> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
        const values = [email, password];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async createUser(user: User): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
        INSERT INTO users (first_name, last_name, email, password, phone, status)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING user_id
      `;
        const values = [
          user.first_name || null,
          user.last_name || null,
          user.email,
          user.password,
          user.phone || null,
          user.status || 'New'
        ];
        const result = await pool.query(query, values);
        const insertedUserId = result.rows[0].user_id;
        return (insertedUserId)
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }


  static async updateUser(userId: string, updatedUser: User): Promise<void> {
    try {
      let c = await pool.connect()
      try {
        const query = `
          UPDATE users
          SET first_name = $1,
              last_name = $2,
              email = $3,
              password = $4,
              phone = $5,
              status = $6
          WHERE user_id = $7
        `;
        const values = [
          updatedUser.first_name,
          updatedUser.last_name,
          updatedUser.email,
          updatedUser.password,
          updatedUser.phone,
          updatedUser.status,
          userId,
        ];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const values = [userId];
        const query = 'UPDATE users SET status = \'Inactive\' WHERE user_id = $1';
        await pool.query(query, values);
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }

}

export default UserRepository;
