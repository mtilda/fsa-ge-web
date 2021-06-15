const ProgramTableRow = ({ data }) => (
  <tr>
    <td>{data.institution.state}</td>
    <td>{data.institution.name}</td>
    <td>{data.classification.name}</td>
    <td>{data.latest_report.annual.debt}</td>
    <td>{data.latest_report.annual.earnings}</td>
    <td>{data.latest_report.annual.de_ratio}</td>
  </tr>
);

export default ProgramTableRow;