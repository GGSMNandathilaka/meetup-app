module.exports = () => {
  const env= {
    MONGODB_URI:
      "mongodb+srv://admin:qBKva0dC5b5qyUEP@cluster0.movlm.mongodb.net/meetups?retryWrites=true&w=majority",
    DB_NAME: "meetups",
  },
   // next.config.js object
   return {
    env,
  }
};