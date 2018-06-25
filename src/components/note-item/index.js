import React from 'react';

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.delete(this.props.note.id);
  }

  render() {
    return (
      <li>
        <a data-noteid={this.props.note.id} onClick={this.handleDelete}>DELETE</a>
        <strong className="note-title">{this.props.note.title}</strong>
        <div className="note-content">{this.props.note.content}</div>
      </li>
    );
  }
}