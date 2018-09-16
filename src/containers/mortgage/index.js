import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

/*
  Todo (HW):
  1. Why is it not setting initial payment value
  2. Style to make input boxes vertical
  3. Fix payment field label and be readonly.

  Understand how React sets default state

  Next Week

  Add Calculate Button to update payment

  Lay the foundations for Redux...
  */

class Mortgage extends React.Component {
  state = {
    amount: 200000,
    term: 30,
    apr: 5
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setState({ payment: this.calculatePayment(this.state) });
  }

  handleChange = name => event => {
    let state = Object.assign({}, this.state, {
      [name]: event.target.value
    });

    state.payment = this.calculatePayment(state);

    this.setState(state);
  };

  calculatePayment = state => {
    let { amount, apr, term, payment } = state;

    apr /= 1200;
    term *= 12;
    payment =
      (amount * (apr * Math.pow(1 + apr, term))) /
      (Math.pow(1 + apr, term) - 1);
    payment = '$' + payment.toFixed(2);

    return payment;
  };

  render() {
    const { classes = {} } = this.props;
    return (
      <div>
        <p>Mortgage Calculator</p>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="amount"
            label="amount"
            className={classes.textField}
            value={this.state.amount}
            defaultValue="200000"
            onChange={this.handleChange('amount')}
            margin="normal"
          />
          <TextField
            required
            id="apr"
            label="apr"
            onChange={this.handleChange('apr')}
            value={this.state.apr}
            defaultValue="5"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="term"
            label="term"
            onChange={this.handleChange('term')}
            value={this.state.term}
            defaultValue="30"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="payment"
            label="payment"
            value={this.state.payment}
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

export default Mortgage;
