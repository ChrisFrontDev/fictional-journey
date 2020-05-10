import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/16647635?s=460&u=a837b1f8a6957abbcd2309da28a04963a263a44b&v=4"
            alt="Christian Santos"
          />

          <div>
            <strong>alienflix</strong>
            <p>This project was bootstrapped with Create React App.</p>
          </div>

          <FiChevronRight size="20" />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/16647635?s=460&u=a837b1f8a6957abbcd2309da28a04963a263a44b&v=4"
            alt="Christian Santos"
          />

          <div>
            <strong>alienflix</strong>
            <p>This project was bootstrapped with Create React App.</p>
          </div>

          <FiChevronRight size="20" />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/16647635?s=460&u=a837b1f8a6957abbcd2309da28a04963a263a44b&v=4"
            alt="Christian Santos"
          />

          <div>
            <strong>alienflix</strong>
            <p>This project was bootstrapped with Create React App.</p>
          </div>

          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
