// @flow

// 3rd-party imports

import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

// local imports

import Content from './content';

// components

const fullscreen = css`
  position: absolute;
  left: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  width: 100%;

  background-color: pink;

  overflow: hidden;
  position: relative;
`;

const Video = styled.video`
  ${fullscreen};

  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
  transition: visibility 1s linear;
`;

const PatternBackground = styled.div`
  ${fullscreen};

  background-color: rgba(252, 194, 215, 0.9);

  background: url(assets/cool-background.png) no-repeat center center fixed;
  background-size: cover;
  opacity: 0.4;
`;

const BackgroundColor = styled.div`
  ${fullscreen};

  background-color: rgba(252, 194, 215, 0.8);
`;

const ContentContainer = styled.div`
  ${fullscreen};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

type State = {
  hide_video: boolean
};

class Hero extends React.Component<{}, State> {
  video = null;
  video_2 = null;

  state = {
    hide_video: false
  };

  constructor(props: {}) {
    super(props);

    this.video = React.createRef();
    this.video_2 = React.createRef();
  }

  applyVideo = (video, sideeffect: (HTMLVideoElement) => void) => {
    if (!video) {
      return;
    }

    const videoDOM = video.current;

    if (!videoDOM) {
      return;
    }

    sideeffect(videoDOM);
  };

  componentDidMount() {
    this.applyVideo(this.video, videoDOM => {
      videoDOM.playbackRate = 0.6;
    });

    this.applyVideo(this.video_2, videoDOM => {
      videoDOM.playbackRate = 0.6;
      videoDOM.pause();
    });
  }

  hideVideo = (value: boolean) => {
    this.applyVideo(this.video, videoDOM => {
      videoDOM.playbackRate = 0.6;

      if(!value) {
        videoDOM.currentTime = 0;
      }

      value ? videoDOM.pause() : (videoDOM.play());
    });

    this.applyVideo(this.video_2, videoDOM => {
      videoDOM.playbackRate = 0.6;

      if(value) {
        videoDOM.currentTime = 0;
      }

      value ? (videoDOM.play()) : videoDOM.pause();
    });

    this.setState({
      hide_video: value
    });
  };

  render() {
    return (
      <Container>
        <Video
          muted
          playsInline
          innerRef={this.video_2}
          onEnded={() => {
            this.hideVideo(false);
          }}
          out={!this.state.hide_video}
        >
          <source src="assets/background_2.mp4" type="video/mp4" />
          {'Your browser does not support HTML5 video.'}
        </Video>
        <Video
          autoPlay
          muted
          playsInline
          innerRef={this.video}
          onEnded={() => {
            this.hideVideo(true);
          }}
          onCanPlay={() => {
            this.applyVideo(this.video, videoDOM => {
              if(!this.state.hide_video) {
                videoDOM.play();
              }
            });
          }}
          out={this.state.hide_video}
        >
          <source src="assets/background.mp4" type="video/mp4" />
          {'Your browser does not support HTML5 video.'}
        </Video>
        <BackgroundColor />
        <PatternBackground />
        <ContentContainer>
          <Content />
        </ContentContainer>
      </Container>
    );
  }
}

export default Hero;
