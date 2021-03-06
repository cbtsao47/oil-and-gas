const Db = require("../data/dbConfig");
const knex = require("knex");
module.exports = {
  getExtractionsById: async id => {
    return await Db("extractions as ex")
      .where({ "ex.id": id })
      .join("wells as w", "ex.well_id", "=", "w.id")
      .join("sites as s", "s.id", "w.site_id")
      .select(
        "ex.id",
        "s.name as site",
        "w.name as well",
        "ex.date",
        "ex.oil_amount",
        "ex.gas_amount"
      )
      .first();
  },
  getExtractions: async () => {
    const sites = await Db("sites");
    const extractions = await Db("extractions as ex")
      .join("wells as w", "ex.well_id", "=", "w.id")
      .join("sites as s", "s.id", "w.site_id")
      .select(
        "ex.id",
        "s.id as site",
        "w.name as well",
        "ex.date",
        "ex.oil_amount",
        "ex.gas_amount"
      )
      .orderBy("well");
    const result = sites.map(site => {
      const extractionsData = extractions.filter(
        extraction => extraction.site === site.id
      );
      return { ...site, wells: extractionsData };
    });
    return result;
  }
};
