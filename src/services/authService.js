// Simple authentication service without a database

// Demo credentials
const users = [
  {
    username: 'demo',
    password: 'AgriMart2023',
    email: 'demo@agrimart.com',
    id: '1'
  },
  {
    username: 'admin',
    password: 'Admin2023',
    email: 'admin@agrimart.com',
    id: '2'
  }
];

/**
 * Authenticate a user with username/password
 * @param {string} username - The username
 * @param {string} password - The password
 * @returns {Object|null} User object if authenticated, null otherwise
 */
export const authenticate = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  
  if (user) {
    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  return null;
};

/**
 * Find a user by ID
 * @param {string} id - The user ID
 * @returns {Object|null} User object if found, null otherwise
 */
export const findUserById = (id) => {
  const user = users.find((u) => u.id === id);
  
  if (user) {
    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  return null;
};