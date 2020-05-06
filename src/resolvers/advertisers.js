const { getAdvertiserNames } = require("../services/advertisers");

module.exports = {
  getAdvertiserNames: (_root, { name, page, pageSize }) =>
    getAdvertiserNames({
      name,
      page,
      pageSize,
    }),
};
