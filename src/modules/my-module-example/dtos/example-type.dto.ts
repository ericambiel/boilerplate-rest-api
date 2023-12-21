export type ExampleTypeDto = {
  /** @example
   * ['nrOM_OP', '1000204', 'tpApontamento', 'OM']
   * ['nrOM_OP', '127335', 'tpApontamento', 'OP']
   */
  filterFields: ['nrOM_OP', string, 'tpApontamento'];
  /** @example
   * totvsBuscaTarefaOperacaoAptoExample
   */
  datasetId: 'totvsBuscaTarefaOperacaoAptoExample';
  searchField?: 'descricao' | string;
  resultFields?: ['codigoTarefaOperacao' | string, 'descricao' | string];
};
