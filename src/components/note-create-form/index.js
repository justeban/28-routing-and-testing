import React from 'react';
import uuid from 'uuid/v4';

export default class NoteForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let note = {
      id: uuid(),
      editing: false,
      complete: false,
      title: e.target.title.value,
      content: e.target.content.value,
    };

    this.props.addNote(note);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <input type="submit" />
      </form>
    );
  }
}