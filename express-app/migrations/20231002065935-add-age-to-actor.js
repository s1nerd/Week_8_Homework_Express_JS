exports.up = function (db) {
  return db.addColumn("actor", "age", {
    type: "int",
    notNull: true,
    defaultValue: 0,
  });
};

exports.down = function (db) {
  return db.removeColumn("actor", "age");
};
