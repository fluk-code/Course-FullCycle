import crypto from 'crypto'

export type GeoPosition = {
  lat: number, 
  lng: number
};

export type RouteProperties = {
  title: string;
  startPosition: GeoPosition;
  endPosition: GeoPosition;
  points?: GeoPosition[];
}

export class Route{
  private readonly _id: string; 
  private _props: Required<RouteProperties>;

  constructor(
    props: RouteProperties,
    id?: string
  ) {
    this._id = id || crypto.randomUUID();
    this._props = {
      ...props,
      points: props.points || [],
    }
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._props.title;
  }

  public get startPosition(): GeoPosition {
    return this._props.startPosition
  }

  public get endPosition(): GeoPosition {
    return this._props.endPosition
  }

  public get points(): GeoPosition[] {
    return this._props.points
  }

  public updateTitle(value: string): void {
    this._props.title = value
  }

  public updatePosition(startPosition: GeoPosition, endPosition: GeoPosition): void {
    this._props.startPosition = startPosition;
    this._props.endPosition = endPosition;
  }

  public updatePoints(points: GeoPosition[]): void {
    this._props.points = points;
  }

  private set title(value: string) {
    this._props.title = value;
  }

  private set startPosition(value: GeoPosition) {
    this._props.startPosition = value;
  }

  private set endPosition(value: GeoPosition) {
    this._props.endPosition = value;
  }

  private set points(values: GeoPosition[]) {
    this._props.points = values;
  }

  toJSON() {
    return {
      id: this._id,
      ...this._props,
    };
  }
}