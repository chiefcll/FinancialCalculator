import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Btn from '../../components/atoms/buttons/button';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

const Home = props => (
  <div>
    <p>Count: {props.count}</p>

    <p>
      <Btn
        onClick={props.increment}
        disabled={props.isIncrementing}
        title="Increment"
      />
      <Btn
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
        title="Increment Async"
      />
    </p>

    <p>
      <Btn
        onClick={props.decrement}
        disabled={props.isDecrementing}
        title="Decrement"
      />
      <Btn
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
        title="Decrement Async"
      />
    </p>
  </div>
);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  isIncrementing: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
