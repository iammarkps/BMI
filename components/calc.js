import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

const THTitle = styled.h1`
  text-align: center;
  font-family: 'Kanit', sans-serif;
`

const THContent = styled.p`
  font-family: 'Kanit', sans-serif;
  color: black;
  line-height: 1;
  font-size: 18px;
  text-align: center;
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { height: '', mass: '' }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <THTitle>คำนวณดัชนีมวลกาย</THTitle>
        <TextField
          id="name"
          label="ส่วนสูง(ซม.)"
          style={{ fontFamily: 'Kanit' }}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('height')}
          margin="normal"
        />
        <br />
        <TextField
          id="name"
          label="น้ำหนัก"
          style={{ fontFamily: 'Kanit' }}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('weight')}
          margin="normal"
        />
        <THContent>
          ค่าดัชนีมวลกาย:{' '}
          {(this.state.weight / (this.state.height / 100) ** 2).toFixed(2)}
        </THContent>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
