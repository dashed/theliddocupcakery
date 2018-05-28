// @flow

// 3rd-party imports

import * as React from 'react';
import styled, { css } from 'styled-components';

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

type State = {
  video_src: string
};

class Hero extends React.Component<{}, State> {
  video = null;

  state = {
    video_src: 'assets/background.mp4'
  };

  constructor(props: {}) {
    super(props);

    this.video = React.createRef();
  }

  setupVideo = () => {
    if (!this.video) {
      return;
    }

    const videoDOM = this.video.current;

    if (!videoDOM) {
      return;
    }

    videoDOM.playbackRate = 0.6;
  };

  componentDidMount() {
    this.setupVideo();
  }

  changeVideo = () => {
    const { video_src } = this.state;

    const new_video_src = video_src === 'assets/background.mp4' ? 'assets/background_2.mp4' : 'assets/background.mp4';

    this.setState(
      {
        video_src: new_video_src
      },
      () => {
        this.setupVideo();
      }
    );
  };

  render() {
    return (
      <Container>
        <Video
          autoPlay
          muted
          playsInline
          innerRef={this.video}
          onEnded={() => {
            this.changeVideo();
          }}
          key={this.state.video_src}
        >
          <source src={this.state.video_src} type="video/mp4" />
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
