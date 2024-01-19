import {calculateInvestmentResults, formatter} from '../util/investment'


export default function Results({input}) {
    const result = calculateInvestmentResults(input);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    console.log(result)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year -  initialInvestment
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return(
                        <tr key={yearData.year}>
                            <th>{yearData.year}</th>
                            <th>{formatter.format(yearData.valueEndOfYear)}</th>
                            <th>{yearData.interest}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{totalAmountInvested}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}