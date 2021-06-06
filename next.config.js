module.exports = {
  env: {
    mongodb_username: "admin",
    mongodb_password: "test",
    mongodb_clustername: "cluster0",
    mongodb_database: "meetups",
  },
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "test",
        mongodb_clustername: "cluster0",
        mongodb_database: "meetups",
      },
    };
  }

  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "qBKva0dC5b5qyUEP",
      mongodb_clustername: "cluster0",
      mongodb_database: "meetups",
    },
  };
};
