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

        /* 배열을 자르는 내장 함수 slice와
         * 전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을 배열에 넣어 줍니다.
         */

        this.setState({
            names: [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
            ]
        })
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