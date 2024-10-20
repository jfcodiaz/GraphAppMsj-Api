module.exports = {
    Query: {
      hello: () => {
        return 'Hello, world! 🌍' + (new Date()).toISOString();
      },
    },
  };
  