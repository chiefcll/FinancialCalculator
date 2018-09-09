import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Mortgage extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes = {} } = this.props;
    return (
      <div>
        <p>Mortgage Calculator</p>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="uncontrolled"
            label="Uncontrolled"
            defaultValue="foo"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

export default Mortgage;
