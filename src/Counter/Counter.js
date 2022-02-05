import { Component } from "react";

export default class Counter extends Component {
    state = {
        counter: 0,
        crono: 0,
    };
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    handleDecrement = () => {
        this.setState({ ...this.state, counter: this.state.counter - 1 });
    };

    componentDidMount = () => {
        setInterval(() => {
            this.setState({ crono: this.state.crono + 1 });
        }, 1000);
        console.log("this is from Component DidMount");
    };
    componentDidUpdate = () => {
        console.log("This is from componentDidUpdate :) ");
    };

    componentWillUnmount = () => {
        console.log("This is from componentWillUnmount :) ");
    };
    render() {
        return (
            <div className="Counter-buttons">
                <h1>Crono : {this.state.crono}</h1>
                <button onClick={this.handleIncrement}>Plus</button>
                <h2 className={this.state.counter > 9 ? "colorS9" : "colorI9"}>
                    {this.state.counter}
                </h2>
                <button onClick={this.handleDecrement}>moins</button>
            </div>
        );
    }
}
