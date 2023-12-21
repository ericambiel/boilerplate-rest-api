export default interface IExampleModel {
  // /**
  //  * Used to identify the task in API, usefully to bind with other different sources data.
  //  */
  // id: string;
  /**
   * Sequential number(string format) starting at 1
   * @example
   * '1'
   */
  realizadoId: string;
  txtAprovacao: 'Sim' | 'Não';
  /**
   * If the task is approved, this value is 'on' otherwise the value is 'off'.
   * Use it for an automatic approval, the opposite of 'txtPrecisaAprovar'.
   */
  aprovadoAprovacaoCheckbox: 'on' | 'off';
  /**
   * OM/OP Number.
   * @example
   * '1000204'
   */
  realizadoNumeroOMOP: string;
  /**
   * OM/OP Cod.
   * @example
   * '1000204'
   */
  realizadoCodOMOP: string;
  /**
   * Project description referring to OP/OM. Get from 'Dataset' - 'Find OM by ID'.
   * @example
   * 'BFF PRONTA FINA LL5874502'
   */
  realizadoProjeto: string;
  /**
   * Cod type of operation realized - Get from 'Workflow - Get Type of Work'
   * @default "20" | "301"
   * @example
   *            OM
   * DESLOCAMENTO DE IDA                — '10'
   * HORAS TRABALHADAS                  — '20' @default
   * DESLOCAMENTO DE VOLTA              — '30'
   *            OP
   * GGF TERCEIROS                      — '40'
   * HORAS ENGENHARIA MECANICA          — '100'
   * ENGENHARIA MECANICA - 22000        — '101'
   * HORAS ENGENHARIA ELETRICA          — '200'
   * ENGENHARIA ELETRICA - 23000        — '201'
   * ENGENHARIA ELETRICA - CATB - 23003 — '203'
   * HORAS ENGENHARIA IT                — '300'
   * GERENCIAMENTO DE IT - CATB 25002   — '301' @default
   * HORAS GERENCIA DE PROJETOS         — '400'
   * HORAS - INSTALAÇÃO                 — '500'
   * INSTALACAO CAT B - 31003           — '501'
   * HORAS - SERVICE - 30006            — '540'
   * Tecnicos - 30012                   — '541'
   * HORAS - SERVICE 30005              — '550'
   * Tecnicos - 30013                   — '552'
   * Tecnicos - 300016                  — '553'
   * Tecnicos 31003                     — '554'
   * ENGENHARIA R&D - 99994             — '555'
   * Tecnicos 31004                     — '556'
   */
  realizadoOperacaoTarefa: '20' | '301' | string;
  /**
   * Cod type of operation realized - Get from 'Workflow - Get Type of Work'
   * @example
   * 'HORAS TRABALHADAS'                  — '20'
   * 'GERENCIAMENTO DE IT - CATB 25002'   — '301'
   */
  realizadoOperacaoTarefaNome:
    | 'HORAS TRABALHADAS'
    | 'GERENCIAMENTO DE IT - CATB 25002'
    | string;
  /**
   * Date you performed the task.
   * @example
   * '02/08/2022'
   */
  realizadoData: string;
  /**
   * Local time you start the task.
   * @example
   * '08:05'
   */
  realizadoInicio: string;
  /**
   * Local time you end the task.
   * @example
   * '12:00'
   */
  realizadoFim: string;
  /**
   * Total task execution time.
   * @example
   * '03:55'
   */
  realizadoHoras: string;
  /**
   * Brief description of the task performed in the informed period.
   * @example
   * 'Validation / Construction of SDS screens'
   */
  realizadoObservacao: string;
  /**
   * If the task is approved, this value is 'true' otherwise the value is 'false'.
   * Use it for an automatic approval, the opposite of 'txtPrecisaAprovar'.
   */
  realizadoAprovado: 'true' | 'false';
}
