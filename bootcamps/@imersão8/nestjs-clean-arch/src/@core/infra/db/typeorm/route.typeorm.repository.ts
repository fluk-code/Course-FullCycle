import { Route } from 'src/@core/domain/route.entity';
import { Repository } from 'typeorm';
import { IRouteRepository } from '../../../domain/route.repository';

export class RouteTypeOrmRepository implements IRouteRepository {
  constructor(private ormRepository: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepository.save(route);
  }

  async findAll(): Promise<Route[]> {
    return await this.ormRepository.find();
  }
}
