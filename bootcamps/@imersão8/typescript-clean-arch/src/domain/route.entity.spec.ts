import { GeoPosition, Route, RouteProperties } from './route.entity';

describe(`${Route.name} Unit Tests`, () => {
  it('constructor', () => {
    let routeProperties: RouteProperties = {
      title: 'some route',
      startPosition: {lat: 0, lng: 1},
      endPosition: {lat: 2, lng: 3}
    };

    let route = new Route(routeProperties);
    expect((route as any)._props).toStrictEqual({
      ... routeProperties,
      points: []
    });

    routeProperties.points = [{lat: 1, lng: 1}, {lat: 0, lng: 2}];
    route = new Route(routeProperties);

    expect(route.id).toBeDefined();
    expect((route as any)._props).toStrictEqual({
      ... routeProperties
    })
  });  

  it(`should update title when ${Route.prototype.updateTitle} is called`, () => {
    const routeProperties: RouteProperties = {
      title: 'some route',
      startPosition: {lat: 0, lng: 1},
      endPosition: {lat: 2, lng: 3}
    };


    const route = new Route(routeProperties);
    route.updateTitle('title updated');
    expect(route.title).toBe('title updated');
  });

  it(`should update position when ${Route.prototype.updatePosition} is called`, () => {
    const routeProperties: RouteProperties = {
      title: 'some route',
      startPosition: {lat: 0, lng: 1},
      endPosition: {lat: 2, lng: 3}
    };

    const route = new Route(routeProperties);
    route.updatePosition({lat: 10, lng: 11},  {lat: 12, lng: 13});
    expect(route.startPosition).toStrictEqual({lat: 10, lng: 11});
    expect(route.endPosition).toStrictEqual({lat: 12, lng: 13});
  }); 

  it(`should update points when ${Route.prototype.updatePoints} is called`, () => {
    const routeProperties: RouteProperties = {
      title: 'some route',
      startPosition: {lat: 0, lng: 1},
      endPosition: {lat: 2, lng: 3},
    };

    const points: GeoPosition[] =[
      {lat: 20, lng: 21},
      {lat: 21, lng: 22}
    ]

    const route = new Route(routeProperties);
    route.updatePoints(points);
    
    expect(route.points).toHaveLength(2);
    expect(route.points).toStrictEqual(points);
  }); 
  
});
