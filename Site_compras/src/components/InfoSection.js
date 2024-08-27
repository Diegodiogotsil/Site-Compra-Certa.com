// src/components/InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-box">
        <img src="imagens/cartao.webp" alt="Pagamento" />
        <div>
          <h3 className="titulo">Escolha como pagar</h3>
          <p>No Site Compra certa, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o cartão Compra Certa.</p>
          <a href="#">Como pagar com Compra Certa</a>
        </div>
      </div>
      <div className="info-box">
        <img src="imagens/frete gratis.jpg" alt="Frete grátis" />
        <div>
          <h3 className="titulo">Frete grátis por ser cliente do Compra Certa.com+</h3>
          <p>Além disso, você pode escolher um dia da semana para receber suas compras com "Seu dia de entregas".</p>
          <a href="#">Saiba mais sobre este benefício</a>
        </div>
      </div>
      <div className="info-box">
        <img src="imagens/imagem segurança site.jpeg" alt="Segurança" />
        <div>
          <h3 className="titulo">Segurança, do início ao fim</h3>
          <p>Você não gostou do que comprou? Devolva! No Compra Certa não há nada que você não possa fazer, porque você está sempre protegido.</p>
          <a href="#">Como te protegemos</a>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
