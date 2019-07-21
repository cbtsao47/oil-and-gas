const Db = require("../data/dbConfig");

module.exports = {
  getExtractionsByWellId: async id => {
    if (id) {
      return await Db("extractions as ex")
        .where({ id })
        .join("wells", "wells.id", "ex.well_id");
    }
    return await Db("extractions as ex").join(
      "wells",
      "wells.id",
      "ex.well_id"
    );
  }
};
