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
          Sejam todos muito bem-vindos(as) ao meu portfólio pessoal. Neste espaço, falo sobre meu momento, carreira, expertise e mostro um pouco do que foi desenvolvido até este momento.
          </p>
          <p>
          Sou a Tabata Caroline Souto, tenho 31 anos, formada em Sistemas de Informações e Desenvolvimento Web FullStack pela Trybe – Turma especial XP.

          </p>
          <p>
          Ao longo da minha trajetória, atuei em Departamento Pessoal/RH e operei base de dados para operações e planos gerenciais na Bradesco Seguros (SQL). Minha última atuação foi na área de desenvolvimento do setor de Cadastro PJ na XP Inc, utilizando tecnologias como Angular, Jasmine, Azure etc. Gosto de “codar”, ler, ver animes e, principalmente, jogar. Tenho uma visão voltada á estilização e experiência de usuário, que combina muito bem com o Front- end.
          </p>
          <p>Sigo muito focada em conseguir espaço, preciso continuar minha evolução enquanto engenheira de software e pessoa; meu maior desejo é ser referência nacional na área que escolhi e impactar a vida de muitas pessoas. Espero que goste e, se tiver qualquer dúvida, critica, elogio, sugestão, ou só quiser conversar, por gentileza, não hesite em me contatar.</p>
        </Styles.AboutMe>
      </Styles.Description>
    </Styles.Container>
  );
}

export default Description;
