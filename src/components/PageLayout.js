import Header from './Header';
import Container from '@material-ui/core/Container';

const PageLayout = ({ title = 'Gainful Employment Information', subtitle, children }) => (
  <Container>
    <Header title={title} subtitle={subtitle} />
    {children}
  </Container>
);

export default PageLayout;