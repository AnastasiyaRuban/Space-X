import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Advantages } from './components/Advantages/Advantages';
import { Promo } from './components/Promo/Promo';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Promo />
        <Advantages />
      </Content>
    </Layout>
  );
}

export default App;
