const inputs = document.querySelectorAll("input");

const button = document.querySelector("button");

var form = document.getElementById("form");

form.addEventListener("submit", async (e) => {

    const dataDeHoje = document.querySelector(
        "input[name=data]"
    ).value;
    const loteBois = document.querySelector(
        "input[name=lote]"
    ).value;
    const tipoBoiVacaOuBezerro = document.querySelector(
        "input[name=tipo]"
    ).value;
    const sexoMachoOuFemea = document.querySelector(
        "input[name=sexo]"
    ).value;
    const arrobasChegada = document.querySelector(
        "input[name=arrobasiniciais]"
    ).value;
    const valorDaCompra = document.querySelector(
        "input[name=valorpagocompra]"
    ).value;

    const valorTotalCompra = (Number(arrobasChegada) * Number(valorDaCompra));

    const arrobasSaida = document.querySelector(
        "input[name=arrobasfinais]"
    ).value;
    const valorDaVenda = document.querySelector(
        "input[name=valorpagovenda]"
    ).value;

    const valorTotalVenda = (Number(arrobasSaida) * Number(valorDaVenda));

    const gastosSal = document.querySelector(
        "input[name=sal]"
    ).value;
    const gastosVacina = document.querySelector(
        "input[name=vacina]"
    ).value;
    const gastosRacao = document.querySelector(
        "input[name=racao]"
    ).value;

    const gastosTotais = Number(gastosSal) + Number(gastosVacina) + Number(gastosRacao) + Number(valorTotalCompra);

    const lucroSobreLote = Number(valorTotalVenda) - Number(gastosTotais);

    e.preventDefault();

    var form = document.getElementById("form");

    const response = await fetch(form.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'Data': dataDeHoje,
            'Lote': loteBois,
            'Tipo': tipoBoiVacaOuBezerro,
            'Sexo': sexoMachoOuFemea,
            'Arrobas do lote ao chegar': arrobasChegada,
            'Valor do Arroba pago no lote': valorDaCompra,
            'Valor total pago no lote': valorTotalCompra,
            'Com quantos arrobas o lote saiu': arrobasSaida,
            'Valor de venda do arroba': valorDaVenda,
            'Valor total da venda do lote': valorTotalVenda,
            'Gastos com sal': gastosSal,
            'Gastos com Vacinação e Remédios': gastosVacina,
            'Gastos com ração': gastosRacao,
            'Gastos totais': gastosTotais,
            'Lucro obtido sobre lote': lucroSobreLote
        }),
    })
});