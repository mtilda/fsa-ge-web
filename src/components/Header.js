import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import routes from '../router/routes';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    color: '#FFFFFF',
  },
  link: {
    color: '#FFFFFF',
  }
});

const Header = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position='static'>
      <Toolbar>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item justify='left'>
            <Typography variant='h4' justify='left'>
              Federal Student Aid Gainful Employment Information
            </Typography>
          </Grid>
          <Grid item container justify='center'>
            <Typography variant='h1'>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {routes
              .filter(({linkText}) => linkText)
              .map(({key, linkText, path}) => (
                <Link key={key} className={classes.link} component={RouterLink} to={path}>{linkText}</Link>
              ))
            }
          </Grid>
        </Grid >
      </Toolbar>
    </AppBar>
  );
}

export default Header;