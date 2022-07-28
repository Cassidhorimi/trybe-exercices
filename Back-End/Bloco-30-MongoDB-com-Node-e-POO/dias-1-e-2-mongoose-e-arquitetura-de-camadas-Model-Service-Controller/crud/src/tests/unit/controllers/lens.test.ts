import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import LensController from '../../../controllers/Lens';
import LensService from '../../../services/Lens';
import LensModel from '../../../models/Lens';
import {lensMock, lensMockWithId} from '../../mocks/lensMock';

describe('Lens Controller', () => {
  const lensModel = new LensModel();
  const lensService = new LensService(lensModel);
  const lensController = new LensController(lensService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(lensService, 'create').resolves(lensMock);
    sinon.stub(lensService, 'readOne').resolves(lensMock);
    sinon.stub(lensService, 'read').resolves([lensMockWithId]);
    sinon.stub(lensService, 'destroy').resolves(lensMockWithId);
    sinon.stub(lensService, 'update').resolves(lensMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Lens', () => {
    it('Success', async () => {
      req.body = lensMock;
      await lensController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('ReadOne Lens', () => {
    it('Success', async () => {
      req.params = { id: lensMockWithId._id };
      await lensController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMock)).to.be.true;
    });
  });

  describe('Read Lens', () => {
    it('Success', async () => {
      await lensController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([lensMockWithId])).to.be.true;
    });
  });

  describe('Destroy Lens', () => {
    it('Success', async () => {
      req.params = { id: lensMockWithId._id };
      await lensController.destroy(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithId)).to.be.true;
    });
  });

  describe('Update Lens', () => {
    it('Success', async () => {
      req.params = { id: lensMockWithId._id };
      req.body = lensMock;
      await lensController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(lensMockWithId)).to.be.true;
    });
  });
});