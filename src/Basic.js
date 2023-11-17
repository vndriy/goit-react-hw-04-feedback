import { Component } from "react";

const Button = ({ value, onUpdate }) => {
        return <button onClick={onUpdate}>Clicks: {value}</button>;  
};

export class Basics extends Component {
    state = {
        clicks: 0,
        clicksB: 0,
    };

    increment = () => {
        this.setState(poperState => {
            return {
                clicks: poperState.clicks + 2,
            }
        })
    };

    decrement = () => {
        this.setState(poperState => {
            return {
                clicksB: poperState.clicksB - 2,
            }
        })
    };

  render() {

    const {clicks, clicksB} = this.state
    const total = clicks + clicksB
    return (
        <div>
            <p>{total}</p>
            <Button value={clicksB} onUpdate={this.decrement} />
            <Button value={clicks} onUpdate={this.increment} />
        </div>
    )
  }
}