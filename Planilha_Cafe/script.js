const inputs = document.querySelectorAll("input");

const button = document.querySelector("button");

var form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    
    const dataDeHoje = document.querySelector(
        "input[name=data]"
    ).value;
    const caixaDeHoje = document.querySelector(
        "input[name=caixa]"
    ).value;
    const insumoNome = document.querySelector(
        "input[name=nomeinsumo]"
    ).value;
    const insumoDescricao = document.querySelector(
        "input[name=descricaoinsumo]"
    ).value;
    const insumoQuantidade = document.querySelector(
        "input[name=quantidadeinsumo]"
    ).value;
    const insumoValorUnitario = document.querySelector(
        "input[name=valorunitarioinsumo]"
    ).value;

    const insumoValorTotal = (Number(insumoValorUnitario) * Number(insumoQuantidade));

    const moDescricao = document.querySelector(
        "input[name=modescricao]"
    ).value;
    const moValor = document.querySelector(
        "input[name=movalue]"
    ).value;
    const manutencaoDescricao = document.querySelector(
        "input[name=manutencaodescricao]"
    ).value;
    const manutencaoValor = document.querySelector(
        "input[name=manutencaomaquinas]"
    ).value;
    const combustivelValor = document.querySelector(
        "input[name=combustivel]"
    ).value;

    const gastosTotais = Number(insumoValorTotal) + Number(moValor) + Number(manutencaoValor) + Number(combustivelValor);

    const lucroDiario = Number(caixaDeHoje) - Number(gastosTotais);

    e.preventDefault();

    var form = document.getElementById("form");

    const response = await fetch(form.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'Data': dataDeHoje,
            'Valor que Entrou': caixaDeHoje,
            'Nome do Insumo': insumoNome,
            'Descrição do Insumo': insumoDescricao,
            'Quantidade do Insumo': insumoQuantidade,
            'Valor Unitário do Insumo': insumoValorUnitario,
            'Valor Total do Insumo': insumoValorTotal,
            'Descrição da Mão de Obra': moDescricao,
            'Valor da Mão de Obra': moValor,
            'Descrição da Manutenção': manutencaoDescricao,
            'Valor da Manutenção': manutencaoValor,
            'Gastos com Combustível': combustivelValor,
            'Gastos Totais': gastosTotais,
            'Lucro de Hoje': lucroDiario
        }),
    })
});
