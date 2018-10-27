// Your production environment configs goes here! (SEE development.env.js)

module.exports = {
    app: {
        name: 'Rastro - Rastreamento de objetos dos Correios',
        version: '1.1.0'
    },
    server: {
        secure: false,
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        cors: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        }
    },
    databases: {

        // MongoDB with support a cluster
        mongodb: {
            servers: [
                {
                    host: 'localhost',
                    port: 27017
                }
            ],
            replicaSet  : 'localhost',
            authSource  : 'admin',
            ssl         : true,
            user        : 'admin',
            pass        : 'admin',
            name        : 'example',
            dialect     : 'mongodb',
            charset     : 'utf8',
            logging     : true,
            enabled     : false,
            configWith  : 'mongoose'
        },

        // SQL with default usage
        mysql: {
            host        : 'localhost',
            port        : 3306,
            user        : 'admin',
            pass        : 'admin',
            name        : 'example',
            dialect     : 'mysql',
            charset     : 'utf8',
            logging     : true,
            enabled     : false,
            configWith  : 'sequelize'
        },
        postgres        : {
            host        : 'localhost',
            port        : 5432,
            user        : 'admin',
            pass        : 'admin',
            name        : 'example',
            dialect     : 'postgres',
            charset     : 'utf8',
            logging     : true,
            enabled     : false,
            configWith  : 'sequelize'
        }
    }
};