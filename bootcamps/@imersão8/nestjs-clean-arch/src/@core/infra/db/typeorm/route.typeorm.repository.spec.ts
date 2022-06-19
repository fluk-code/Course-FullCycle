import { Route, RouteProperties } from '../../../domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';
import { RouteTypeOrmRepository } from './route.typeorm.repository';

describe(`${RouteTypeOrmRepository.name} Unit Test`, () => {
  test('should insert a new route', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [RouteSchema],
    });
    await dataSource.initialize();

    const ormRepository = dataSource.getRepository(Route);
    const repository = new RouteTypeOrmRepository(ormRepository);

    const routeProperties: RouteProperties = {
      title: 'some title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 2, lng: 2 },
    };
    const route = Route.create(routeProperties);
    await repository.insert(route);
    const routeFound = await ormRepository.findOneBy({ id: route.id });

    expect(routeFound.toJSON()).toStrictEqual(route.toJSON());
  });
});
