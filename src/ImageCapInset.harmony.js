import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  requireNativeComponent,
} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

class ImageCapInset extends Component {
  render() {
    const {
      children,
      source,
      capInsets,
      ...rest
    } = this.props;

    const normalizedSource = resolveAssetSource(source);

    return (
      <View {...rest}>
        <RNCImageCapInsets
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          capInsets={capInsets}
          source={normalizedSource}
        />
        {children}
      </View>
    );
  }
}

ImageCapInset.propTypes = {
  ...View.propTypes,
  source: Image.propTypes.source,
  capInsets: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
};

const RNCImageCapInsets = requireNativeComponent('RNCImageCapInsets', {
  propTypes: ImageCapInset.propTypes,
});

export default ImageCapInset;
