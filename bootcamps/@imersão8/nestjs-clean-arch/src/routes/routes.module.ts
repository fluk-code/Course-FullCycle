import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import RouteInMemoryRepository from 'src/@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRouteUseCase } from 'src/@core/application/list-all-routes.use-case';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { RouteSchema } from 'src/@core/infra/db/typeorm/route.schema';
import { RouteTypeOrmRepository } from 'src/@core/infra/db/typeorm/route.typeorm.repository';
import { DataSource } from 'typeorm';
import { Route } from 'src/@core/domain/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteTypeOrmRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRouteUseCase,
      useFactory: (routeRepository: RouteTypeOrmRepository) => {
        return new ListAllRouteUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
  ],
})
export class RoutesModule {}
