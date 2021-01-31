import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
// eslint-disable-next-line import/no-duplicates
import Button from '../src/components/button';
import Footer from '../src/components/footer';
import QuizLogo from '../src/components/quizLogo';
import Widget from '../src/components/estilos';
import Form from '../src/components/alternativeForm';

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

// eslint-disable-next-line react/prop-types
function ResultWidget({ results }) {
  const total = results.filter((t) => t).length;
  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/*
          {results.reduce((somatorioAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return (somatorioAtual + 1);
            }
            return somatorioAtual;
          })}
           */}
          {total}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => {
            if (result === true) {
              return (
                <li>
                  RESULTADO
                  {' '}
                  {index + 1}
                  :
                  Acertou!
                </li>
              );
            }
            return (
              <li>
                RESULTADO
                {' '}
                {index + 1}
                : Errou!
                {' '}
              </li>
            );
          })}
        </ul>
      </Widget.Content>
    </Widget>

  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando
      </Widget.Header>

      <Widget.Content>
        Conteúdo
      </Widget.Content>
    </Widget>

  );
}

function QuestionWidget({
  // eslint-disable-next-line react/prop-types
  questions, totalQuestoes, questionIndex, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState();
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === questions.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <h1>{`Pergunta ${questionIndex + 1}  de  ${totalQuestoes}`}</h1>
      </Widget.Header>
      <img
        alt="gatos"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        // eslint-disable-next-line react/prop-types
        src={questions.image}
      />
      <Widget.Content>
        { /* eslint-disable-next-line react/prop-types */ }
        <h2>{questions.title}</h2>
        { /* eslint-disable-next-line react/prop-types */ }
        <p>{questions.description}</p>

        <Form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 4 * 1000);
        }}
        >
          { /* eslint-disable-next-line react/prop-types */ }
          {questions.alternatives.map((alternative, alternativeindex) => {
            const alternativeId = `alternative__${alternativeindex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeindex;
            return (
              <Widget.Topic
                htmlFor={alternativeId}
                key={alternativeId}
                as="label"
                data-status={isQuestionSubmited && alternativeStatus}
                data-selected={isSelected}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeindex)}
                  name={questionId}
                  checked={selectedAlternative === alternativeindex}
                />
                {alternative}

              </Widget.Topic>
            );
          })}

          { isQuestionSubmited && isCorrect && <p>Resposta Certa! {questions.justificativa}</p>}
          { isQuestionSubmited && !isCorrect && <p>Resposta Errada! {questions.justificativa}</p>}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          { /* <p>selectedAlternative: {`${selectedAlternative}`}</p> */}
          { /* eslint-disable-next-line react/prop-types */ }

        </Form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestoes = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const questions = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // nasce === didMont
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestoes) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }
  return (
    <BackgroundImage>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            questions={questions}
            totalQuestoes={totalQuestoes}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

        <Footer />
      </QuizContainer>

    </BackgroundImage>

  );
}
