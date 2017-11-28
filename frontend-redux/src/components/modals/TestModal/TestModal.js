import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

import { DialogContent } from 'material-ui/Dialog';
import TestButton from 'components/TestButton';

import Typography from 'material-ui/Typography';

class TestModal extends Component {
  render() {
    const { classes, closeModal } = this.props;

    return (
      <DialogContent className={classes.content}>
        <Typography className={classes.text} type="headline">TEST MODAL CONTENT</Typography>
        <TestButton className={classes.close} onClick={closeModal}>Close Modal</TestButton>
      </DialogContent>
    );
  }
}

TestModal.propTypes = {
  classes: PropTypes.object,
  closeModal: PropTypes.func,
};

export default withStyles(styles)(TestModal);
