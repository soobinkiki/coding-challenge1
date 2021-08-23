import React, { Component } from 'react';
import ReactStickies from 'react-stickies'; //ES6
import TextField from '@material-ui/core/TextField';
import './StickyNote.scss'

class StickyNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        colors: props.colors,
        width: props.w
      }
      this.onChange = this.onChange.bind(this)
      this.onSave = this.onSave.bind(this)
    }  

    onSave () {
      const notes = this.state.notes;
      console.log("notes", notes);
      notes.map(note => {
        delete note.editorState;
      })

    }
    onChange (notes) {
      this.setState({ // Update the notes state
        notes
      })

    }
  render() {
  
    return (
      <div className="note-area-container">
        <form className="group-title" noValidate autoComplete="off">
          <TextField id="standard-basic" label="Group Title" />  
        </form>
        <ReactStickies
          notes={this.state.notes}
          onChange={this.onChange}
          colors={this.props.colors}
          w={this.props.width}
        />
      </div>
    )
  }
}

export default StickyNote