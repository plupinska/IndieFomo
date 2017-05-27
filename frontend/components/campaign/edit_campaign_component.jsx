import React from 'react';
import { Link, withRouter } from 'react-router';


class EditCampaign extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      user_id: this.props.user.id,
      title: this.props.title,
      target_amount: this.props.target_amount,
      descriptions: "Description...",
      category_name: "Travel",
      end_date: null,
      tagline: "Think persuasion, not baseball...",
      imageFile: null,
      imageUrl: this.props.user.image,
      id: this.props.params.id,
      err: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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

    if (this.state.imageFile) {
      e.preventDefault();

      const formData = new FormData();
      // We need to append all other fields to form data
      // in order to pass through all info from the form
      formData.append("campaign[image]", this.state.imageFile);
      formData.append("campaign[id]", this.state.id);
      formData.append("campaign[tagline]", this.state.tagline);
      formData.append("campaign[descriptions]", this.state.descriptions);
      formData.append("campaign[category_name]", this.state.category_name);

      this.props.updateCampaignForm(formData).then((camp) => {
        const url = `campaign/${camp.campaign.id}/addrewards`;
        this.props.router.push(url);
      });
    } else {
      let type;
      this.props.updateCampaign(this.state).then((camp) => {
        const url = `campaigns/${camp.campaign.id}`;
        this.props.router.push(url);
      });
    }
  }

  renderErrors() {

    if (this.props.errors) {
      return(
        <div className="campaign-errors">
          {this.props.errors}
        </div>
      );
    }
  }

  update(field) {

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

      return(
        <div className="edit-campaign">
          <h1>Let's get some more details.</h1>
          <div className="campaign-edit-form">
            <form className="c-form"  onSubmit={this.handleSubmit}>

              <div className="campaign-description">
                <h2>Tell us a little bit about your Campaign!</h2>
                <input type="text"
                  placeholder={this.state.descriptions}
                  onChange={this.update("descriptions")}>
                </input>
              </div>

              <div className="tagline">
                <h2>Give us your best pitch! </h2>
                <input type="text"
                  placeholder={this.state.tagline}
                  onChange={this.update("tagline")}>
                </input>
              </div>

              <div className="category_dropdown">
                <h2>Tag it with a Category!</h2>
                  <select name="category" onChange={this.update("category_name")}>
                    <option value="Technology">Technology</option>
                    <option value="Projects">Projects</option>
                    <option value="Travel">Travel</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Music & Film">Music & Film</option>
                    <option value="Home">Home</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Fashion">Fashion</option>
                  </select>
              </div>

              <div  className="campaign-img-preview">
                <h2>Lastly, let's upload an image of what you're funding.</h2>
                <div className="row-div">
                  <div className="campaign-img">
                    <img  src={this.state.imageUrl}/>
                  </div>

                   <div className="file-upload">
                    <input type="file"
                      onChange={this.updateFile}
                      onClick={this.handleFileSubmit}/>
                  </div>

                </div>

                  <div className="campaign-errors-1">
                    {this.renderErrors()}
                  </div>

              </div>

              <div className="submit-button">
                <input type="submit"
                        value="SUBMIT">
                </input>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default withRouter(EditCampaign);
