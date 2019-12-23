import { connect } from 'react-redux';
import { setBaseAmount } from '../actions';
import Input from '../components/Input';

const mapStateToProps = state => ({
  value: state.baseAmount
});

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    dispatch(setBaseAmount(event.target.value));
  }
});

const CurrencyInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default CurrencyInput;
