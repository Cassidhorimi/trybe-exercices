import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Service', () => {
  const frameModel = new FrameModel();
  const frameService = new FrameService(frameModel);

  before(() => {
    sinon.stub(frameModel, 'create').resolves(frameMockWithId);
    sinon.stub(frameModel, 'readOne')
      .onCall(0).resolves(frameMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(frameModel, 'read').resolves([frameMockWithId]);
    sinon.stub(frameModel, 'destroy')
      .onCall(0).resolves(frameMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(frameModel, 'update')
      .onCall(0).resolves(frameMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Frame', () => {
    it('Success', async () => {
      const frameCreated = await frameService.create(frameMock);

      expect(frameCreated).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameService.create({} as any);
      } catch (err: any) {
        expect(err).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      const frameCreated = await frameService.readOne(frameMockWithId._id);
      
      expect(frameCreated).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameService.readOne(frameMockWithId._id);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {
      const frames = await frameService.read();
      expect(frames).to.be.deep.equal([frameMockWithId]);
    });
  });

  describe('Destroy Frame', () => {
    it('Success', async () => {
      const frame = await frameService.destroy(frameMockWithId._id);
      expect(frame).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameService.destroy(frameMockWithId._id);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Update Frame', () => {
    it('Success', async () => {
      const frames = await frameService.update(frameMockWithId._id, frameMock);
      expect(frames).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameService.update(frameMockWithId._id, {} as any);
      } catch (err: any) {
        expect(err.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });
});