import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
class App extends React.Component {
    state = {
        show: false,
    };

    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    render() {
        return (
            <div className="App">
                <h1 className="title">Workshop State</h1>
                <button onClick={this.handleShow}>
                    {!this.state.show ? "Show" : "Hide"}
                </button>
                {this.state.show ? <Counter /> : null}
            </div>
        );
    }
}

export default App;
