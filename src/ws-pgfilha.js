/*
OBJETIVO
@titulo : Fontes eólica e solar transformam região Nordeste em exportadora líquida de energia elétrica
@linkimg: "https://www.gov.br/pt-br/noticias/energia-minerais-e-combustiveis/2022/03/fontes-eolica-e-solar-transformam-regiao-nordeste-em-exportadora-liquida-de-energia-eletrica/894249a9-77f0-41c5-afbc-f7cc62adde48.jpeg/@@images/b4db1206-2bc2-4f06-96be-4003fe5b65a5.jpeg"
@datapublicacao: Publicado em 02/03/2022 15h32
@texto: Informe técnico publicado na sexta-feira (25/02) pelo Governo Federal, por meio do Ministério de Minas e Energia (MME) e da Secretaria de Planejamento e Desenvolvimento Energético (SPE), aponta que fontes eólica e solar no Nordeste somaram 45,5% na matriz de geração de 2020 e, pela primeira vez, transformaram a região de importadora para exportadora líquida de energia elétrica. A nova configuração da geração no Brasil modificou os intercâmbios 
entre estados e regiões, proporcionando maior diversidade de soluções de suprimento.

*/
const axios = require(`axios`);
const cheerio = require(`cheerio`);

//const urlfilho = `https://www.gov.br/pt-br/noticias/energia-minerais-e-combustiveis/2022/03/fontes-eolica-e-solar-transformam-regiao-nordeste-em-exportadora-liquida-de-energia-eletrica`;
const urlfilho = `https://www.gov.br/pt-br/noticias/assistencia-social/2022/02/embaixada-do-brasil-na-ucrania-anuncia-trem-para-retirada-de-brasileiros`;



axios.get(urlfilho)
.then(resp=> {
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $(`h1`).text();
    const linkimg = $(`img`).attr(`src`);
    const datapublicacao = $(`span[class="value"]`).text();
    const texto = $(`div[property="rnews:articleBody"]`).text();

    
    //console.log(titulo);
    //console.log(linkimg);
    //console.log(datapublicacao);
    console.log(texto);
});