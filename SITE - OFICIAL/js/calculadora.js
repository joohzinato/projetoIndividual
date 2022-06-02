var quantPessoas = 0;

function func_confirmar1() {

    quantPessoas = Number(ipt_quantPessoas.value);

    if (quantPessoas <= 0) {
        alert('Informe a quantidade de pessoas correto - A quantidade de pessoas tem que ser acima de 0')
    } else {
        display_parte1.style.display = 'none'
        display_parte2.style.display = 'block'
        display_parte3.style.display = 'none'
        display_parte4.style.display = 'none'
        display_parte5.style.display = 'none'
        // display_parte6.style.display = 'none'
    }
}

function func_boi() {
    boi.style.display = 'block'
    porco.style.display = 'none'
    frango.style.display = 'none'
    linguicaOutros.style.display = 'none'
}

function func_porco() {
    boi.style.display = 'none'
    porco.style.display = 'block'
    frango.style.display = 'none'
    linguicaOutros.style.display = 'none'
}

function func_frango() {
    boi.style.display = 'none'
    porco.style.display = 'none'
    frango.style.display = 'block'
    linguicaOutros.style.display = 'none'
}

function func_linguica() {
    boi.style.display = 'none'
    porco.style.display = 'none'
    frango.style.display = 'none'
    linguicaOutros.style.display = 'block'
}

var alcatra, picanha, maminha, fraldinha, contrafile, pernil, lombo, panceta, picanhaSuina, costelinha, coxinhaAsa, coracao, asa, linguicaChurrasco, linguicaToscana, queijoCoalho, salsichao, paoAlho = 0;

function func_confirmar2() {
    display_parte1.style.display = 'none'
    display_parte2.style.display = 'none'
    display_parte3.style.display = 'block'
    display_parte4.style.display = 'none'
    display_parte5.style.display = 'none'
    // display_parte6.style.display = 'none'

    if (ipt_alcatra.checked === true) {
        alcatra = 0.048 * quantPessoas;
    }

    if (ipt_picanha.checked === true) {
        picanha = 0.048 * quantPessoas;
    }

    if (ipt_maminha.checked === true) {
        maminha = 0.048 * quantPessoas;
    }

    if (ipt_fraldinha.checked === true) {
        fraldinha = 0.048 * quantPessoas;
    }

    if (ipt_contrafile.checked === true) {
        contrafile = 0.048 * quantPessoas;
    }

    if (ipt_pernil.checked === true) {
        pernil = 0.032 * quantPessoas;
    }

    if (ipt_lombo.checked === true) {
        lombo = 0.032 * quantPessoas;
    }

    if (ipt_panceta.checked === true) {
        panceta = 0.032 * quantPessoas;
    }

    if (ipt_picanhaSuina.checked === true) {
        picanhaSuina = 0.032 * quantPessoas;
    }

    if (ipt_costelinha.checked === true) {
        costelinha = 0.032 * quantPessoas;
    }

    if (ipt_coxinhaAsa.checked === true) {
        coxinhaAsa = 0.032 * quantPessoas;
    }

    if (ipt_coracao.checked === true) {
        coracao = 0.032 * quantPessoas;
    }

    if (ipt_asa.checked === true) {
        asa = 0.032 * quantPessoas;
    }

    if (ipt_linguicaChurrasco.checked === true) {
        linguicaChurrasco = 0.032 * quantPessoas;
    }

    if (ipt_linguicaToscana.checked === true) {
        linguicaToscana = 0.032 * quantPessoas;
    }

    if (ipt_queijoCoalho.checked === true) {
        queijoCoalho = 2 * quantPessoas;
    }

    if (ipt_salsichao.checked === true) {
        salsichao = 0.032 * quantPessoas;
    }

    if (ipt_paoAlho.checked === true) {
        paoAlho = 2 * quantPessoas;
    }

}

var arroz, maionese, vinagrete, farofa, limao = 0

function func_confirmar3() {
    display_parte1.style.display = 'none'
    display_parte2.style.display = 'none'
    display_parte3.style.display = 'none'
    display_parte4.style.display = 'block'
    display_parte5.style.display = 'none'
    // display_parte6.style.display = 'none'

    if (ipt_arroz.checked === true) {
        arroz = 0.070 * quantPessoas;
    }

    if (ipt_maionese.checked === true) {
        maionese = 0.080 * quantPessoas;
    }

    if (ipt_vinagrete.checked === true) {
        vinagrete = 0.070 * quantPessoas;
    }

    if (ipt_farofa.checked === true) {
        farofa = 0.030 * quantPessoas;
    }

    if (ipt_limao.checked === true) {
        limao = 0.045 * quantPessoas;
    }
}

var carvao, prato, copo, guardanapo, talheres, salGrosso = 0;

function func_confirmar4() {
    display_parte1.style.display = 'none'
    display_parte2.style.display = 'none'
    display_parte3.style.display = 'none'
    display_parte4.style.display = 'none'
    display_parte5.style.display = 'block'
    // display_parte6.style.display = 'none'

    if (ipt_carvao.checked === true) {
        carvao = 0.5 * quantPessoas;
    }

    if (ipt_pratos.checked === true) {
        prato = 2 * quantPessoas;
    }

    if (ipt_guardanapos.checked === true) {
        guardanapo = 10 * quantPessoas;
    }

    if (ipt_talheres.checked === true) {
        talheres = 2 * quantPessoas;
    }

    if (ipt_salGrosso.checked === true) {
        salGrosso = 0.050 * quantPessoas;
    }
}

function func_confirmar5() {

    display_parte1.style.display = 'none'
    display_parte2.style.display = 'none'
    display_parte3.style.display = 'none'
    display_parte4.style.display = 'none'
    display_parte5.style.display = 'none'
    // display_parte6.style.display = 'block'
}