const name = this.props.user ? this.props.user.first_name : "";

if (this.props.user.id) {
  let table = this.props.user.campaigns.map(cp => {
    return(
      <tr>
        <td>{cp.title}</td>
        <td>$ {cp.total_contributions} USD</td>
        <td>{cp.num_contributions}</td>
        <td>{Math.round((cp.total_contributions/cp.target_amount) * 100)}</td>
      </tr>
    );
  });


let table2 = this.props.user.contributions.map(cont => {

  return(
    <tr>
      <td>{cont.campaign_title}</td>
      <td>$ {cont.amount} USD</td>
      <td>Thu, April 27, 2017</td>
    </tr>
  );
});


<div className="stats">
<div className="campaigns-table">
  <h1 className="table-name">My Campaigns </h1>
  <div className="table">
    <table>
      <tbody>
        <tr>
          <td className="table-label">Campaigns</td>
          <td className="table-label">Amount Raised</td>
          <td className="table-label">Number Contributions</td>
          <td className="table-label">% of Target</td>
        </tr>
        {table}
      </tbody>
    </table>
  </div>
</div>

<div className="contributions-table">
  <h1 className="table-name">My Contributions</h1>
  <div className="table">
    <table>
      <tbody>
        <tr>
          <td className="table-label">Campaign</td>
          <td className="table-label">Amount</td>
          <td className="table-label">Rewards</td>
        </tr>
        {table2}
      </tbody>
    </table>
  </div>
</div>
</div>
