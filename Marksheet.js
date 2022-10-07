import React from "react";
export class Marksheet extends React.Component {
    constructor() {
        super()
        this.state = { Physics: 66, Chemistry: 65, Maths: 76, Hindi: 33, English: 30 }
    }
    Calc() {
        var { Physics, Chemistry, Maths, Hindi, English } = this.state
        var tot = (Physics + Chemistry + Maths + Hindi + English);
        var per = tot / 5;
        var g
        if (per >= 75) {
            g = "First division"
        }
        else if (per >= 60) {
            g = `Second division `
        }
        else {
            g = `Third division `
        }

        var c1 = 0, d1 = "", g1 = 0, h1 = 0, h2 = "";
        for (let i in this.state) {
            if (this.state[i] < 33) {
                c1++;
            }
            if (this.state[i] >= 75) {
                d1 += i + " = " + this.state[i] + ", "
            }
            if (this.state[i] > 100) {
                return "Pleas enter less than 100 mark"
            }
            if (this.state[i] >= 28 && this.state[i] < 33) {
                g1 += this.state[i];
                h2 += i;
                h1++
            }
        }
        if (c1 === 1) {
            // this.setState({res:"suply"})
            if (h1 === 1) {
                return (<div>
                    <h3>Result = "Pass with grace" :- {h2} = {g1} + {g1 = (33 - g1)} (#)</h3>
                    <h3>Total = {tot = (tot + g1)}</h3>
                    <h3>Percentage = {per=(tot) / 5}</h3>
                    <h3>Division = {g}</h3>
                    <h3>Distingtion in subject = {d1}</h3>
                </div>
                )
            }
            else {
                return "Suply"
            }
        }
        else if (c1 === 0) {

            // this.setState({res:"result  = pass, percentage = "+per+", division = "+g+", distingtion in subject = "+d1})
            return (<div>
                <h3>Result = pass</h3>
                <h3>Total = {tot}</h3>
                <h3>Percentage = {per}</h3>
                <h3>Division = {g}</h3>
                <h3>Distingtion in subject = {d1}</h3>
            </div>
            )
        }
        else {
            // this.setState({res:"suply"})
            return "Fail"

        }
    }

    render() {
        return (
            <div>
                <h3>{this.Calc()}</h3>
            </div>
        )
    }
}