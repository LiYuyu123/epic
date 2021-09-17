
import {
  Switch,
  Route,
} from 'react-router-dom';
import './index.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import styled from 'styled-components';

const Home = lazy(() => import("./views/Home"))
const History = lazy(() => import("./views/History"))
const About = lazy(() => import("./views/About")) //组件不会立马加载


const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main{
    flex-grow: 1;
    overflow: auto;
    padding:30px 100px ;
  }
`
function App() {
  return (
    <Div>
      <Header />
      <main className="main">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Div>
  );
}

export default App;