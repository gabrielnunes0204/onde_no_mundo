/* eslint-disable */

function mudarCores() {
  const botaoEscuro = document.querySelector("#escuro");
  const botaoClaro = document.querySelector("#claro");
  const body = document.querySelector("body");
  const textoMudar = document.querySelector(".modo p");
  const campoPesquisa = document.querySelector(".filtros .pesquisa input");
  const filtro = document.querySelector(".filtros .continentes");

  botaoEscuro.addEventListener("click", (event) => {
    event.preventDefault();

    //Mudando a cor de fundo e as cores de fontes do body
    body.style.background = "#222";
    body.style.color = "#fff";

    //Ocultando botão
    botaoClaro.style.display = "block";
    botaoEscuro.style.display = "none";

    //Mudando o texto
    textoMudar.innerHTML = "Modo Diurno";

    //Mudando o fundo, cores e borda do campo de pesquisa
    campoPesquisa.style.background = "#222";
    campoPesquisa.style.border = "1px solid #fff";
    campoPesquisa.style.color = "#fff";

    //Mudando o fundo, cores e borda do filtro
    filtro.style.background = "#222";
    filtro.style.border = "1px solid #fff";
    filtro.style.color = "#fff";
  });

  botaoClaro.addEventListener("click", (event) => {
    event.preventDefault();

    //Mudando a cor de fundo e as cores de fontes do body
    body.style.background = "#fff";
    body.style.color = "#000";

    //Ocultando botão
    botaoClaro.style.display = "none";
    botaoEscuro.style.display = "block";

    //Mudando texto
    textoMudar.innerHTML = "Modo Noturno";

    //Mudando o fundo, cores e borda do campo de pesquisa
    campoPesquisa.style.background = "#fff";
    campoPesquisa.style.border = "1px solid rgba(87, 87, 87, 0.5)";
    campoPesquisa.style.color = "#000";

    //Mudando o fundo, cores e borda do filtro
    filtro.style.background = "#fff";
    filtro.style.border = "1px solid rgba(87, 87, 87, 0.5)";
    filtro.style.color = "#000";
  });
}
mudarCores();

