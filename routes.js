const routes = require('next-routes')()

routes.add('/table/new', '/table/new').add('/table/:address', '/table/show')

module.exports = routes
