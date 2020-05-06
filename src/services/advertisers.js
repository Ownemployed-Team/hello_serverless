const { getNames } = require('../db/advertisers')

const getAdvertiserNames = async options => {
  const response = await getNames(options)
  return response
}

module.exports = {
  getAdvertiserNames,
}