function filtrarPorNome() {
  const botaoPesquisa = document.querySelector(".lupa");
  const campoPesquisa = document.querySelector(".input-pesquisa");
  const paises = document.querySelectorAll(".pais");
  const arrayPaises = Array.from(paises);

  campoPesquisa.addEventListener("change", () => {
    if (campoPesquisa.value === "" || campoPesquisa.value === null) {
      arrayPaises.forEach((item) => {
        item.style.display = "initial";
      });
    }
  });

  botaoPesquisa.addEventListener("click", () => {
    if (campoPesquisa.value === "") {
      alert("Informe um valor válido");
    }

    if (
      campoPesquisa.value === "Brasil" ||
      campoPesquisa.value === "brasil" ||
      campoPesquisa.value === "BRASIL" ||
      campoPesquisa.value.includes("bra") ||
      campoPesquisa.value.includes("Bra")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[0].style.display = "initial";
        arrayPaises[0].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Alemanha" ||
      campoPesquisa.value === "alemanha" ||
      campoPesquisa.value === "ALEMANHA" ||
      campoPesquisa.value.includes("ale") ||
      campoPesquisa.value.includes("Ale")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[1].style.display = "initial";
        arrayPaises[1].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Japão" ||
      campoPesquisa.value === "japão" ||
      campoPesquisa.value === "JAPÃO" ||
      campoPesquisa.value === "japao" ||
      campoPesquisa.value === "Japao" ||
      campoPesquisa.value.includes("jap") ||
      campoPesquisa.value.includes("Jap")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[2].style.display = "initial";
        arrayPaises[2].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Camarões" ||
      campoPesquisa.value === "camarões" ||
      campoPesquisa.value === "CAMARÕES" ||
      campoPesquisa.value === "camaroes" ||
      campoPesquisa.value === "Camaroes" ||
      campoPesquisa.value.includes("cam") ||
      campoPesquisa.value.includes("Cam")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[3].style.display = "initial";
        arrayPaises[3].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Argentina" ||
      campoPesquisa.value === "argentina" ||
      campoPesquisa.value === "ARGENTINA" ||
      campoPesquisa.value.includes("arg") ||
      campoPesquisa.value.includes("Arg")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[4].style.display = "initial";
        arrayPaises[4].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Portugal" ||
      campoPesquisa.value === "portugal" ||
      campoPesquisa.value === "PORTUGAL" ||
      campoPesquisa.value.includes("por") ||
      campoPesquisa.value.includes("Por")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[5].style.display = "initial";
        arrayPaises[5].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Coréia do Sul" ||
      campoPesquisa.value === "coréia do sul" ||
      campoPesquisa.value === "CORÉIA DO SUL" ||
      campoPesquisa.value === "Coreia" ||
      campoPesquisa.value === "coreia" ||
      campoPesquisa.value === "COREIA" ||
      campoPesquisa.value.includes("cor") ||
      campoPesquisa.value.includes("Cor")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[6].style.display = "initial";
        arrayPaises[6].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Egito" ||
      campoPesquisa.value === "egito" ||
      campoPesquisa.value === "EGITO" ||
      campoPesquisa.value.includes("egi") ||
      campoPesquisa.value.includes("Egi")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[7].style.display = "initial";
        arrayPaises[7].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Australia" ||
      campoPesquisa.value === "australia" ||
      campoPesquisa.value === "AUSTRALIA" ||
      campoPesquisa.value === "Austrália" ||
      campoPesquisa.value === "austrália" ||
      campoPesquisa.value.includes("aus") ||
      campoPesquisa.value.includes("Aus")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[8].style.display = "initial";
        arrayPaises[8].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Chile" ||
      campoPesquisa.value === "chile" ||
      campoPesquisa.value === "CHILE" ||
      campoPesquisa.value.includes("chi") ||
      campoPesquisa.value.includes("Chi")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[9].style.display = "grid";
        arrayPaises[9].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Bélgica" ||
      campoPesquisa.value === "bélgica" ||
      campoPesquisa.value === "BÉLGICA" ||
      campoPesquisa.value === "Belgica" ||
      campoPesquisa.value === "belgica" ||
      campoPesquisa.value.includes("bel") ||
      campoPesquisa.value.includes("Bel")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[10].style.display = "initial";
        arrayPaises[10].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Samoa" ||
      campoPesquisa.value === "samoa" ||
      campoPesquisa.value === "SAMOA" ||
      campoPesquisa.value.includes("sam") ||
      campoPesquisa.value.includes("Sam")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[11].style.display = "initial";
        arrayPaises[11].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Costa do Marfim" ||
      campoPesquisa.value === "costa do marfim" ||
      campoPesquisa.value === "COSTA DO MARFIM" ||
      campoPesquisa.value === "costa" ||
      campoPesquisa.value === "marfim" ||
      campoPesquisa.value.includes("cos") ||
      campoPesquisa.value.includes("cos") ||
      campoPesquisa.value.includes("mar") ||
      campoPesquisa.value.includes("Mar")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[12].style.display = "initial";
        arrayPaises[12].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Estados Unidos" ||
      campoPesquisa.value === "estados unidos" ||
      campoPesquisa.value === "ESTADOS UNIDOS" ||
      campoPesquisa.value === "Estados" ||
      campoPesquisa.value === "estados" ||
      campoPesquisa.value.includes("est") ||
      campoPesquisa.value.includes("Est") ||
      campoPesquisa.value.includes("eua") ||
      campoPesquisa.value.includes("Eua")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[13].style.display = "initial";
        arrayPaises[13].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Turquia" ||
      campoPesquisa.value === "turquia" ||
      campoPesquisa.value === "TURQUIA" ||
      campoPesquisa.value.includes("tur") ||
      campoPesquisa.value.includes("Tur")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[14].style.display = "initial";
        arrayPaises[14].classList.add("ativo");
      });
    }

    if (
      campoPesquisa.value === "Holanda" ||
      campoPesquisa.value === "holanda" ||
      campoPesquisa.value === "HOLANDA" ||
      campoPesquisa.value.includes("hol") ||
      campoPesquisa.value.includes("Hol")
    ) {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[15].style.display = "initial";
        arrayPaises[15].classList.add("ativo");
      });
    }
  });
}
filtrarPorNome();

function filtrarPorContinente() {
  const filtro = document.querySelector(".continentes");
  const paises = document.querySelectorAll(".pais");
  const arrayPaises = Array.from(paises);

  filtro.addEventListener("change", () => {
    if ($(".continentes").val() == "Africa") {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[3].style.display = "block";
        arrayPaises[7].style.display = "block";
        arrayPaises[12].style.display = "block";
      });
    } else if ($(".continentes").val() == "Américas") {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[0].style.display = "block";
        arrayPaises[4].style.display = "block";
        arrayPaises[9].style.display = "block";
        arrayPaises[13].style.display = "block";
      });
    } else if ($(".continentes").val() == "Ásia") {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[2].style.display = "block";
        arrayPaises[6].style.display = "block";
        arrayPaises[14].style.display = "block";
      });
    } else if ($(".continentes").val() == "Europa") {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[1].style.display = "block";
        arrayPaises[5].style.display = "block";
        arrayPaises[10].style.display = "block";
        arrayPaises[15].style.display = "block";
      });
    } else if ($(".continentes").val() == "Ocêania") {
      arrayPaises.forEach((item) => {
        item.style.display = "none";
        arrayPaises[8].style.display = "block";
        arrayPaises[11].style.display = "block";
      });
    } else if ($(".continentes").val() == "Filtrar por continente") {
      arrayPaises.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
}
filtrarPorContinente();
