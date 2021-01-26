import styled from 'styled-components'
import db from "../db.json"
import Footer from "../src/components/footer.js"
import QuizBackground from "../src/components/quizBackGround.js"
import GitHubCorner from "../src/components/gitHubCorner.js"


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

const HeaderContent = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.laranjaHallow};
  
  * {
    margin: 0;
  }
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }

`

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.colors.laranjaHallow};
  background-color: ${({theme}) => theme.colors.roxoHallow};
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
`
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
`

export default function Home() {
  return (
    
      <BackgroundImage>

        <QuizContainer>
        <Widget>
            <HeaderContent>
              <h1>Teste seus conhecimentos</h1>
            </HeaderContent>
          <Widget.Content>
            <p>O que você entende sobre gatos?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            Quizzes da galera

          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/liviafernanda"/>
        </QuizContainer>
        
      </BackgroundImage> 
      
    
    
  )
}
