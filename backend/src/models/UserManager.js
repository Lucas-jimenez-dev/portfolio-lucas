const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, role) values (?,?,?)`,
      [user.email, user.password, user.role]
    );
  }

  findByLogin(email, password) {
    return this.connection.query(
      `select * from  ${UserManager.table} where email = ? AND password = ?`,
      [email, password]
    );
  }

  // TODO
  // update(user) {
  //   return this.connection.query(
  //     `update ${UserManager.table} set title = ? where id = ?`,
  //     [user.title, item.id]
  //   );
  // }
}

module.exports = UserManager;
