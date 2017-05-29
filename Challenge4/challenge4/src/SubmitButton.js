import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const SubmitButton = () => (
  <div>
    <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
    >
    <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
  </div>
);

export default SubmitButton;