import React from 'react';
import classNames from 'classnames';
import styles from './amortization.module.css';
/*
* We need to style this and pull the CSS out from global
* stylesheet
*/
class AmortizationChart extends React.Component {
    render() {
        // ES6: Arrow function shorthand when function consists of single line return statement
        let items = this.props.data.map((month, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td className={classNames(styles.currency, styles.principal)}>{Math.round(month.principalPaymentRounded).toLocaleString()}</td>
                <td className={classNames(styles.currency, styles.interest)}>{Math.round(month.interestPaymentRounded).toLocaleString()}</td>
                <td className={classNames(styles.currency, styles.balance)}>{Math.round(month.principalBalanceRounded).toLocaleString()}</td>
            </tr>
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th className={classNames(styles.principal)}>Principal</th>
                    <th className={classNames(styles.interest)}>Interest</th>
                    <th className={classNames(styles.balance)}>Balance</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
};

export default AmortizationChart;
