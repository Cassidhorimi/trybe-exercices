import { Router } from 'express';
import LensController from '../controllers/Lens';
import LensService from '../services/Lens';
import LensModel from '../models/Lens';

const route = Router();

const lens = new LensModel();
const lensService = new LensService(lens);
const lensController = new LensController(lensService);

const lensId = '/lens/:id';

route.post('/lens', (req, res) => lensController.create(req, res));
route.get(lensId, (req, res) => lensController.readOne(req, res));
route.get('/lens', (req, res) => lensController.read(req, res));
route.delete(lensId, (req, res) => lensController.destroy(req, res));
route.put(lensId, (req, res) => lensController.update(req, res));

export default route;
