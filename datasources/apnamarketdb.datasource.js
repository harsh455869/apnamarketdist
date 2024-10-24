"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApnamarketdbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'apnamarketdb',
    connector: 'mongodb',
    // url: 'mongodb+srv://harsh_31:YEHwtkbJrwq0iDiB@cluster0.blwfsmm.mongodb.net/best4me?retryWrites=true&w=majority&appName=Cluster0'
    url: 'mongodb+srv://hbpatel03032004:dxkfsdTrJ5NZIRzr@cluster0.pixrl.mongodb.net/apnamarket?retryWrites=true&w=majority&appName=Cluster0'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let ApnamarketdbDataSource = class ApnamarketdbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.ApnamarketdbDataSource = ApnamarketdbDataSource;
ApnamarketdbDataSource.dataSourceName = 'apnamarketdb';
ApnamarketdbDataSource.defaultConfig = config;
exports.ApnamarketdbDataSource = ApnamarketdbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.apnamarketdb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApnamarketdbDataSource);
//# sourceMappingURL=apnamarketdb.datasource.js.map