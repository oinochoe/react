import React, { Component } from 'react';
import EditorPane from 'components/editor/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions  from 'store/modules/editor';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, vlaue}) => {
    const { editorActions } = this.props;
    editorActions.changeInput({name, vlaue});
  }

  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  }),
  (dispatch) => ({
    editorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);