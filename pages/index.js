import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Content from '../components/content'
import Calc from '../components/calc'
import Layout from '../components/layout'

const Div = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <Div>
          <Paper className={classes.root} elevation={1}>
            <Calc />
            <Content />
          </Paper>
        </Div>
      </Layout>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
