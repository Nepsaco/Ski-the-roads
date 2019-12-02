// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/ski_app'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
