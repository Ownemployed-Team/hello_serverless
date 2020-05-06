const advertisers = require('./advertisers')
const clusters = require('./clusters')
const dbExample = require('./db-example')
const heatmaps = require('./heatmaps')
const jsonExample = require('./json-example')
const listings = require('./listings')
const listingsOverTime = require('./listings-over-time')
const locations = require('./locations')
const managers = require('./managers')
const properties = require('./properties')
const search = require('./search')

module.exports.resolvers = {
  Query: {
    ...advertisers,
    ...clusters,
    ...dbExample,
    ...heatmaps,
    ...jsonExample,
    ...listings,
    ...listingsOverTime,
    ...locations,
    ...managers,
    ...properties,
    ...search,
  },
}
