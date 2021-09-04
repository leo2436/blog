// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const getValue = (key, throwOnMissing = true) => {
  const value = process.env[key];
  if (!value && throwOnMissing) {
    throw new Error(`config error - missing env.${key}`);
  }

  return value;
};

const isProduction = () => {
  const mode = getValue('MODE', false);
  return mode != 'DEV';
};

module.exports = {
  type: 'postgres',
  host: getValue('POSTGRES_HOST'),
  port: parseInt(getValue('POSTGRES_PORT')),
  username: getValue('POSTGRES_USER'),
  password: getValue('POSTGRES_PASSWORD'),
  database: getValue('POSTGRES_DATABASE'),

  entities: ['dist/**/*.entity.js'],

  migrationsTableName: 'migration',

  migrations: ['dist/migration/*.js'],

  cli: {
    migrationsDir: 'src/migration',
  },

  ssl: isProduction(),
};
