import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRouteUseCase } from 'src/@core/application/list-all-routes.use-case';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly _createUseCase: CreateRouteUseCase,
    private readonly _listAllUseCase: ListAllRouteUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this._createUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this._listAllUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.routesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
  //   return this.routesService.update(+id, updateRouteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.routesService.remove(+id);
  // }
}
