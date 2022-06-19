import { Route, RouteProperties } from '../../domain/route.entity';
import RouteInMemoryRepository from './route-in-memory.repository';
describe(`${RouteInMemoryRepository.name} Unit Tests`, () => {
  it('should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();

    const routeProperties: RouteProperties = {
      title: 'some route',
      startPosition: {lat: 0, lng: 1},
      endPosition: {lat: 2, lng: 3},
    };

    const route = new Route(routeProperties);
    await repository.insert(route);

    expect((repository as any)._items).toHaveLength(1);
    expect((repository as any)._items).toStrictEqual([route]);

  });
  
});
