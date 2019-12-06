import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private veiculos: Veiculos[] = [
    {
      title: 'Volvo VERA',
      content: 'Ideal para operações regulares e repetitivas: com distâncias curtas, grandes volumes de mercadorias e alta precisão na entrega, como o transporte entre centros logísticos.',
      imgUrl: 'https://www.frotacia.com.br/wp-content/uploads/2018/09/DhqEASosCrRN4YbB6eLzfGxW1T-696x464.jpg'
    },
    {
      title: 'Tesla S',
      content: 'Todos os novos carros da Tesla são fornecidos de fábrica com hardware avançado capaz de fornecer recursos de piloto automático hoje e recursos completos de direção automática no futuro - através de atualizações de software projetadas para melhorar a funcionalidade ao longo do tempo.',
      imgUrl: 'https://ogimg.infoglobo.com.br/in/14532909-b70-e9f/FT1086A/652/x2014-766417276-tesla_model_s_1.jpg_20141107-2.jpg.pagespeed.ic.YT7piNzLs0.jpg'
    },
    {
      title: 'Tesla Model 3',
      content: 'Todos os novos carros da Tesla são fornecidos de fábrica com hardware avançado capaz de fornecer recursos de piloto automático hoje e recursos completos de direção automática no futuro - através de atualizações de software projetadas para melhorar a funcionalidade ao longo do tempo.',
      imgUrl: 'https://s2.glbimg.com/TiLo4Y6gCaLaPG5WnoF_UJwL31A=/620x413/e.glbimg.com/og/ed/f/original/2017/11/08/tesla-model-3.jpg'
    },
    {
      title: 'Tesla Model X',
      content: 'O modelo X é um dos SUVs mais seguros de todos os tempos. Construído a partir do zero como veículo elétrico, a carroceria, o chassi, as restrições e a tecnologia da bateria oferecem uma probabilidade muito baixa de ferimentos nos ocupantes.',
      imgUrl: 'https://cdn.aquelamaquina.pt/images/2019-01/img_944x629$2019_01_24_16_57_26_137341.jpg'
    },
    {
      title: 'MOTOROiD',
      content: 'Por meio da tecnologia AMCES, o veículo de duas rodas consegue recolher o pezinho, levantar e ir até o seu dono, sozinha, desde que em baixas velocidades.',
      imgUrl: 'https://s2.glbimg.com/ozMOFIj9ANvLqOH-H2NLfOHyV0Y=/620x413/e.glbimg.com/og/ed/f/original/2018/01/11/slideimg01.jpg'
    },
    {
      title: 'AUTONOM SHUTTLE',
      content: 'Autônomo, sem motorista e elétrico: o ônibus desenvolvido pela NAVYA atende cidades e locais privados, trazendo ainda mais mobilidade.',
      imgUrl: 'https://cnet4.cbsistatic.com/img/QWZlUR6Ez1M8VGwsnA6AHEVD25M=/2019/07/19/c0856e99-92e1-48bc-966c-331aff93b4be/navya-shuttle-promo.jpg'
    },
    {
      title: 'AUTONOM CAB',
      content: 'Primeiro taxi robotizado do mercado. Autônomo, personalizado e compartilhado, esta solução de mobilidade exclusiva fornece uma resposta aos principais desafios da mobilidade urbana.',
      imgUrl: 'https://mms.businesswire.com/media/20171107006107/en/623136/4/3_4RDO.jpg?download=1'
    },
    {
      title: 'Scania AXL',
      content: 'A Scania já tem caminhões autônomos em operações reais, como nos testes que realiza em parceria com a Rio Tinto em uma mina de sal na Austrália. Até agora, porém, os modelos operam com um condutor de segurança a bordo que pode intervir, caso seja necessário.',
      imgUrl: 'https://www.scania.com/group/en/wp-content/uploads/sites/2/2019/09/axl-wide-768x320.jpg'
    },
  ]

  constructor() { }

  getVeiculos() {
    return this.veiculos;
  }
}

export interface Veiculos {
  title: string;
  content: string;
  imgUrl: string;
}
