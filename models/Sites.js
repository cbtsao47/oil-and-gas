const Db = require("../data/dbConfig");

module.exports = {
  getSites: async () => {
    const sites = await Db("sites");
    const wells = await Db("wells");
    const result = sites.map(site => {
      const wellsData = wells.filter(well => well.site_id === site.id);
      return { ...site, wells: wellsData };
    });
    return result;
  },
  getSiteById: async id => {
    let result = null;
    const site = await Db("sites")
      .where({ id })
      .first();
    const wells = await Db("wells").where({ site_id: id });
    if (site) {
      result = { ...site, wells };
    }
    return result;
  }
};
