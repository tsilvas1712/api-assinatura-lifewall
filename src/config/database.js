module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'lwsignaturedb',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
