import ProgramTableRow from './ProgramTableRow';

const ProgramTable = ({ programs }) => (
  <table>
    <thead>
      <tr>
        <th>Location</th>
        <th>Institution</th>
        <th>Classification</th>
        <th>Median Annual Debt</th>
        <th>Average Annual Earnings</th>
        <th>Debt to Earnings Ratio</th>
      </tr>
    </thead>
    <tbody>
      {programs && programs.map((data, idx) =>
        <ProgramTableRow key={idx} data={data}/>
      )}
    </tbody>
  </table>
);

export default ProgramTable;