module.exports = {
  apps: [
    {
      name: "ecommerce-examples",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        SECRETHUB_VAR_ENV: "development",
      },
      env_production: {
        SECRETHUB_VAR_ENV: "production",
      },
    },
  ],
};
