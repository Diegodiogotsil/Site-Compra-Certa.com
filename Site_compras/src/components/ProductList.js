// src/components/ProductList.js
import React, { useRef } from 'react';
import Product from './Product';
import './ProductList.css';


const ProductList = () => {
  const listRef = useRef(null);

  const products = [
    {
      id: 1,
      name: ' Sony Ericcson Walkman W810i ',
      price: 422.00,
      image: 'imagens/foto celular.webp',
      description: 'O Sony Ericsson W810i possui um design atraente; um teclado melhorado; ótima qualidade musical; e uma gama generosa de recursos excepcionais, incluindo Bluetooth, uma câmera de 2 megapixels, um MP3 player, um slot para cartão de memória e um viva-voz.'
    },
    {
      id: 2,
      name: 'Smart TV LG 65 Polegadas',
      price:  1689.98,
      image: 'imagens/tvlg65.jpg',
      description: 'Mergulhe em um mundo de conteúdo gratuito e recomendações personalizadas para todos com quem você compartilha o controle remoto. Melhore sua imagem e som com a IA do processador de IA α5 Gen5 4K, projetado para surpreender, transformando seu conteúdo regular em 4K.'
    },
    {
      id: 3,
      name: 'Mini Sistem Sony GRX 800',
      price: 1885.00,
      image: 'imagens/sonysom.jpg',
      description: 'Mergulhe no mini Sitem Sony RDX 800, e sinta uma profunda onda de energia e com sons stereo e funçoes que te levarão ao prazer absoluto ao ouvir suas musicas preferidas'
    },
    { id: 4, 
      name: "Cadeira Gamer Prizi Canvas ", 
      price: 569.00, 
      image: 'imagens/cadeira.webp', 
      description: "Desenvolvida para que o usuário tenha uma experiência extremamente confortável e ergonômica, mesmo que precise utilizar por muitas horas seguidas, seja para jogar, trabalhar, assistir um filme ou série, etcEstofado e encosto para as costas ergonomicamente confortáveis e de alta qualidadedensidade" 
    },
    { id: 5, 
      name: "Ventilador de Coluna Arno 40cm Coluna Turbo Force", 
      price: 400.00, 
      image: 'imagens/ventilador.jpg', 
      description: "Agora os ambientes da sua casa ficarão muito mais agradáveis, frescos e o melhor, sem barulho! o ventilador turbo force da arno é super silencioso e mais forte que os demais e ainda conta com um design sofisticado, discreto e totalmente desmontável, que além de facilitar a limpeza, ainda possibilita armazená-lo de forma simples quando não estiver sendo usado. "
    },
    { id: 6,  
     name: "Ar Condicionado Split Consul Dual Inverter 12.000 BTU/h", 
     price: 2099.56, 
     image: 'imagens/arcondicionado.webp', 
     description: "Ar Condicionado Split Consul Dual Inverter 12.000 BTU/h Frio Monofásico Branco CBK12EB/CBL12EB - 220VO Ar Condicionado Split Consul Inverter com Serpentina de Cobre é 75% mais eficiente*. Ele é mais silencioso que uma biblioteca." 
    },
    { id: 7, 
      name: "Máquina de Lavar Roupa WW11DG5B25AB AI Eco Bubble™ 11kg", 
      price: 3400.00, 
      image: 'imagens/maquina de lavar.jpg', 
      description: "AI Eco Bubble™ (com deteção de tecidos)Conectividade SmartThings e Modo Energia IACiclo Super Rápido 39Ciclo Redução de MicrofibrasDesign Bespoke" 
    }, 
    {
      id: 8,
      name: ' Celular kyocera Soho',
      price: 599.00,
      image: 'imagens/kyocera soho.webp',
      description: 'Kyocera SoHo é um telefone clamshell CDMA. Possui display colorido, segundo identificador de chamadas externo, viva-voz, toques polifônicos, BREW, serviço de e-mail, navegação na Internet, EMS e discagem ativada por voz.'
    },
    {
      id: 9,
      name: ' Coberdrom Sherpa Edredom Dupla Face vermelho',
      oldprice:'De R$ 422,00',
      price: 211.00,
      image: 'imagens/edredon.jpg',
      description: 'Ideal para deixar o ambiente mais elegante e confortavél, Manta Microfibra 100% Poliéster, Tecido Sherpa 100% Poliéster Excelente custo benefício'
    },
    {
      id: 10,
      name: ' Cobertor Manta Felpuda Liso Cama Casal King marron',
      oldprice:'De R$ 380,00 ',
      price: 190.00,
      image: 'imagens/cobertor.jpg',
      description: 'Manta Flannel Alta Qualidade Toque Macio ótimo para o inverno e frio, Ótimo acabamentoTamanho Ideal, Caimento perfeito na cama.'
    },
    {
      id: 11,
      name: 'Geladeira Consul Duplex CRM44AK Frost Free ',
      price: 2698.90,
      image: 'imagens/geladeira.webp',
      description: 'A Geladeira Consul Duplex Frost Free CRM44AK é superespaçosa e possui funcionalidades que vão facilitar o seu dia a dia. Com capacidade para 386 litros, ela conta com prateleiras ajustáveis, que deixam a tarefa de organizar os alimentos muito mais fácil. Além disso, este refrigerador possui a função turbo, para a sua bebida ficar gelada em menos tempo, freezer espaçoso, iluminação em LED e um design moderno que vai deixar a sua cozinha mais bonita.'
    },
    {
      id: 12,
      name: 'Fogão Consul 5 Bocas CFS5VAR com Mesa de Vidro ',
      price: 1789.00,
      image: 'imagens/fogao.webp',
      description: 'Equipe sua cozinha com o moderno e prático Fogão Consul CFS5VAR. São 5 bocas com acendimento automático, que liga facilmente o queimador, para você poder mostrar sua categoria nas receitas tanto das refeições diárias como em situações festivas.'
    },
    {
      id: 13,
      name: ' Bicicleta Aro 29 KRW Alumínio Shimano TZ 24 Vel Freio a Disco Ltx S40',
      price: 799.00,
      image: 'imagens/bicicleta.webp',
      description: 'Bicicleta Aro 29 KRW Alumínio Shimano TZ 24 Vel Freio a Disco Ltx S40. A bicicleta KRW S40 foi desenvolvida para quem quer realizar um passeio e pegar trilhas leves. Possui câmbios Shimano. Com seu quadro em alumínio 6061, fornece segurança e leveza no seu pedal. Possuí também freio a disco, que oferece uma maior segurança. Possuí diversas cores que garante um estilo próprio para você. Quadro em alumínio 6061. Abraçadeira alumínio de selim 31,8mm. Alavancas de câmbio ez-fire 8 velocidades. Aro aéro 29 pared dupla 36f.'
    },
    
  ];

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-list-container">
      <button className="scroll-button left" onClick={scrollLeft}>❮</button>
      <div className="product-list" ref={listRef}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>❯</button>
    </div>
  );
}

export default ProductList;
