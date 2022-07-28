import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import ILens from '../interfaces/Lens';

class LensController {
  constructor(private _service: IService<ILens>) { }

  public async create(req: Request & { body: ILens }, res: Response<ILens>) {
    const { degree, antiGlare, blueLightFilter } = req.body;
    const lens = { degree, antiGlare, blueLightFilter };
    const result = await this._service.create(lens);

    return res.status(201).json(result);
  }

  public async readOne(req: Request, res: Response<ILens>) {
    const result = await this._service.readOne(req.params.id);
    
    return res.status(200).json(result);
  }

  public async read(_req: Request, res: Response<ILens[]>) {
    const result = await this._service.read();

    return res.status(200).json(result);
  }

  public async destroy(req: Request, res: Response<ILens | null>) {
    const result = await this._service.destroy(req.params.id);

    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<ILens | null>) {
    const { id } = req.params;
    const { body } = req;
    const result = await this._service.update(id, body);

    return res.status(200).json(result);
  }
}

export default LensController;