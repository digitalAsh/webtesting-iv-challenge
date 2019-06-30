module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/videogames.db3',
        },
        useNullasDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
    },
    testing: {
        client: 'sqlite3',
        connection: {
            filename: './data/test.db3',
        },
        useNullasDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        }
    }
}

