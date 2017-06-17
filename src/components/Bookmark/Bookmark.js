/**
 * Marker component to take care of the markers inside map
 * @prop {String} icon
 * @prop {String} text
 */
import React from 'react';
import './Bookmark.scss';

class BookMark extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  onSubmit = (e) => {
    this.props.onSubmit();
    e.preventDefault();
    e.stopPropagation();
  }

  onEdit = (name, e) => {
    var form = {};
    form.name = this.props.name;
    form.url = this.props.url;
    form.tags = this.props.tags;

    form[name] = e.target.value;

    this.props.onEdit(form);
  }

  render () {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.onEdit.bind(this, 'name')} />
        <input type="text" value={this.props.url} onChange={this.onEdit.bind(this, 'url')} />
        <input type="text" value={this.props.tags} onChange={this.onEdit.bind(this, 'tags')} />
        <input type="submit" onSubmit={this.onSubmit} />
        <div className={this.props.err ? "err" : ""}>
          {this.props.err}
        </div>
      </div>
    )
  }
}

export default BookMark;
