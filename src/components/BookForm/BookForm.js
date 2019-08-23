import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  submit: {
    margin: theme.spacing(1)
  }
});

class BookForm extends Component {

  state = {
    title: '',
    author: '',
    tags: []
  }

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_TAG_LIST'});
  }

  handleChangeFor = ( event, propertyName ) => {
    let value = event.target.value;
    console.log(`Change value of ${propertyName} to `, value);

    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state);
    axios.post(`/books`, this.state)
      .then(response => {
        // Call the method passed in on props to get books again.
        this.props.dispatch({type: 'FETCH_BOOK_LIST'});
        this.setState({
            title: '',
            author: '',
            tags: [],
        })
        this.props.history.push('/');
      })
      .catch( error => {
        console.log(error);
        alert(`Sorry, couldn't add book at this time. Try again later`);
      })
  }

  render() {

    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField className={classes.textField}
          required
          value={this.state.title}
          label="Title"
          onChange={(event) => this.handleChangeFor(event, 'title')}
        />

        <TextField className={classes.textField}
          required
          value={this.state.author}
          label="Author"
          onChange={(event) => this.handleChangeFor(event, 'author')}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Tags</InputLabel>
          <Select
            multiple
            value={this.state.tags}
            onChange={(event) => this.handleChangeFor(event, 'tags')}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(tag => (
                  <Chip key={tag.id} label={tag.name} className={classes.chip} />
                ))}
              </div>
            )}
            // MenuProps={MenuProps}
          >
            {this.props.reduxStore.tagList.map(tag => (
              <MenuItem key={tag.id} value={tag}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <Button variant="contained" color="primary" 
          type="submit" className={classes.submit}>
          Add Book
        </Button>
      </form>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(withStyles(styles)(BookForm));
