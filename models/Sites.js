const Db = require("../data/dbConfig");

module.exports = {
  getSites: async id => {
    if (id) {
      return await Db("sites").where({ id });
    }
    return await Db("sites");
  }
};
