const Db = require("../data/dbConfig");

module.exports = {
  getWells: async id => {
    if (id) {
      return await Db("wells").where({ id });
    }
    return await Db("wells");
  }
};
