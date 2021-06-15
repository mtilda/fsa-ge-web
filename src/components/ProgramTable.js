import { makeStyles } from '@material-ui/core/styles';
import ProgramTableRow from './ProgramTableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // overflowX: 'hidden',
  },
});

const ProgramTable = ({ programs }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="program search results">
        <TableHead>
          <TableRow>
            <TableCell align="center">Classification</TableCell>
            <TableCell align="center">Institution</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Median Annual Debt</TableCell>
            <TableCell align="center">Average Annual Earnings</TableCell>
            <TableCell align="center">Debt to Earnings Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            programs.length > 0 ? (
              programs.map((program, index) =>
                <ProgramTableRow key={index} program={program}/>
              )
            ) : (
              [...Array(5)].map((_, index) => (
                <TableRow key={index} className={classes.row}>
                  {[...Array(6)].map((_, index) =>
                    <TableCell key={index} align="center"><Skeleton variant="rect" width='auto' /></TableCell>
                  )}
                </TableRow>
              ))
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProgramTable;