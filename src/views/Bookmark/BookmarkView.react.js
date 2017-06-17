/**
 * BookMark view - which renders the initial page after the app loads
 * @prop {Object} map
 * @prop {Object} dispatch
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookMarkActions from '../../actions/bookmark.js';
import BookMark from '../../components/Bookmark';
import './BookmarkView.scss';

class BookMarkView extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.actions = bindActionCreators(bookMarkActions, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  onEdit = (value) => {
    this.actions.onEdit(value);
  }

  onSubmit = () => {
    this.actions.add({
      name: this.props.bookmark.name,
      url: this.props.bookmark.url,
      tags: this.props.bookmark.tags,
    }, this.props.auth.token());
  }

  render() {
    return (
      <BookMark
        name={this.props.bookmark.name}
        url={this.props.bookmark.url}
        tags={this.props.bookmark.tags}
        err={this.props.bookmark.err}
        success={this.props.bookmark.success}
        onEdit={this.onEdit}
        onSubmit={this.onSubmit}
      />
    )
  }
}

/**
 * function to map state information to component
 * will be a callback
 * @param {state} Object
 * @return {Object}
 */
function mapStateToProps(state) {
    const { bookmark, auth } = state;
    return {
      bookmark,
      auth
    };
}

BookMarkView.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    bookmark: React.PropTypes.object
};

export default connect(mapStateToProps)(BookMarkView);
