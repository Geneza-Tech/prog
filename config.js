const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || '162.214.81.24',
    user: env.DB_USER || 'gbiclkmy_sushil',
    password: env.DB_PASSWORD || 'Jacobsushil13',
    database: env.DB_NAME || 'gbiclkmy_aac',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;