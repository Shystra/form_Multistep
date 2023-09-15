"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFormDataToHtml = void 0;
function formatFormDataToHtml(data) {
    return `
    <h2>Dados do Formulário:</h2>
    ${data.residencia ? `<p><strong>Residência:</strong> ${data.residencia}</p>` : ""}
    ${data.empresa_comercio ? `<p><strong>Empresa/Comércio:</strong> ${data.empresa_comercio}</p>` : ""}
    ${data.condominio ? `<p><strong>Condomínio:</strong> ${data.condominio}</p>` : ""}
    ${data.casa_urbana ? `<p><strong>Casa Urbana:</strong> ${data.casa_urbana}</p>` : ""}
    ${data.casa_rural ? `<p><strong>Casa Rural:</strong> ${data.casa_rural}</p>` : ""}
    ${data.menos_5_horas_por_dia ? `<p><strong>Menos de 5 horas por dia:</strong> ${data.menos_5_horas_por_dia}</p>` : ""}
    ${data.mais_5_horas_por_dia ? `<p><strong>Mais de 5 horas por dia:</strong> ${data.mais_5_horas_por_dia}</p>` : ""}

    ${data.sempre_tem_alguem_la ? `<p><strong>Sempre tem alguem:</strong> ${data.sempre_tem_alguem_la}</p>` : ""}
    ${data.A_PÉ ? `<p><strong>A pé:</strong> ${data.A_PÉ}</p>` : ""}
    ${data.CARRO ? `<p><strong>Carro:</strong> ${data.CARRO}</p>` : ""}
    ${data.MOTO ? `<p><strong>Moto:</strong> ${data.MOTO}</p>` : ""}
    ${data.Patio_Fundos ? `<p><strong>Patio Fundos:</strong> ${data.Patio_Fundos}</p>` : ""}
    ${data.Patio_Frente_e_Fundos ? `<p><strong>Patio Frente e Fundos:</strong> ${data.Patio_Frente_e_Fundos}</p>` : ""}
    ${data.Nao_possui_patio ? `<p><strong>Não possui patio:</strong> ${data.Nao_possui_patio}</p>` : ""}
    ${data.Sim_Roubo_Casa ? `<p><strong>Sim Roubo Casa:</strong> ${data.Sim_Roubo_Casa}</p>` : ""}
    ${data.Nao_Roubo_Casa ? `<p><strong>Não Roubo Casa:</strong> ${data.Nao_Roubo_Casa}</p>` : ""}
    ${data.Sim_Sistema ? `<p><strong>Sim Sistema:</strong> ${data.Sim_Sistema}</p>` : ""}
    ${data.Nao_Sistema ? `<p><strong>Não Sistema:</strong> ${data.Nao_Sistema}</p>` : ""}
    ${data.Empresa_Centro_Comercial ? `<p><strong>Empresa Centro Comercial:</strong> ${data.Empresa_Centro_Comercial}</p>` : ""}
    ${data.Empresa_Area_Industrial ? `<p><strong>Empresa Area Industrial:</strong> ${data.Empresa_Area_Industrial}</p>` : ""}
    ${data.Predio_Comercial ? `<p><strong>Predio Comercial:</strong> ${data.Predio_Comercial}</p>` : ""}
    ${data.Comercio_Rua ? `<p><strong>Comercio Rua:</strong> ${data.Comercio_Rua}</p>` : ""}
    ${data.Ate_2_Funcionarios ? `<p><strong>Até 2 Funcionarios:</strong> ${data.Ate_2_Funcionarios}</p>` : ""}
    ${data.De_3_a_10_Funcionarios ? `<p><strong>De 3 a 10 Funcionarios:</strong> ${data.De_3_a_10_Funcionarios}</p>` : ""}
    ${data.Mais_de_10_Funcionarios ? `<p><strong>Mais de 10 Funcionarios:</strong> ${data.Mais_de_10_Funcionarios}</p>` : ""}
    ${data.Horario_Comercial ? `<p><strong>Horario Comercial:</strong> ${data.Horario_Comercial}</p>` : ""}
    ${data.Horario_Noturno ? `<p><strong>Horario Noturno:</strong> ${data.Horario_Noturno}</p>` : ""}
    ${data.Horario_24h ? `<p><strong>Horario 24h:</strong> ${data.Horario_24h}</p>` : ""}
    ${data.Baixo_Valor_Financeiro ? `<p><strong>Baixo Valor Financeiro:</strong> ${data.Baixo_Valor_Financeiro}</p>` : ""}
    ${data.Medio_Valor_Financeiro ? `<p><strong>Medio Valor Financeiro:</strong> ${data.Medio_Valor_Financeiro}</p>` : ""}
    ${data.Alto_Valor_Financeiro ? `<p><strong>Alto Valor Financeiro:</strong> ${data.Alto_Valor_Financeiro}</p>` : ""}
    ${data.Sim_Roubo_Empresa ? `<p><strong>Sim Roubo Empresa:</strong> ${data.Sim_Roubo_Empresa}</p>` : ""}
    ${data.Nao_Roubo_Empresa ? `<p><strong>Não Roubo Empresa:</strong> ${data.Nao_Roubo_Empresa}</p>` : ""}
    ${data.Condominio_Residencial ? `<p><strong>Condominio Residencial:</strong> ${data.Condominio_Residencial}</p>` : ""}
    ${data.Condominio_Comercial ? `<p><strong>Condominio Comercial:</strong> ${data.Condominio_Comercial}</p>` : ""}
    ${data.Até_10_Unidades ? `<p><strong>Até 10 Unidades:</strong> ${data.Até_10_Unidades}</p>` : ""}
    ${data.Até_50_Unidades ? `<p><strong>Até 50 Unidades:</strong> ${data.Até_50_Unidades}</p>` : ""}
    ${data.Acima_50_Unidades ? `<p><strong>Acima 50 Unidades:</strong> ${data.Acima_50_Unidades}</p>` : ""}

    ${data.name ? `<p><strong>Nome:</strong> ${data.name}</p>` : ""}
    ${data.cep ? `<p><strong>CEP:</strong> ${data.cep}</p>` : ""}
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
    ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ""}
    `;
}
exports.formatFormDataToHtml = formatFormDataToHtml;
