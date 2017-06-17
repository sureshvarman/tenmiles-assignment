/**
 * Marker component to take care of the markers inside map
 * @prop {String} icon
 * @prop {String} text
 */
import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  formSubmit = (e) => {
    this.props.onSubmit();
    e.preventDefault();
    e.stopPropagation();
  }

  onEdit = (name, e) => {
    var form = {};
    form.username = this.props.username;
    form.password = this.props.password;

    form[name] = e.target.value;

    this.props.onEdit(form);
  }

  render () {
    return (
      <div>
        <input type="text" value={this.props.username} onChange={this.onEdit.bind(this, 'username')} />
        <input type="password" value={this.props.password} onChange={this.onEdit.bind(this, 'password')} />
        <input type="submit" onClick={this.formSubmit} />
        <div className={this.props.err ? "err" : ""}>
          {this.props.err}
        </div>
      </div>
    )
  }
}

export default Login;
