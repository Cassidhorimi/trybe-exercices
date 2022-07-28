import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import LensModel from '../../../models/Lens';
import LensService from '../../../services/Lens';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Service', () => {
  const lensModel = new LensModel();
  const lensService = new LensService(lensModel);

  before(() => {
    sinon.stub(lensModel, 'create').resolves(lensMockWithId);
    sinon.stub(lensModel, 'readOne')
      .onCall(0).resolves(lensMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(lensModel, 'read').resolves([lensMockWithId]);
    sinon.stub(lensModel, 'destroy')
      .onCall(0).resolves(lensMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(lensModel, 'update')
      .onCall(0).resolves(lensMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Lens', () => {
    it('Success', async () => {
      const lensCreated = await lensService.create(lensMock);

      expect(lensCreated).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.create({} as any);
      } catch (err: any) {
        expect(err).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('ReadOne Lens', () => {
    it('Success', async () => {
      const lens = await lensService.readOne(lensMockWithId._id);
      
      expect(lens).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.readOne(lensMockWithId._id);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Read Lens', () => {
    it('Success', async () => {
      const lens = await lensService.read();
      expect(lens).to.be.deep.equal([lensMockWithId]);
    });
  });

  describe('Destroy Lens', () => {
    it('Success', async () => {
      const lens = await lensService.destroy(lensMockWithId._id);
      expect(lens).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensService.destroy(lensMockWithId._id);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Update lens', () => {
    it('Success', async () => {
      const lens = await lensService.update(lensMockWithId._id, lensMock);
      expect(lens).to.be.deep.equal(lensMockWithId);
    });
    it('Failure', async () => {
      try {
        await lensService.update(lensMockWithId._id, {} as any);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    })
  })
});