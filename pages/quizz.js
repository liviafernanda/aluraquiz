import React from 'react';

import styled from 'styled-components';
import db from '../db.json';

import Footer from '../src/components/footer';
import GitHubCorner from '../src/components/gitHubCorner';
import QuizLogo from '../src/components/quizLogo';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const HeaderContent = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.laranjaHallow};
  
  * {
    margin: 0;
  }
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

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.laranjaHallow};
  background-color: ${({ theme }) => theme.colors.roxoHallow};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    
  }
`;
Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

const Form = styled.form`
  input{
    background-color: ${({ theme }) => theme.colors.pretoHallow};
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.laranjaHallow};
    display: flex;
    margin: 20px 10px 20px 10px;
    min-width: 400px;
    padding: 4%;
    color: ${({ theme }) => theme.colors.contrastText}    
  }

  button {
    font-size: 14px;
    display: flex;
    margin: 10px;
    min-width: 400px;
    padding: 2%;
    background: green;
    border-radius: 5px;
    color: white;
    

  }

  /* button {
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.laranjaHallow};
    display: flex;
    margin: 10px;
    min-width: 350px;
    padding: 2%;
    cursor: pointer; */

`;


export default function QuizPage(){
    return (
        <BackgroundImage>
      <QuizContainer>
       <QuizLogo />

        <Widget>
          <HeaderContent>
            <h1>Qual a probabilidade de um gato amarelo ser macho?</h1>
          </HeaderContent>
            <Widget.Content>
                <Form>
                    <button type="submit">
                    75%
                    </button>
                    <button type="submit">
                    50%
                    </button>
                    <button type="submit">
                    25%
                    </button>
                    <button type="submit">
                    10%
                    </button>
                </Form>
            </Widget.Content>
        </Widget>

        
       
        <Footer />
      </QuizContainer>

    </BackgroundImage>

    )
}