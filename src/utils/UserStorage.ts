class UserStorage {
    private static key = "vetUsers";
  
    // Obtener todos los usuarios almacenados
    static getUsers(): Array<{ email: string; password: string; name: string }> {
      const storedUsers = localStorage.getItem(this.key);
      return storedUsers ? JSON.parse(storedUsers) : [];
    }
  
    // Agregar un nuevo usuario
    static addUser(user: { email: string; password: string; name: string }): void {
      const users = this.getUsers();
      users.push(user); // Agregar el usuario directamente al arreglo
      localStorage.setItem(this.key, JSON.stringify(users));
    }
  
    // Verificar si un usuario existe
    static userExists(email: string): boolean {
      const users = this.getUsers();
      return users.some((u) => u.email === email);
    }
  }
  
  export default UserStorage;