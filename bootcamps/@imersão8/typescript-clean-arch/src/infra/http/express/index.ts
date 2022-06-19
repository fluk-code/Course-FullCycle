import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { ListAllCreateRouteUseCase } from '../../../application/list-all-routes.use-case';
import RouteInMemoryRepository from '../../db/route-in-memory.repository';

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get('/routes', async (req: Request, res: Response) => {
  const listAllRouteUseCase = new ListAllCreateRouteUseCase(routeRepo);

  const output = await listAllRouteUseCase.execute();
  res.json(output);
})

app.post('/routes', async (req: Request, res: Response) => {
  const createRouteUseCase = new CreateRouteUseCase(routeRepo);

  const output = await createRouteUseCase.execute(req.body);
  res.status(201).json(output);
})

app.listen(port, () => {console.log(`Server is running on port ${port}`)});