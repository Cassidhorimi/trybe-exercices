import { expect  } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockForChange, lensMockForChangeWithId, lensMockWithId } from '../../mocks/lensMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockForChangeWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('Success', async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('Success', async () => {
      const lensFound = await lensModel.readOne(lensMockWithId._id);
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('read a lens', () => {
    it('Success', async () => {
      const arraylens = await lensModel.read();
      expect(arraylens).to.be.deep.equal([lensMockWithId]);
    });
  });

  describe('destroy a lens', () => {
    it('Success', async () => {
      const lensDestroyed = await lensModel.destroy(lensMockWithId._id);
      expect(lensDestroyed).to.be.deep.equal(lensMockWithId);
    });

    it('Failure', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });

  describe('Update a Frame', () => {
    it('Success', async () => {
      const lensChanged = await lensModel.update(lensMockWithId._id, lensMockForChange);
      expect (lensChanged).to.be.deep.equal(lensMockForChangeWithId);
    });

    it('Failure', async () => {
      try {
        await lensModel.update('123ERRADO', lensMockForChange);
      } catch (err: any) {
        expect(err.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });
});