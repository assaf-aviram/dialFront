import React from 'react';
import ReactPlayer from 'react-player';
import * as R from 'ramda';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import numeral from 'numeral';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';
import Button from '../../../components/Button';

const tester = i => d => console.log(i, d) || d;

const getVideoStatus = R.compose(
  R.applySpec({
    percentage: R.compose(n => numeral(n).format('0.00%'), R.path(['videoStatus', 'played'])),
    seconds: R.path(['videoStatus', 'playedSeconds']),
    dialValue: R.prop('dialValue'),
  }),
);

const argsToList = R.unapply(R.identity);

const shouldUpdate = R.compose(
  R.not,
  // tester(3),
  R.apply(R.equals),
  // tester(2),
  R.map(R.omit(['videoStatus'])),
  // tester(1),
  argsToList,
);

class Dial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      dialValue: 0,
      videoStatus: {},
    };
    this.checkVid = throttle(this.checkVid.bind(this), 500);
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
    this.updateVideoStatus = this.updateVideoStatus.bind(this);
    this.changeDialValue = this.changeDialValue.bind(this);

    this.setVideoRef = (node) => {
      this.videoRef = node;
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!R.equals(this.props, nextProps)) return true;
    return shouldUpdate(this.state, nextState);
  }
  checkVid(dialValue) {
    console.log(getVideoStatus(this.state));
  }
  startPlaying() {
    this.setState({ playing: true });
  }
  stopPlaying() {
    this.setState({ playing: false });
  }
  updateVideoStatus(videoStatus) {
    this.setState({ videoStatus });
  }
  changeDialValue(dialValue) {
    this.setState({ dialValue });
    this.checkVid();
  }
  render() {
    const { playing, dialValue } = this.state;
    return (
      <div>
        <h1>Dial</h1>
        { !playing ? <Button onClick={this.startPlaying}>Start</Button> : <Button onClick={this.stopPlaying}>Stop</Button> }
        <ReactPlayer
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          onProgress={this.updateVideoStatus}
          playing={playing}
        />
        <div>
          <Slider
            min={-500}
            max={500}
            value={dialValue}
            onChange={this.changeDialValue}
            // onChangeComplete={this.checkVid}
          />
        </div>
      </div>
    );
  }
}

export default Dial;
