require('dotenv/config');
module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "use_env_variable": "DATABASE_URL_TEST",
    "dialect": "postgres",
    "logging": false
  },
  "staging": {
    "logging": false,
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "production": {
    "logging": false,
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}
