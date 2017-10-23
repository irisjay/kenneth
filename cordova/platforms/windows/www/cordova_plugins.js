cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-websql.WebSQL",
        "file": "plugins/cordova-plugin-websql/www/WebSQL.js",
        "pluginId": "cordova-plugin-websql",
        "merges": [
            "window"
        ]
    },
    {
        "id": "cordova-plugin-websql.Database",
        "file": "plugins/cordova-plugin-websql/www/windows/Database.js",
        "pluginId": "cordova-plugin-websql"
    },
    {
        "id": "cordova-plugin-websql.SqlTransaction",
        "file": "plugins/cordova-plugin-websql/www/windows/SqlTransaction.js",
        "pluginId": "cordova-plugin-websql"
    },
    {
        "id": "cordova-plugin-websql.WebSqlProxy",
        "file": "plugins/cordova-plugin-websql/src/windows/WebSqlProxy.js",
        "pluginId": "cordova-plugin-websql",
        "runs": true
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "file": "plugins/cordova-plugin-inappbrowser/src/windows/InAppBrowserProxy.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-websql": "0.0.10",
    "cordova-plugin-inappbrowser": "1.7.1"
};
// BOTTOM OF METADATA
});