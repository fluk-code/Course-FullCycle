import { GeoPosition, Route } from '../domain/route.entity';
import { IRouteRepository } from '../domain/route.repository';

type CreateRouteInput = {
  title: string;
  startPosition: GeoPosition;
  endPosition: GeoPosition;
  points?: GeoPosition[];
};

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: GeoPosition;
  endPosition: GeoPosition;
  points?: GeoPosition[];
};

export class CreateRouteUseCase {
  constructor(private _routeRepository: IRouteRepository) {}

  public async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this._routeRepository.insert(route);

    return route.toJSON();
  }
}
