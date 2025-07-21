export const services = [
  {
    id: 'instalacao',
    title: 'Instalação Profissional',
    description: 'Instalação completa realizada por técnicos certificados',
    icon: '🔧',
    features: [
      'Técnicos certificados e experientes',
      'Ferramentas e equipamentos profissionais',
      'Teste completo de funcionamento',
      'Garantia no serviço',
      'Limpeza do local após o serviço'
    ],
    pricing: [
      { type: 'Split até 12.000 BTUs', price: '800,90*' },
      { type: 'Split 18.000 a 24.000 BTUs', price: '1000,80*' },
      { type: 'Cassete até 36.000 BTUs', price: 'Valor a combinar' },
      { type: 'Multi Split', price: 'Valor a combinar' }
    ],
    duration: '2-4 horas',
    warranty: 'A combinar'
  },
  {
    id: 'manutencao',
    title: 'Manutenção Preventiva',
    description: 'Mantenha seu ar condicionado funcionando perfeitamente',
    icon: '🛠️',
    features: [
      'Limpeza completa dos filtros',
      'Verificação do gás refrigerante',
      'Teste de funcionamento',
      'Limpeza da serpentina',
      'Verificação elétrica completa'
    ],
    pricing: [
      { type: 'Split residencial', price: 'R$ 220,00' },
      { type: 'Cassete comercial', price: 'R$ 250,00' },
      { type: 'Multi Split', price: 'R$ 150,00 por evap.' },
      { type: 'Plano anual (4 visitas)', price: 'R$ 400,00' }
    ],
    duration: '1-2 horas',
    warranty: '3 meses'
  },
  {
    id: 'assistencia',
    title: 'Assistência Técnica',
    description: 'Reparo e solução de problemas técnicos',
    icon: '⚡',
    features: [
      'Diagnóstico completo do problema',
      'Reparo com peças originais',
      'Técnicos especializados por marca',
      'Orçamento sem compromisso',
      'Garantia nas peças e serviços'
    ],
    pricing: [
      { type: 'Visita técnica', price: 'Gratuita' },
      { type: 'Reparo simples', price: 'A partir de R$ 150,00' },
      { type: 'Troca de compressor', price: 'A partir de R$ 800,00' },
      { type: 'Recarga de gás', price: 'R$ 250,00' }
    ],
    duration: '1-3 horas',
    warranty: '3 meses'
  },
  {
    id: 'limpeza',
    title: 'Limpeza Profunda',
    description: 'Higienização completa para melhor qualidade do ar',
    icon: '🧽',
    features: [
      'Desmontagem completa da evaporadora',
      'Limpeza com produtos específicos',
      'Higienização antibacteriana',
      'Limpeza do dreno',
      'Eliminação de odores'
    ],
    pricing: [
      { type: 'Split residencial', price: 'R$ 220,00' },
      { type: 'Cassete comercial', price: 'R$ 150,00' },
      { type: 'Multi Split', price: 'R$ 150,00 por evap.' },
      { type: 'Pacote família (3 splits)', price: 'R$ 500,00' }
    ],
    duration: '2-3 horas',
    warranty: '3 meses'
  }
];

export const serviceAreas = [
  'São Paulo - Capital',
  'Grande São Paulo',
  'ABC Paulista',
  'Guarulhos',
  'Osasco',
  'Campinas',
  'Santos',
  'São José dos Campos'
];

export const workingHours = {
  weekdays: 'Segunda a Sexta: 8h às 18h',
  saturday: 'Sábado: 8h às 14h',
  sunday: 'Domingo: Emergências',
  emergency: '24h para emergências comerciais'
};

