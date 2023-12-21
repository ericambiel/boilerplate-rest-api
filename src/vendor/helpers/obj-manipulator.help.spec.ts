import { nameObjectArrFromFirst } from '@helpers/obj-manipulator.help';

describe('Unit Test for manipulateObj', () => {
  const arrayNumered = [
    {
      '0': 'Solicitação',
      '1': 'Fluig',
      '2': 'Cliente',
      '3': 'OM/OP',
      '4': 'Início',
      '5': 'Fim',
      '6': 'Tempo',
      '7': 'Descrição',
      rowId: 3,
    },
    {
      '0': '',
      '1': 'OKK',
      '2': 'MADERO Residente + TI',
      '3': '1000320',
      '4': '13/05/22 10:00',
      '5': '13/05/22 11:29',
      '6': '01:29',
      rowId: 4,
    },
    {
      '0': '',
      '1': 'OKK',
      '2': 'MADERO Residente + TI',
      '3': '1000320',
      '4': '13/05/22 11:30',
      '5': '13/05/22 13:30',
      '6': '02:00',
      rowId: 5,
    },
    {
      '0': '',
      '1': 'OKK',
      '2': 'MADERO Residente + TI',
      '3': '1000320',
      '4': '20/05/22 16:00',
      '5': '20/05/22 17:00',
      '6': '01:00',
      rowId: 6,
    },
  ];

  it('Unit test to arrayNumeredToArrayNamedHead function', () => {
    const t = nameObjectArrFromFirst(arrayNumered, { undefinedTo: '' });
    console.log(t);
  });
});
