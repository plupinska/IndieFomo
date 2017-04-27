import React from 'react';
import { Link, withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      imageFile: null,
      imageUrl: this.props.user.image_url
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    formData.append("user[id]", this.props.params.id);

    this.props.editUser(formData).then(usr => {
      this.setState({user: usr});
    });
  }

  render() {

    const name = this.props.user ? this.props.user.first_name : "";

    if (this.props.user.id) {
      let image = this.props.user.image_url ? this.props.user.image_url : this.state.imageUrl;
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

      return(
        <div className="profile-page">
          <div className="profile-greeting">
            <h1> Greetings, {name} </h1>
          </div>

          <div className="main-content">
            <div className="left">
              <div className="user-image">
                <h1 className="img-title"> User Image </h1>
                <div className="image-container">

                 <div className="user-img">
                   <img className="usr-avatar"  src={this.state.imageUrl}/>
                 </div>

                <form className= "usr-avatar-form" onSubmit={this.handleSubmit}>
                <div className="file-upload">
                   <input type="file"
                     onChange={this.updateFile}/>

                     <div className="file-submit">
                       <input type="submit" value="Upload Image"></input>
                     </div>
                 </div>
                </form>

                </div>
                <br/>


              </div>
            </div>
            <div className="right">
              <div className="profile-photo">
                <img className="profile-photo-img" src={this.props.user.image_url} />
              </div>
              <div className="user-overview">
              <h1>About Me</h1>
              <div className="user-content">
                {this.props.user.about_me}
              </div>
              </div>
            </div>
          </div>

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

        </div>
      );
    } else {
      return (
        <h1> waiting... </h1>
      );
    }
  }
}



export default withRouter(UserShow);
