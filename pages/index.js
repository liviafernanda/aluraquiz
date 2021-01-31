import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/gitHubCorner';
import QuizLogo from '../src/components/quizLogo';
import Input from '../src/components/input';
import Button from '../src/components/button';
import Widget from '../src/components/estilos';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (

    <BackgroundImage>
      <QuizContainer>
        <QuizLogo />

        <Widget 
          as={motion.section}
          transition = {{ dalay: 0, duration: 0.5}}
          variants = {{
            show: {opacity: 1, y: '0'},
            hidden: { opacity: 0, y: '100%'},
            }}
            initial = "hidden"
            animate = "show"
        >
          <Widget.Header>
            <h1>{db.description}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.title}</p>
            <form onSubmit={function (infoEvento) {
              infoEvento.preventDefault();
              router.push(`/quizz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(info) => { setName(info.target.value);}}
                placeholder="Digite seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Vamos Começar, {name}
              </Button>

            </form>
          </Widget.Content>
        </Widget>

        <Widget
        as={motion.section} 
        transition = {{ dalay: 0.5, duration: 0.5}}
        variants = {{
          show: {opacity: 1, x: '0'},
          hidden: { opacity: 0, x: '100%'},
          }}
          initial = "hidden"
          animate = "show">
          <Widget.Header>
              <h1>
                Quizzes da galera
              </h1>
            </Widget.Header>
          <Widget.Galera>
            <p>Confira outros quizzes realizados durante a imersão React da Alura e divirta-se!</p>
          <ul>
             <li>
              <a href="https://free-horses-quiz-git-main.hadirga.vercel.app/" target="_blank">Quiz sobre Cavalos</a>
          </li>

          <li>
              <a href="https://aluraquiz-simpsons.vercel.app/" target="_blank">
                Quiz sobre Os Simpsons
              </a>
          </li>

          <li>
              <a href="https://doctor-who-quiz.emanuelpna.vercel.app/" target="_blank">
                Quiz sobre Dr. Who
              </a>
          </li>
          </ul>
          </Widget.Galera>
        </Widget>
        <Footer
        as={motion.section} 
        transition = {{ dalay: 0.5, duration: 0.5}}
        variants = {{
          show: {opacity: 1, x: '0'},
          hidden: { opacity: 0, x: '100%'},
          }}
          initial = "hidden"
          animate = "show"
        />
        <GitHubCorner projectUrl="https://github.com/liviafernanda" />
      </QuizContainer>

    </BackgroundImage>

  );
}
