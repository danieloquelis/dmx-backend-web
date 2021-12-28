import Sequelize from 'sequelize';
export const sequelize = new Sequelize(
    'dmx_prov',
    'axeso',
    'axeso@D593*', {
        host: '190.116.51.182',
        dialect: 'postgres',
        dialectOptions: {
            application_name: 'My Node App',
        },
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        //logging: true
    }
);

export const sequelize2 = new Sequelize(
    'gestiondc',
    'axeso',
    'axeso@D593*', {
        host: '190.116.51.182',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        //logging: true
    }
);