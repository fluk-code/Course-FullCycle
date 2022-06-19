import crypto from 'crypto';

export type GeoPosition = {
  lat: number;
  lng: number;
};

export type RouteProperties = {
  title: string;
  startPosition: GeoPosition;
  endPosition: GeoPosition;
  points?: GeoPosition[];
};

export class Route {
  private readonly _id: string;
  private _props: Required<RouteProperties>;

  private constructor(props: RouteProperties, id?: string) {
    this._id = id || crypto.randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this._props = {};
      return;
    }

    this._props = {
      ...props,
      points: props.points || [],
    };
  }

  static create(prop: RouteProperties, id?: string) {
    return new Route(prop, id);
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._props.title;
  }

  private set title(value: string) {
    this._props.title = value;
  }

  public get startPosition(): GeoPosition {
    return this._props.startPosition;
  }

  private set startPosition(value: GeoPosition) {
    this._props.startPosition = value;
  }

  public get endPosition(): GeoPosition {
    return this._props.endPosition;
  }

  private set endPosition(value: GeoPosition) {
    this._props.endPosition = value;
  }

  public get points(): GeoPosition[] {
    return this._props.points;
  }

  private set points(values: GeoPosition[]) {
    this._props.points = values;
  }

  public updateTitle(value: string): void {
    this._props.title = value;
  }

  public updatePosition(
    startPosition: GeoPosition,
    endPosition: GeoPosition,
  ): void {
    this._props.startPosition = startPosition;
    this._props.endPosition = endPosition;
  }

  public updatePoints(points: GeoPosition[]): void {
    this._props.points = points;
  }

  toJSON() {
    return {
      id: this._id,
      ...this._props,
    };
  }
}
