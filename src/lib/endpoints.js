const endpoints = {
  local: process.env.API_LOCAL,
  production: process.env.API_ENDPOINT,
};

const endpoint = endpoints.local;
console.log(endpoint);

export { endpoint };
