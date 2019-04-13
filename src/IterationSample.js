import React, { Component } from 'react';

class IterationSample extends Component {

    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        }, () => {
           /*  setTimeout(() => {
                this.button.focus();
            }, 1000); */
        });
    }

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화합니다.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
        this.input.focus();
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={index}>{name}</li>)
        );

        return (
            <div>
                <input type="text"
                    ref={(ref) => this.input = ref}
                    onChange={this.handleChange}
                    value={this.state.name} />
                <button
                    ref={(ref) => this.button = ref}
                    onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;