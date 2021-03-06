import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import Counter from '../Counter';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'

class App extends React.Component {

  componentDidMount() { this.props.fetchCounter() }

  incrementCounterAndPostNewCount() {
    this.props.incrementCounter();
  }

  render() {
    return <div>
      <Button variant="contained" color="primary" onClick={this.incrementCounterAndPostNewCount.bind(this)}>Click Me!</Button>
      <Counter count={this.props.count} counterId={this.props.counterId} />
    </div>
  }

}

const mapStateToProps = state => {
  return ({ count: state.counter.count, counterId: state.counter.counterId })
}

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: incrementCounter(dispatch),
  decrementCounter: decrementCounter(dispatch),
  fetchCounter: fetchCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);