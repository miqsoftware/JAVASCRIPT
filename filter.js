const monthOfYear = [
'Janeiro',
'Fevereiro',
'Março',
'Abril',
'Maio',
'Junho',
'Julho',
'Agosto',
'Setembro',
'Outubro',
'Novembro',
'Dezembro'
];

//O metodo filter filtrar informações de acordo com
// acondição passada retornando um novo array o as informações
// encontradas
monthOfYear.filter((month) => {
    if(month.includes('J') === true)
    console.log(month);
})
