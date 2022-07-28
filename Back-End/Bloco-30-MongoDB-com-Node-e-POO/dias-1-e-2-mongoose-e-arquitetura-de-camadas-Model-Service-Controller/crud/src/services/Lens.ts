import IService from '../interfaces/IService';
import ILens, { LensZodSchema } from '../interfaces/Lens';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class LensService implements IService<ILens> {
  private _lens: IModel<ILens>;

  constructor(model: IModel<ILens>) {
    this._lens = model;
  }

  public async create(obj: ILens): Promise<ILens> {
    const parsed = LensZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._lens.create(obj);
  }

  public async readOne(_id: string): Promise<ILens> {
    const lens = await this._lens.readOne(_id);
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);

    return lens;
  }

  public async read(): Promise<ILens []> {
    const lens = await this._lens.read();

    return lens;
  }

  public async destroy(_id: string): Promise<ILens> {
    const lens = await this._lens.destroy(_id);
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);
    return lens;
  }

  public async update(_id: string, obj: ILens): Promise<ILens> {
    const lens = await this._lens.update(_id, obj);
    if (!lens) throw new Error(ErrorTypes.EntityNotFound);
    return lens;
  }
}

export default LensService;