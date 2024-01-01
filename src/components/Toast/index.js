import React, {Component} from 'react';
import {StyleSheet, View, Animated, Dimensions, Text} from 'react-native';

export const DURATION = {
  LENGTH_SHORT: 2000,
  FOREVER: 0,
};

export default class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    };
  }

  show(text, duration, callback) {
    this.duration =
      typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
    this.callback = callback;
    this.setState({
      isShow: true,
      text: text,
    });

    this.animation = Animated.timing(this.state.opacityValue, {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
      useNativeDriver: this.props.useNativeAnimation,
    });
    this.animation.start(() => {
      this.isShow = true;
      if (duration !== DURATION.FOREVER) this.close();
    });
  }

  close(duration) {
    let delay = typeof duration === 'undefined' ? this.duration : duration;

    if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

    if (!this.isShow && !this.state.isShow) return;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.animation = Animated.timing(this.state.opacityValue, {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
        useNativeDriver: this.props.useNativeAnimation,
      });
      this.animation.start(() => {
        this.setState({
          isShow: false,
        });
        this.isShow = false;
        if (typeof this.callback === 'function') {
          this.callback();
        }
      });
    }, delay);
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const view = this.state.isShow ? (
      <View
        style={[styles.container, {bottom: Dimensions.get('screen').width / 3}]}
        pointerEvents="none">
        <Animated.View
          style={[
            styles.content,
            {opacity: this.state.opacityValue},
            this.props.style,
          ]}>
          {React.isValidElement(this.state.text) ? (
            this.state.text
          ) : (
            <Text style={this.props.textStyle}>{this.state.text}</Text>
          )}
        </Animated.View>
      </View>
    ) : null;
    return view;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 12,
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    color: 'white',
  },
});

Toast.defaultProps = {
  position: 'bottom',
  textStyle: styles.text,
  positionValue: Dimensions.get('screen').width / 4,
  fadeInDuration: 618,
  fadeOutDuration: 618,
  opacity: 1,
  useNativeAnimation: true,
};
