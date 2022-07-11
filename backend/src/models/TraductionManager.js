const AbstractManager = require("./AbstractManager");

class TraductionManager extends AbstractManager {
  static table = "traductions";

  findAll() {
    return this.connection.query(
      `SELECT t.id, t.reference, tc.body, tc.lang FROM ${this.table} AS t INNER JOIN traductions_content AS tc ON tc.traduction_id = t.id`
    );
  }

  insert(item) {
    return this.connection.query(
      `insert into ${TraductionManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${TraductionManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = TraductionManager;
