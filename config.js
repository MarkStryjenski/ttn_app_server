/*
Author: Robert Lie (mobilefish.com)
The config.js file contains the MySQL user credentials and The Things Network (TTN) appID and accessKey.
See LoRa/LoRaWAN Tutorial 27
https://www.mobilefish.com/download/lora/lora_part27.pdf

The config.js file is used by:
- drop_db.js
- create_db.js
- create_table.js
- store_records.js
- read_table.js
- retrieve.js
- send.js
*/
const databaseOptions = {
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b8041e339aa3d1',
    password: '06634b97'
};

const TTNOptions = {
    appID: 'data_test_application',
    accessKey: 'ttn-account-v2._6fl9v7CukvAe1uw6AtT10U_L1EaFRwq-2pWlK4dC1Q'
};

module.exports = { databaseOptions: databaseOptions, TTNOptions: TTNOptions };
