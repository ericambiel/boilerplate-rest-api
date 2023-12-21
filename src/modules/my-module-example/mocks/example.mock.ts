const TaskOMResendMock = {
  processInstanceId: 0,
  processId: '047',
  version: 6,
  taskUserId: 'ambiele',
  completeTask: true,
  currentMovto: 0,
  managerMode: false,
  selectedDestinyAfterAutomatic: -1,
  conditionAfterAutomatic: -1,
  selectedColleague: [],
  comments: '',
  newObservations: [],
  appointments: [],
  attachments: [],
  digitalSignature: false,
  formData: [
    {
      name: 'gerente',
      value: 'sevarolb',
    },
    {
      name: 'nomeGerente',
      value: '',
    },
    {
      name: 'dtAprovacao',
      value: '',
    },
    {
      name: 'horaAprovacao',
      value: '',
    },
    {
      name: 'apontamentosRealizadosJson',
      value:
        '[{"realizadoId":"1","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"04/06/2023","realizadoInicio":"07:51","realizadoFim":"17:43","realizadoHoras":"09:52","realizadoObservacao":"Teste em Produção Pré-golive","realizadoAprovado":"true"},{"realizadoId":"3","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"05/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"4","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"06/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"5","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"07/06/2023","realizadoInicio":"08:00","realizadoFim":"08:59","realizadoHoras":"00:59","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"6","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000266","realizadoCodOMOP":"1000266","realizadoProjeto":"Contrato Decathlon IT2006024","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"07/06/2023","realizadoInicio":"15:01","realizadoFim":"17:52","realizadoHoras":"02:51","realizadoObservacao":"Acionamento Example - Expedição Esteira Barueri","realizadoAprovado":"true"},{"realizadoId":"7","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"12/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"8","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"13/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"9","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"14/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"10","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"15/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"11","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"16/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"12","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"18/06/2023","realizadoInicio":"08:00","realizadoFim":"18:29","realizadoHoras":"10:29","realizadoObservacao":"Teste em Produção Pré-golive","realizadoAprovado":"true"},{"realizadoId":"13","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"19/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"14","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"20/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"15","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"21/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"16","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"22/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"17","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"23/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"18","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"25/06/2023","realizadoInicio":"07:54","realizadoFim":"17:41","realizadoHoras":"09:47","realizadoObservacao":"Teste em Produção Pré-golive","realizadoAprovado":"true"},{"realizadoId":"19","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"26/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"20","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"27/06/2023","realizadoInicio":"08:00","realizadoFim":"12:00","realizadoHoras":"04:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"21","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"27/06/2023","realizadoInicio":"12:45","realizadoFim":"15:50","realizadoHoras":"03:05","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"22","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000377","realizadoCodOMOP":"1000377","realizadoProjeto":"CONTRATO MADERO Visitas + TI FO1904020","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"27/06/2023","realizadoInicio":"15:51","realizadoFim":"17:52","realizadoHoras":"02:01","realizadoObservacao":"Pedido nao finaliza - Critico","realizadoAprovado":"true"},{"realizadoId":"23","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000377","realizadoCodOMOP":"1000377","realizadoProjeto":"CONTRATO MADERO Visitas + TI FO1904020","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"28/06/2023","realizadoInicio":"08:00","realizadoFim":"10:00","realizadoHoras":"02:00","realizadoObservacao":"Pedido nao finaliza - Critico","realizadoAprovado":"true"},{"realizadoId":"24","txtAprovacao":"Sim","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"28/06/2023","realizadoInicio":"10:01","realizadoFim":"17:00","realizadoHoras":"06:59","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"true"},{"realizadoId":"25","txtAprovacao":"","aprovadoAprovacaoCheckbox":"on","realizadoNumeroOMOP":"1000204","realizadoCodOMOP":"1000204","realizadoProjeto":"BRF PRONTA GROSSA MU1807041","realizadoOperacaoTarefa":"20","realizadoOperacaoTarefaNome":"HORAS TRABALHADAS","realizadoData":"29/06/2023","realizadoInicio":"08:00","realizadoFim":"17:00","realizadoHoras":"09:00","realizadoObservacao":"BRF itens faltantes para entrega do projeto","realizadoAprovado":"false"}]',
    },
    {
      name: 'apontamentosAprovados',
      value: 'true',
    },
    {
      name: 'txtPrecisaAprovar',
      value: 'Não',
    },
    {
      name: 'solicitacao',
      value: '',
    },
    {
      name: 'solicitante',
      value: 'Eric Ambiel',
    },
    {
      name: 'txtMatriculaSolicitante',
      value: '',
    },
    {
      name: 'txtEmailSolicitante',
      value: '',
    },
    {
      name: 'dataSolicitacao',
      value: '30/06/2023',
    },
    {
      name: 'txtHoraSolicitacao',
      value: '08:13:55',
    },
    {
      name: 'rbEstabelecimento',
      value: '200',
    },
    {
      name: 'tipoApontamento',
      value: 'OM',
    },
    {
      name: 'codTecnico',
      value: '102878',
    },
    {
      name: 'nomeTecnico',
      value: 'Eric Ambiel',
    },
    {
      name: 'atividades',
      value: 'Atendimento Chamados',
    },
    {
      name: 'observacoes',
      value: '',
    },
    {
      name: 'apontamentoNumeroOM_OP',
      value: '',
    },
    {
      name: 'apontamentoCodOM_OP',
      value: '',
    },
    {
      name: 'apontamentoProjeto',
      value: '',
    },
    {
      name: 'apontamentoOperacaoTarefa',
      value: '',
    },
    {
      name: 'apontamentoData',
      value: '',
    },
    {
      name: 'apontamentoInicio',
      value: '',
    },
    {
      name: 'apontamentoFim',
      value: '',
    },
    {
      name: 'apontamentoHoras',
      value: '',
    },
    {
      name: 'apontamentoObservacao',
      value: '',
    },
    {
      name: 'realizadoId',
      value: '',
    },
    {
      name: 'txtAprovacao',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP',
      value: '',
    },
    {
      name: 'realizadoCodOMOP',
      value: '',
    },
    {
      name: 'realizadoProjeto',
      value: '',
    },
    {
      name: 'realizadoOperacaoTarefa',
      value: '',
    },
    {
      name: 'realizadoOperacaoTarefaNome',
      value: '',
    },
    {
      name: 'realizadoData',
      value: '',
    },
    {
      name: 'realizadoInicio',
      value: '',
    },
    {
      name: 'realizadoFim',
      value: '',
    },
    {
      name: 'realizadoHoras',
      value: '',
    },
    {
      name: 'realizadoObservacao',
      value: '',
    },
    {
      name: 'realizadoAprovado',
      value: '',
    },
    {
      name: 'realizadoId___1',
      value: '1',
    },
    {
      name: 'txtAprovacao___1',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___1',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___1',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___1',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___1',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___1',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___1',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___1',
      value: '04/06/2023',
    },
    {
      name: 'realizadoInicio___1',
      value: '07:51',
    },
    {
      name: 'realizadoFim___1',
      value: '17:43',
    },
    {
      name: 'realizadoHoras___1',
      value: '09:52',
    },
    {
      name: 'realizadoObservacao___1',
      value: 'Teste em Produção Pré-golive',
    },
    {
      name: 'realizadoAprovado___1',
      value: 'true',
    },
    {
      name: 'realizadoId___3',
      value: '3',
    },
    {
      name: 'txtAprovacao___3',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___3',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___3',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___3',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___3',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___3',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___3',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___3',
      value: '05/06/2023',
    },
    {
      name: 'realizadoInicio___3',
      value: '08:00',
    },
    {
      name: 'realizadoFim___3',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___3',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___3',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___3',
      value: 'true',
    },
    {
      name: 'realizadoId___4',
      value: '4',
    },
    {
      name: 'txtAprovacao___4',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___4',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___4',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___4',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___4',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___4',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___4',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___4',
      value: '06/06/2023',
    },
    {
      name: 'realizadoInicio___4',
      value: '08:00',
    },
    {
      name: 'realizadoFim___4',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___4',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___4',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___4',
      value: 'true',
    },
    {
      name: 'realizadoId___5',
      value: '5',
    },
    {
      name: 'txtAprovacao___5',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___5',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___5',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___5',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___5',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___5',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___5',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___5',
      value: '07/06/2023',
    },
    {
      name: 'realizadoInicio___5',
      value: '08:00',
    },
    {
      name: 'realizadoFim___5',
      value: '08:59',
    },
    {
      name: 'realizadoHoras___5',
      value: '00:59',
    },
    {
      name: 'realizadoObservacao___5',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___5',
      value: 'true',
    },
    {
      name: 'realizadoId___6',
      value: '6',
    },
    {
      name: 'txtAprovacao___6',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___6',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___6',
      value: '1000266',
    },
    {
      name: 'realizadoCodOMOP___6',
      value: '1000266',
    },
    {
      name: 'realizadoProjeto___6',
      value: 'Contrato Decathlon IT2006024',
    },
    {
      name: 'realizadoOperacaoTarefa___6',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___6',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___6',
      value: '07/06/2023',
    },
    {
      name: 'realizadoInicio___6',
      value: '15:01',
    },
    {
      name: 'realizadoFim___6',
      value: '17:52',
    },
    {
      name: 'realizadoHoras___6',
      value: '02:51',
    },
    {
      name: 'realizadoObservacao___6',
      value: 'Acionamento Example - Expedição Esteira Barueri',
    },
    {
      name: 'realizadoAprovado___6',
      value: 'true',
    },
    {
      name: 'realizadoId___7',
      value: '7',
    },
    {
      name: 'txtAprovacao___7',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___7',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___7',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___7',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___7',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___7',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___7',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___7',
      value: '12/06/2023',
    },
    {
      name: 'realizadoInicio___7',
      value: '08:00',
    },
    {
      name: 'realizadoFim___7',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___7',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___7',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___7',
      value: 'true',
    },
    {
      name: 'realizadoId___8',
      value: '8',
    },
    {
      name: 'txtAprovacao___8',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___8',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___8',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___8',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___8',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___8',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___8',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___8',
      value: '13/06/2023',
    },
    {
      name: 'realizadoInicio___8',
      value: '08:00',
    },
    {
      name: 'realizadoFim___8',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___8',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___8',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___8',
      value: 'true',
    },
    {
      name: 'realizadoId___9',
      value: '9',
    },
    {
      name: 'txtAprovacao___9',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___9',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___9',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___9',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___9',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___9',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___9',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___9',
      value: '14/06/2023',
    },
    {
      name: 'realizadoInicio___9',
      value: '08:00',
    },
    {
      name: 'realizadoFim___9',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___9',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___9',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___9',
      value: 'true',
    },
    {
      name: 'realizadoId___10',
      value: '10',
    },
    {
      name: 'txtAprovacao___10',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___10',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___10',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___10',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___10',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___10',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___10',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___10',
      value: '15/06/2023',
    },
    {
      name: 'realizadoInicio___10',
      value: '08:00',
    },
    {
      name: 'realizadoFim___10',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___10',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___10',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___10',
      value: 'true',
    },
    {
      name: 'realizadoId___11',
      value: '11',
    },
    {
      name: 'txtAprovacao___11',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___11',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___11',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___11',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___11',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___11',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___11',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___11',
      value: '16/06/2023',
    },
    {
      name: 'realizadoInicio___11',
      value: '08:00',
    },
    {
      name: 'realizadoFim___11',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___11',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___11',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___11',
      value: 'true',
    },
    {
      name: 'realizadoId___12',
      value: '12',
    },
    {
      name: 'txtAprovacao___12',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___12',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___12',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___12',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___12',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___12',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___12',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___12',
      value: '18/06/2023',
    },
    {
      name: 'realizadoInicio___12',
      value: '08:00',
    },
    {
      name: 'realizadoFim___12',
      value: '18:29',
    },
    {
      name: 'realizadoHoras___12',
      value: '10:29',
    },
    {
      name: 'realizadoObservacao___12',
      value: 'Teste em Produção Pré-golive',
    },
    {
      name: 'realizadoAprovado___12',
      value: 'true',
    },
    {
      name: 'realizadoId___13',
      value: '13',
    },
    {
      name: 'txtAprovacao___13',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___13',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___13',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___13',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___13',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___13',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___13',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___13',
      value: '19/06/2023',
    },
    {
      name: 'realizadoInicio___13',
      value: '08:00',
    },
    {
      name: 'realizadoFim___13',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___13',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___13',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___13',
      value: 'true',
    },
    {
      name: 'realizadoId___14',
      value: '14',
    },
    {
      name: 'txtAprovacao___14',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___14',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___14',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___14',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___14',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___14',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___14',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___14',
      value: '20/06/2023',
    },
    {
      name: 'realizadoInicio___14',
      value: '08:00',
    },
    {
      name: 'realizadoFim___14',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___14',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___14',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___14',
      value: 'true',
    },
    {
      name: 'realizadoId___15',
      value: '15',
    },
    {
      name: 'txtAprovacao___15',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___15',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___15',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___15',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___15',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___15',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___15',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___15',
      value: '21/06/2023',
    },
    {
      name: 'realizadoInicio___15',
      value: '08:00',
    },
    {
      name: 'realizadoFim___15',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___15',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___15',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___15',
      value: 'true',
    },
    {
      name: 'realizadoId___16',
      value: '16',
    },
    {
      name: 'txtAprovacao___16',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___16',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___16',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___16',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___16',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___16',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___16',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___16',
      value: '22/06/2023',
    },
    {
      name: 'realizadoInicio___16',
      value: '08:00',
    },
    {
      name: 'realizadoFim___16',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___16',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___16',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___16',
      value: 'true',
    },
    {
      name: 'realizadoId___17',
      value: '17',
    },
    {
      name: 'txtAprovacao___17',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___17',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___17',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___17',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___17',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___17',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___17',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___17',
      value: '23/06/2023',
    },
    {
      name: 'realizadoInicio___17',
      value: '08:00',
    },
    {
      name: 'realizadoFim___17',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___17',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___17',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___17',
      value: 'true',
    },
    {
      name: 'realizadoId___18',
      value: '18',
    },
    {
      name: 'txtAprovacao___18',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___18',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___18',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___18',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___18',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___18',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___18',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___18',
      value: '25/06/2023',
    },
    {
      name: 'realizadoInicio___18',
      value: '07:54',
    },
    {
      name: 'realizadoFim___18',
      value: '17:41',
    },
    {
      name: 'realizadoHoras___18',
      value: '09:47',
    },
    {
      name: 'realizadoObservacao___18',
      value: 'Teste em Produção Pré-golive',
    },
    {
      name: 'realizadoAprovado___18',
      value: 'true',
    },
    {
      name: 'realizadoId___19',
      value: '19',
    },
    {
      name: 'txtAprovacao___19',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___19',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___19',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___19',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___19',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___19',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___19',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___19',
      value: '26/06/2023',
    },
    {
      name: 'realizadoInicio___19',
      value: '08:00',
    },
    {
      name: 'realizadoFim___19',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___19',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___19',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___19',
      value: 'true',
    },
    {
      name: 'realizadoId___20',
      value: '20',
    },
    {
      name: 'txtAprovacao___20',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___20',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___20',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___20',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___20',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___20',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___20',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___20',
      value: '27/06/2023',
    },
    {
      name: 'realizadoInicio___20',
      value: '08:00',
    },
    {
      name: 'realizadoFim___20',
      value: '12:00',
    },
    {
      name: 'realizadoHoras___20',
      value: '04:00',
    },
    {
      name: 'realizadoObservacao___20',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___20',
      value: 'true',
    },
    {
      name: 'realizadoId___21',
      value: '21',
    },
    {
      name: 'txtAprovacao___21',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___21',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___21',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___21',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___21',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___21',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___21',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___21',
      value: '27/06/2023',
    },
    {
      name: 'realizadoInicio___21',
      value: '12:45',
    },
    {
      name: 'realizadoFim___21',
      value: '15:50',
    },
    {
      name: 'realizadoHoras___21',
      value: '03:05',
    },
    {
      name: 'realizadoObservacao___21',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___21',
      value: 'true',
    },
    {
      name: 'realizadoId___22',
      value: '22',
    },
    {
      name: 'txtAprovacao___22',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___22',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___22',
      value: '1000377',
    },
    {
      name: 'realizadoCodOMOP___22',
      value: '1000377',
    },
    {
      name: 'realizadoProjeto___22',
      value: 'CONTRATO MADERO Visitas + TI FO1904020',
    },
    {
      name: 'realizadoOperacaoTarefa___22',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___22',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___22',
      value: '27/06/2023',
    },
    {
      name: 'realizadoInicio___22',
      value: '15:51',
    },
    {
      name: 'realizadoFim___22',
      value: '17:52',
    },
    {
      name: 'realizadoHoras___22',
      value: '02:01',
    },
    {
      name: 'realizadoObservacao___22',
      value: 'Pedido nao finaliza - Critico',
    },
    {
      name: 'realizadoAprovado___22',
      value: 'true',
    },
    {
      name: 'realizadoId___23',
      value: '23',
    },
    {
      name: 'txtAprovacao___23',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___23',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___23',
      value: '1000377',
    },
    {
      name: 'realizadoCodOMOP___23',
      value: '1000377',
    },
    {
      name: 'realizadoProjeto___23',
      value: 'CONTRATO MADERO Visitas + TI FO1904020',
    },
    {
      name: 'realizadoOperacaoTarefa___23',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___23',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___23',
      value: '28/06/2023',
    },
    {
      name: 'realizadoInicio___23',
      value: '08:00',
    },
    {
      name: 'realizadoFim___23',
      value: '10:00',
    },
    {
      name: 'realizadoHoras___23',
      value: '02:00',
    },
    {
      name: 'realizadoObservacao___23',
      value: 'Pedido nao finaliza - Critico',
    },
    {
      name: 'realizadoAprovado___23',
      value: 'true',
    },
    {
      name: 'realizadoId___24',
      value: '24',
    },
    {
      name: 'txtAprovacao___24',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___24',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___24',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___24',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___24',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___24',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___24',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___24',
      value: '28/06/2023',
    },
    {
      name: 'realizadoInicio___24',
      value: '10:01',
    },
    {
      name: 'realizadoFim___24',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___24',
      value: '06:59',
    },
    {
      name: 'realizadoObservacao___24',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___24',
      value: 'true',
    },
    {
      name: 'realizadoId___25',
      value: '25',
    },
    {
      name: 'txtAprovacao___25',
      value: 'Sim',
    },
    {
      name: 'aprovadoAprovacaoCheckbox___25',
      value: 'on',
    },
    {
      name: 'realizadoNumeroOMOP___25',
      value: '1000204',
    },
    {
      name: 'realizadoCodOMOP___25',
      value: '1000204',
    },
    {
      name: 'realizadoProjeto___25',
      value: 'BRF PRONTA GROSSA MU1807041',
    },
    {
      name: 'realizadoOperacaoTarefa___25',
      value: '20',
    },
    {
      name: 'realizadoOperacaoTarefaNome___25',
      value: 'HORAS TRABALHADAS',
    },
    {
      name: 'realizadoData___25',
      value: '29/06/2023',
    },
    {
      name: 'realizadoInicio___25',
      value: '08:00',
    },
    {
      name: 'realizadoFim___25',
      value: '17:00',
    },
    {
      name: 'realizadoHoras___25',
      value: '09:00',
    },
    {
      name: 'realizadoObservacao___25',
      value: 'BRF itens faltantes para entrega do projeto',
    },
    {
      name: 'realizadoAprovado___25',
      value: 'true',
    },
    {
      name: 'chkTipoApontamento',
      value: '',
    },
    {
      name: 'apontamentoOperacaoTarefaNome',
      value: '',
    },
  ],
  isDigitalSigned: false,
  versionDoc: 0,
  selectedState: 12,
  internalFields: [],
  transferTaskAfterSelection: false,
  currentState: 1,
};

// eslint-disable-next-line import/prefer-default-export
export { TaskOMResendMock };
