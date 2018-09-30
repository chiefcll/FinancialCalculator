import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LoanCalc from 'loan-calc';
import amortize from 'amortize';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

/*
  Todo (HW):
  Print out amortization table. :-)

  */
class Mortgage extends React.Component {
  constructor(props) {
    super(props);
    const loan = {
      amount: 200000,
      termMonths: 360,
      rate: 5,
    };
    this.handleChange = this.handleChange.bind(this);

    this.state = this.calculate(loan);
  }

  calculate({ amount, termMonths, rate }) {
    const loan = Object.assign(
      {},
      {
        amount,
        termMonths,
        rate,
        totalTerm: termMonths,
        amortizeTerm: termMonths,
      },
    );

    (loan.payment = LoanCalc.paymentCalc(loan)),
    (loan.amortization = amortize(loan));

    return loan;
  }

  handleChange(name) {
    return (event) => {
      const loan = Object.assign({}, this.state, {
        [name]: event.target.value,
      });

      this.setState(this.calculate(loan));
    };
  }

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
            id="rate"
            label="rate"
            onChange={this.handleChange('rate')}
            value={this.state.rate}
            defaultValue="5"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="termMonths"
            label="termMonths"
            onChange={this.handleChange('termMonths')}
            value={this.state.termMonths}
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
            InputProps={{ readOnly: true }}
            InputLabelProps={{ shrink: true }}
          />
        </form>
      </div>
    );
  }
}

export default Mortgage;
