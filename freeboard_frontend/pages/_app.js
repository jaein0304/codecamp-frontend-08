import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    //uri: "http://example.codebootcamp.co.kr/graphql",
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // RAM에다 저장한다
  })

  return (
    <ApolloProvider client={client}> 
  <Component {...pageProps}/> 
    </ApolloProvider>
    ) //여기 Component는 우리가 접속한 페이지 컴포넌트
}

export default MyApp
