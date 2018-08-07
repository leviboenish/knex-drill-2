// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/coffee'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
