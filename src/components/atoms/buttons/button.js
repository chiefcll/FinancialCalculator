import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Btn = (props) => {
  const { classes } = props;
  return (
    <Button
      variant={props.variant}
      color={props.color}
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.title}
    </Button>
  );
};

Btn.defaultProps = {
  variant: 'raised',
  color: 'primary',
  disabled: false,
  onClick: {},
  title: 'Title',
};

Btn.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Btn);
