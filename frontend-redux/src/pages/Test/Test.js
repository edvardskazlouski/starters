import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import ReactHelmet from 'react-helmet';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TestForm from './TestForm';

import styles from './styles';

class Test extends PureComponent {
  static propTypes = {
    groups: ImmutablePropTypes.list,
    isOk: PropTypes.bool.isRequired,
    submitValue: PropTypes.func.isRequired,
    submittedValue: PropTypes.string,
    openTestModal: PropTypes.func.isRequired,
  };

  render() {
    const {
      groups,
      isOk,
      submitValue,
      submittedValue,
      openTestModal,

      classes
    } = this.props;

    return (
      <div className={classes.container}>
        <ReactHelmet
          title="Test screen"
        />
        <div className={classes.groupsSize}>
          {groups.size}
        </div>
        {
          isOk && <TestForm onSubmit={submitValue} />
        }
        <div>
          {submittedValue}
        </div>
        <button onClick={openTestModal}>Open modal</button>
      </div>
    );
  }
}

export default injectSheet(styles)(Test);