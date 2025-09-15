
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cron-service.cjs.production.min.js')
} else {
  module.exports = require('./cron-service.cjs.development.js')
}
