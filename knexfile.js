const pgConnection = process.env.DATABASE_URL;

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
} 

module.exports = {
	development: {
		...sharedConfig,
		connection: { filename: './data/dev.sqlite3' },
	},

	testing: {
		...sharedConfig,
		connection: { filename: './data/testing.sqlite3' },
	},

	production: {
		...sharedConfig,
		client: pg,
		connection: { connectionString: pgConnection },
		ssl: { rejectUnauthorized: false },
		pool: {
			min: 2,
			max: 10,
		},
	},
};
