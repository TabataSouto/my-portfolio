import React from 'react'
import { useHistory } from 'react-router-dom';
import icons from '../../images/index';
import Styles from './Styles';

function Menu() {
  const history = useHistory();

  return (
    <Styles.Container>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/contact') }
        >
          <img src={ icons.iconMessage } alt="contact icon" />
        </button>
        <p>Contato</p>
      </section>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/projects') }
        >
          <img src={ icons.iconProjects } alt="contact icon" />
        </button>
        <p>Projetos</p>
      </section>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/about') }
        >
          <img src={ icons.iconAboutMe } alt="contact icon" />
        </button>
        <p>Sobre mim</p>
      </section>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/soft-skills') }
        >
          <img src={ icons.iconSoftSkills } alt="contact icon" />
        </button>
        <p>Soft Skills</p>
      </section>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/hard-skills') }
        >
          <img src={ icons.iconCode } alt="contact icon" />
        </button>
        <p>Hard Skills</p>
      </section>
      <section>
        <button
          type="button"
          onClick={ () => history.push('/') }
        >
          <img src={ icons.iconHome } alt="contact icon" />
        </button>
        <p>Home</p>
      </section>
    </Styles.Container>
  )
};

export default Menu;