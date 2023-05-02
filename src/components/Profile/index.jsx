import React from "react";

import icons from "../../images";
import Styles from "./Styles";

function Description() {
  return (
    <Styles.Container>
      <section>
        <Styles.Photography>
          <img src={icons.tabata} alt="Foto de profile Tabata" />
          <div>
            <img src={icons.iconPencil} alt="icon pencil" />
          </div>
        </Styles.Photography>
        <div>
          <Styles.Name>
            <h2>Tabata Caroline Souto</h2>
            <img src={icons.iconPencil} alt="icon pencil" />
          </Styles.Name>
          <Styles.Office>
            <p>Desenvolvedora Front-End | FullStack</p>
            <img src={icons.iconQuestion} alt="icon question" />
          </Styles.Office>
        </div>
      </section>

      <Styles.Description>
        <Styles.Title>
          <p>Histórico de Jogos</p>
          <img src={icons.iconQuestion} alt="icon question" />
        </Styles.Title>
        <Styles.AboutMe>
          <p>
            Sejam todos muito bem-vindos(as) ao meu portfólio pessoal. Neste
            espaço, falo sobre meu momento, desejos, expertise e apresento o que
            foi desenvolvido até este momento.
          </p>
          <p>
            Sou a Tabata Caroline Souto, tenho 31 anos, formada em Sistema de
            Informações pela Anhanguera e Desenvolvimento Web FullStack pela
            Trybe - Turma XP.
          </p>
          <p>
            Ao longo da minha carreira, atuei em Departamento Pessoal/RH e
            operando base de dados para operações gerenciais na Bradesco
            Seguros. Minha última atuação foi na área de desenvolvimento para o
            setor de Cadastro PJ na XP Inc, utilizando tecnologias como Angular,
            Jasmine, Azure, etc. Gosto de ler, ver animes e, principalmente,
            jogar. Tenho especial apreço por estilização e experiência de
            usuário, mesmo não sendo requisito dentre os projetos realizados até
            este momento pela Trybe, estou orgulhosa do meu desempenho e
            evolução para demostrar minha paixão. Meu maior desejo é ser
            referência nacional na área que escolhi e impactar a vida de muitas
            pessoas. Espero que goste e, se tiver qualquer dúvida, critica,
            elogio, sugestão, ou só quiser conversar, por gentileza, não hesite
            em me contatar
          </p>
        </Styles.AboutMe>
      </Styles.Description>
    </Styles.Container>
  );
}

export default Description;
