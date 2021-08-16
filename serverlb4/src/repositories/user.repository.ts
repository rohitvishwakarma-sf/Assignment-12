import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Assignment12DataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.assignment12') dataSource: Assignment12DataSource,
  ) {
    super(User, dataSource);
  }
}
