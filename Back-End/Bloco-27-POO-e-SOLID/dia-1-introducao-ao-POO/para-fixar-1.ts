class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Creating tv ${brand}`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`Tv ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      this._connectedTo = 'Not connected'
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('LG', 40, 'Full HD', ['HDMI', 'VGA']);

tv1.turnOn();

tv1.connectedTo = 'WI-FI';

console.log('Connected to: ', tv1.connectedTo);

export default Tv;