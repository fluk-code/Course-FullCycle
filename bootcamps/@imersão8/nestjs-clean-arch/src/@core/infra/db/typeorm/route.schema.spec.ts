import { Route } from '../../../domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';

describe('RouteSchema Unit Test', () => {
  test('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      // logging: true,
      entities: [RouteSchema],
    });
    await dataSource.initialize();

    const route = Route.create({
      title: 'some title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 2, lng: 2 },
      points: [{ lat: 3, lng: 3 }],
    });

    const routeRepository = dataSource.getRepository(Route);
    await routeRepository.save(route);
  });
});
