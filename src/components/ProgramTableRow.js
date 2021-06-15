import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ProgramTableRow = ({ program }) => (
  <TableRow key={program.id}>
    <TableCell component="th" scope="row">{program.institution.state}</TableCell>
    <TableCell align="right">{program.institution.name}</TableCell>
    <TableCell align="right">{program.classification.name}</TableCell>
    <TableCell align="right">{program.latest_report.annual.debt}</TableCell>
    <TableCell align="right">{program.latest_report.annual.earnings}</TableCell>
    <TableCell align="right">{program.latest_report.annual.de_ratio}</TableCell>
  </TableRow>
);

export default ProgramTableRow;