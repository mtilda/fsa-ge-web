import Nav from './Nav';
import Container from '@material-ui/core/Container';

const PageLayout = ({ title, children }) => (
  <Container>
    <Nav title={title} />
    {children}
  </Container>
);

export default PageLayout;