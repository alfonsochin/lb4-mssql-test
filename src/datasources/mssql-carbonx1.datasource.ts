import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mssql_carbonx1',
  connector: 'mssql',
  url: '',
  host: 'localhost',
  port: 1433,
  user: 'lb4demo',
  password: 'lb4demo',
  database: 'lb4demo'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MssqlCarbonx1DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mssql_carbonx1';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mssql_carbonx1', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
