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

const Nav = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position='static'>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant='h3' component='div'>
            {title}
          </Typography>
          <Grid
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

export default Nav;