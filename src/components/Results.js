import logo from '../logo.png';
import { Layout, Row, Col, Input } from 'antd';

import ProductCard from './ProductCard';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


const Results = ({ userName, products }) => {
  return(
    <Layout>
      <Header className="header">
        <Row>
          <Col xs={{ span: 5 }} lg={{ span: 3 }}>
            <img src={logo} className="header-logo" alt="logo" />
          </Col>
          <Col xs={{ span: 19 }} lg={{ span: 16 }}>
            <div className="header-search">
              <Search
                placeholder="¿Que queres comprar?"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 5 }}>
            <div className="header-greetings">Bienvenido {userName}</div>
          </Col>
        </Row>
      </Header>

      <Content className="content">
        <p> Resultados la de busqueda </p>
        <Row>
          {
            products.map(prod => (
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <ProductCard key={prod.id} product={prod} />
              </Col>
            ))
          }
        </Row>
      </Content>

      <Footer className="footer">
        Footer
      </Footer>
    </Layout>
  )
}

export default Results;