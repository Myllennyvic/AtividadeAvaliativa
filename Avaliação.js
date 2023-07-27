alert ("Digite suas notas de Arquitetura de Hardware e Software");

const atividadeEmSala = Number(prompt("Digite sua nota de ATIVIDADES EM SALA 0 a 10 :"));
const atividadeParaCasa = Number(prompt("Digite sua nota de ATIVIDADES PARA CASA 0 a 10 :"));
const situaçãoAprendizagem  = Number(prompt("Digite sua nota de SITUAÇÃO DE APRENDIZAGEM 0 a 10 : "));
const avaliacaoObjetivas = Number(prompt("Digite sua nota da  AVALIÇÃO OBJETIVA 0 a 10 :"));

const mediafinal = (atividadeEmSala + atividadeParaCasa + situaçãoAprendizagem + avaliacaoObjetivas) / 4 ;
console.log (mediafinal)

alert ("Digite suas notas de  Metodologias de Desenvolvimento de Projetos");

const atividadeEmSala1 = Number(prompt("Digite sua nota de ATIVIDADES EM SALA 0 a 10 :"));
const atividadeParaCasa1 = Number(prompt("Digite sua nota de ATIVIDADES PARA CASA 0 a 10 :"));
const situaçãoAprendizagem1  = Number(prompt("Digite sua nota de SITUAÇÃO DE APRENDIZAGEM 0 a 10 : "));
const avaliacaoObjetivas1 = Number(prompt("Digite sua nota da  AVALIÇÃO OBJETIVA 0 a 10 :"));

const mediafinal1 = (atividadeEmSala1 + atividadeParaCasa1 + situaçãoAprendizagem1 + avaliacaoObjetivas1) / 4 ;
console.log (mediafinal1)

alert ("Digite suas notas de  Lógica Computacional");

const atividadeEmSala2 = Number(prompt("Digite sua nota de ATIVIDADES EM SALA 0 a 10 :"));
const atividadeParaCasa2 = Number(prompt("Digite sua nota de ATIVIDADES PARA CASA 0 a 10 :"));
const situaçãoAprendizagem2  = Number(prompt("Digite sua nota de SITUAÇÃO DE APRENDIZAGEM 0 a 10 : "));
const avaliacaoObjetivas2 = Number(prompt("Digite sua nota da  AVALIÇÃO OBJETIVA 0 a 10 :"));

const mediafinal2 = (atividadeEmSala2 + atividadeParaCasa2 + situaçãoAprendizagem2 + avaliacaoObjetivas2) / 4 ;
console.log (mediafinal2)

alert ("Digite suas notas de  Fundamentos de banco de dados");

const atividadeEmSala3 = Number(prompt("Digite sua nota de ATIVIDADES EM SALA 0 a 10 :"));
const atividadeParaCasa3 = Number(prompt("Digite sua nota de ATIVIDADES PARA CASA 0 a 10 :"));
const situaçãoAprendizagem3 = Number(prompt("Digite sua nota de SITUAÇÃO DE APRENDIZAGEM 0 a 10 : "));
const avaliacaoObjetivas3 = Number(prompt("Digite sua nota da  AVALIÇÃO OBJETIVA 0 a 10 :"));

const mediafinal3 = (atividadeEmSala3 + atividadeParaCasa3 + situaçãoAprendizagem3 + avaliacaoObjetivas3) / 4 ;
console.log (mediafinal3)

alert (`A sua média final em Arquitetura de Hardware e Software é : ${mediafinal} `);
alert (`A sua média final em Metodologias de Desenvolvimento de Projetos é: ${mediafinal1} `);
alert (`A sua média final em Lógica Computacional é : ${mediafinal2} `);
alert (`A sua média final em Fundamentos de banco de dados é : ${mediafinal3} `);