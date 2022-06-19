import { GeoPosition } from '../domain/route.entity';
import { IRouteRepository } from '../domain/route.repository';

type ListAllCreateRouteOutput = {
  id: string;
  title: string;
  startPosition: GeoPosition;
  endPosition: GeoPosition;
  points?: GeoPosition[];
}[];

export class ListAllRouteUseCase {
  constructor(private _routeRepository: IRouteRepository) {}

  public async execute(): Promise<ListAllCreateRouteOutput> {
    const routes = await this._routeRepository.findAll();
    return routes.map((r) => r.toJSON());
  }
}
