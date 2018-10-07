import React from 'react';

class AmortizationChart extends React.Component {
    render() {
        // ES6: Arrow function shorthand when function consists of single line return statement
        let items = this.props.data.map(({principalY, balance, interestY}, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td className="currency principal">{Math.round(principalY).toLocaleString()}</td>
                <td className="stretch">
                    <div className="flex">
                        <div className="bar principal" style={{flex: principalY, WebkitFlex: principalY}}></div>
                        <div className="bar interest" style={{flex: interestY, WebkitFlex: interestY}}></div>
                    </div>
                </td>
                <td className="currency interest">{Math.round(interestY).toLocaleString()}</td>
                <td className="currency">{Math.round(balance).toLocaleString()}</td>
            </tr>
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th className="principal">Principal</th>
                    <th className="stretch"></th>
                    <th className="interest">Interest</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
};

export default AmortizationChart;
