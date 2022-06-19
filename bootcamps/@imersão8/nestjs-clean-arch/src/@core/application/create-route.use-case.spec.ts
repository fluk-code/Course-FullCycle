import RouteInMemoryRepository from '../infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe(`${CreateRouteUseCase.name} Unit Tests`, () => {
  it(`should create a new route when ${CreateRouteUseCase.prototype.execute.name} is called`, async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);

    const input = {
      title: 'some title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 2, lng: 2 },
    };

    const output = await createUseCase.execute(input);

    expect(output).toStrictEqual({
      id: (repository as any)._items[0].id,
      ...input,
      points: [],
    });
    expect((repository as any)._items).toHaveLength(1);
  });
});
