const { e2e } = require('./e2e');

e2e('Hello', {
  tests: ({ graphqlRquest }) => {
    it('should return Hello World', async () => {
      const response = await graphqlRquest({
        query: `
          query Query {
            hello
          }
        `,
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.data.hello).toMatch(
        /^Hello, world! 🌍\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
      );
    });
  },
});
