import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  initialize = async () => {
    // 로그인 상태 확인 (추후 작성)
  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <div>
        <LoginModalContainer/>
        { /* 전역적으로 사용하는 컴포넌트들이 있다면 여기서 렌더링 */ }
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    baseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);