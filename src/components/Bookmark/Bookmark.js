/**
 * Marker component to take care of the markers inside map
 * @prop {String} icon
 * @prop {String} text
 */
import React from 'react';
import {FormGroup, FormControl, Row, Col, Grid, ControlLabel} from 'react-bootstrap';
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
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6}>
            <Row className="clearfix">
              <form>
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl type="text" value={this.props.name} onChange={this.onEdit.bind(this, 'name')} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>URL</ControlLabel>
                  <FormControl type="text" value={this.props.url} onChange={this.onEdit.bind(this, 'url')} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Tags (comma separated)</ControlLabel>
                  <FormControl type="text" value={this.props.tags} onChange={this.onEdit.bind(this, 'tags')} />
                </FormGroup>

                <FormControl type="submit" onClick={this.onSubmit} />
                <div className={this.props.err ? "err" : ""}>
                {this.props.err}
                </div>
                <div className={this.props.success ? "success" : ""}>
                {this.props.success}
                </div>
              </form>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BookMark;
