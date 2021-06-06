module.exports = {
  env: {
    mongodb_username: "admin",
    mongodb_password: "test",
    mongodb_clustername: "meetups",
    mongodb_database: "meetups",
  },
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "develop",
        mongodb_password: "MhjW4h5qByFeRW57",
        mongodb_clustername: "meetups",
        mongodb_database: "meetups",
      },
    };
  }

  return {
    env: {
      mongodb_username: "develop",
      mongodb_password: "MhjW4h5qByFeRW57",
      mongodb_clustername: "meetups",
      mongodb_database: "meetups",
    },
  };
};
