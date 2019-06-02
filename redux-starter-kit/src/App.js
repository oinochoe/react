import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {

    loadData = async () => {
        const { PostActions, number } = this.props;
        try {
            const response = await PostActions.getPost(number);
            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        // 이전 Number와 현재 Number가 다르면 요청을 시작함...
        if(this.props.number !== prevProps.number) {
            this.loadData();
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        return (
            <div>
                <h1>{number}</h1>
                {
                    (()=> {
                        if(loading) {
                            return (<h2>로딩중...</h2>);
                        }
                        else if(error) {
                            return (<h2>오류 발생!</h2>);
                        }
                        else {
                            return (
                                <div>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            )
                        }
                    })()
                }
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);