import React from 'react';
import './NotaFiscal.css';
import qrcode from '../../img/qrcode.png'

const NotaFiscal = () => {
    const itens = [{
        codigo: '123456789000',
        nome: 'Televisor Sankyo 60 polegadas',
        quantidade: 4,
        precoUnitario: 1200,
    }];

    const cliente = [{
        nome: 'Valdecir Nogueira',
        cpfCnpj: '123.456.789-00',
        endereco: 'Avenida Senador Simonsn Junior, 1904, Itatiba-SP',
    }];

    const empresa = {
        nome: 'Compra Certa.com',
        cnpj: '12.345.678/0001-16',
        endereco: 'Avenida Governador Calmon Viana, 1213, Jardim das Nações Unidas, Retiro das Árvores'
    };

    const impostos = 18;
    const dataCompra = '24/08/2039';
    const numeroNota = '240820391129';
    const chaveAcesso = '1234 5678 9101 1121 3141 5161 7181 9202';

    // Calcula o subtotal somando os valores de cada item
    const subtotal = itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);

    const totalGeral = subtotal + impostos;

    return (
        <div className="nota-fiscal">
            <h1>Nota Fiscal Eletrônica (NF-e)</h1>

            {/* Informações da Chave de Acesso */}
            <div className="chave-acesso">
                <p><strong>Chave de Acesso:</strong> {chaveAcesso}</p>
            </div>

            {/* Informações da Empresa Emitente */}
            <div className="nota-empresa">
                <h2>Emitente</h2>
                <p><strong>Razão Social:</strong> {empresa.nome}</p>
                <p><strong>CNPJ:</strong> {empresa.cnpj}</p>
                <p><strong>Endereço:</strong> {empresa.endereco}</p>
            </div>

            {/* Informações do Cliente */}
            <div className="nota-cliente">
                <h2>Destinatário</h2>
                <p><strong>Nome:</strong> {cliente[0].nome}</p>
                <p><strong>CPF/CNPJ:</strong> {cliente[0].cpfCnpj}</p>
                <p><strong>Endereço:</strong> {cliente[0].endereco}</p>
            </div>

            {/* Número da Nota e Data */}
            <div className="nota-header">
                <p><strong>Número da Nota:</strong> {numeroNota}</p>
                <p><strong>Data de Emissão:</strong> {dataCompra}</p>
            </div>

            {/* Tabela de Itens */}
            <table className="nota-itens">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição do Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário (R$)</th>
                        <th>Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {itens.map((item, index) => (
                        <tr key={index}>
                            <td>{item.codigo}</td>
                            <td>{item.nome}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.precoUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            <td>{(item.quantidade * item.precoUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Resumo de Totais */}
            <div className="nota-totais">
                <p><strong>Subtotal:</strong> {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p><strong>Impostos:</strong> {impostos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <h3>Total Geral: {totalGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
            </div>

            {/* Dados Complementares */}
            <div className="nota-complementares">
                <h2>Dados Adicionais</h2>
                <p><strong>Observações:</strong> Obrigado por comprar conosco!</p>
                <p><strong>Protocolo de Autorização:</strong> 123456789012345</p>
            </div>

            {/* QR Code */}
            <div className="nota-qrcode">
                <img src={qrcode} alt="QR Code Nota Fiscal" className="qrcode" />
                <p>Consulta disponível no portal nacional da NF-e</p>
            </div>
        </div>
    );
};

export default NotaFiscal;
