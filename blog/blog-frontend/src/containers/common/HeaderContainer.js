import React, { Component } from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
  handleRemove = () => {
    // 미리 기능 선언해두기
  }

  render() {
    const { handleRemove } = this;
    const { match } = this.props;

    const { id } = match.params;

    return (
      <Header
      postId={id}
      onRemove={handleRemove}
      />
    );
  }
}

export default withRouter(HeaderContainer);