import React from 'react';
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.formType = { type: '' };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.nextProps.toggleModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((err, id) => {
              <l key={id}>{err}</l>;
            })
          }
        </ul>
      )
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    };
  }

  renderConductor() {

  }

  render() {
    let type;
    let text;
    type = (this.props.formType) ? this.props.formType : this.toggleFormType('login');
    if (type === 'login') {
      text = ["Log In", "Don't have an account?"]
    } else {
      text = ["Sign Up", "Already have an account?"]
    }

    const link = (
                    text[0] === "Log In"
                  ) ? (
                    ['signup', "Sign Up"]
                  ) : (
                    ['login', "Log In"]
    );
    return (

      <div>
          <Modal>
          </Modal>
          {this.renderErrors()}
      </div>
    )
  }
}

export default withRouter(SessionForm);
// <p>{text[1]} <Link to={`/${link[0]}`}>{link[1]}</Link></p>
//
