import { Route } from '../../../domain/route.entity';
import { IRouteRepository } from '../../../domain/route.repository';

export default class RouteInMemoryRepository implements IRouteRepository {
  private _items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this._items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this._items;
  }
}
