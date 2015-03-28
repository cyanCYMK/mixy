module.exports = {
  // Server port
  port: process.env.PORT || 8080,
  // MongoDB connection options
  mongo: {
    uri: process.env.DB_PORT || 'mongodb://localhost/mixy-dev',
    seedDB: true
  }
};
