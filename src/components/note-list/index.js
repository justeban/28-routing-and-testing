import React from 'react';

import NoteItem from '../note-item/index.js';

export default class Note extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          Object.keys(this.props.notes).map((id, i) =>
            <NoteItem key={id} note={this.props.notes[id]} delete={this.props.delete} />
          )
        }
      </ul>
    );
  }
}