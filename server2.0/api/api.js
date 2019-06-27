const addMethods = methods => {
  const api = {};

  for (const method of methods) {
    api[method] = (...args) => {
      const callback = args.pop();
      callback();
    };
  }

  return api;
};

const router = addMethods(["get", "post"]);
module.exports = router;
