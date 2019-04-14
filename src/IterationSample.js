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
             *  this.button.focus();
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

    handleRemove = (index) => {
        // 편의상 name의 레퍼런스를 미리 만듭니다.
        const { names } = this.state;
        this.setState({
            // filter로 index번째를 제외한 원소만 있는 새로운 배열 생성
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) =>
                (<li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>)
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