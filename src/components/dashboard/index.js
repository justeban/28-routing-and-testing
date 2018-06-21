import React from 'react';

import NoteForm from '../note-create-form/index.js';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  addNote(notes) {
    this.setState(Object.assign(... this.state, {notes}));

  }

  render() {
    return (
      <React.Fragment>
        <h2>Dashboard</h2>
        <NoteForm addNote={this.addNote}/>
      </React.Fragment>
    );
  }
}