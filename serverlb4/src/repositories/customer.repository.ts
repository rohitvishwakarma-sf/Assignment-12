import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Assignment12DataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.assignment12') dataSource: Assignment12DataSource,
  ) {
    super(Customer, dataSource);
  }
}
