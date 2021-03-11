import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MssqlCarbonx1DataSource} from '../datasources';
import {Company, CompanyRelations} from '../models';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
  constructor(
    @inject('datasources.mssql_carbonx1') dataSource: MssqlCarbonx1DataSource,
  ) {
    super(Company, dataSource);
  }
}
