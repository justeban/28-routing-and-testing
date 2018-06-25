import React from 'react';

import NoteForm from '../note-create-form/index.js';
import NoteList from '../note-list/index.js';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: {},
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  addNote(data) {
    let notes = {};
    notes[data.id] = data;
    this.setState({notes: Object.assign({}, this.state.notes, notes)});
  }

  removeNote(id) {
    let {[id]: deleted, ...notes} = this.state.notes;
    this.setState({notes});
  }

  render() {
    return (
      <React.Fragment>
        <h2>Dashboard</h2>
        <NoteForm addNote={this.addNote}/>
        <NoteList notes={this.state.notes} delete={this.removeNote}/>
      </React.Fragment>
    );
  }
}