import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import truncateText from '../helpers/truncateText';
import toK from '../helpers/toK';
import pzfEmoji from '../helpers/pzfEmoji';

const ProgramTableRow = ({ program }) => (
  <TableRow>
    <TableCell component="th" scope="row" align="left">{truncateText(program.classification.cip_name, 30)}</TableCell>
    <TableCell align="left">{truncateText(program.institution.name, 30)}</TableCell>
    <TableCell align="left">{`${truncateText(program.institution.city, 15)}, ${program.institution.state}`}</TableCell>
    <TableCell align="right">$ {toK(program.latest_report.annual.debt)} USD</TableCell>
    <TableCell align="right">$ {toK(program.latest_report.annual.earnings)} USD</TableCell>
    <TableCell align="right">{program.latest_report.annual.de_ratio}</TableCell>
    <TableCell align="right">{pzfEmoji(program.latest_report.official_pzf)}</TableCell>
  </TableRow>
);

export default ProgramTableRow;