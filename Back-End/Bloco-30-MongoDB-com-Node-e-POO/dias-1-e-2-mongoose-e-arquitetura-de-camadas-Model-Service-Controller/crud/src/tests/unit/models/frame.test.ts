import { expect  } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockForChange, frameMockForChangeWithId, frameMockWithId } from '../../mocks/frameMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves([frameMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockForChangeWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Creat a frame', () => {
    it('Success', async () => {
      const newFrame = await frameModel.create(frameMock);
      expect(newFrame).to.be.deep.equal(frameMockWithId);
    });
  });

  describe('Search a frame', () => {
    it('Success', async () => {
      const framesFound = await frameModel.readOne(frameMockWithId._id);
      expect(framesFound).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameModel.readOne('123ERRADO');
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('Read a frame', () => {
    it('Success', async () => {
      const arrayFrames = await frameModel.read();
      expect(arrayFrames).to.be.deep.equal([frameMockWithId]);
    });
  });

  describe('Destroy a frame', () => {
    it('Success', async () => {
      const framesDestroyed = await frameModel.destroy(frameMockWithId._id);
      expect(framesDestroyed).to.be.deep.equal(frameMockWithId);
    });

    it('Failure', async () => {
      try {
        await frameModel.destroy('123ERRADO');
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('Update a Frame', () => {
    it('Success', async () => {
      const framesChanged = await frameModel.update(frameMockWithId._id, frameMockForChange);
      expect (framesChanged).to.be.deep.equal(frameMockForChangeWithId);
    });

    it('Failure', async () => {
      try {
        await frameModel.update('123ERRADO', frameMockForChange);
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });
});