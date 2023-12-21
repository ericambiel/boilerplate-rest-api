import { worksheetArrayArrayMock } from '@modules/googleSheets/infra/mocks/worksheetArrayArray.mock';
import { worksheetTestSchema } from '@modules/googleSheets/infra/mocks/worksheetArrayObj.mock';
import { arrayArrayToObjArrayHead } from '@helpers/obj-manipulator.help';

describe('Unit test - smallHelper', () => {
  it('It should be transform ArrayArray to ArrayObj', () => {
    const arrayObjs = arrayArrayToObjArrayHead(worksheetArrayArrayMock, {
      undefinedTo: '',
    });

    arrayObjs.forEach(obj => expect(obj).toEqual(worksheetTestSchema));
  });
});
