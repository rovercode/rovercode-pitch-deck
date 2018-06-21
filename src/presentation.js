// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
      primary: '#ff4081',
      secondary: '#FFFFFF',
      tertiary: '#111111',
    },
    {
      primary: 'Montserrat',
      secondary: 'Helvetica',
    }
);

export default class Presentation extends React.Component {
  render() {
    return (
        <Deck
            transition={['zoom', 'slide']}
            transitionDuration={500}
            theme={theme}
            progress={'none'}
        >
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>I can't start a robotics club; I don't know anything about coding!</Quote>
              <Cite>a teacher</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Wait, the kit costs HOW much?</Quote>
              <Cite>a teacher trying to start a robotics club</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Ok, now we have two days left to code everything!</Quote>
              <Cite>a robotics club coach</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['zoom']} bgImage="https://i.imgur.com/xKMOROA.jpg">
            <Image width="700" src={"https://i.imgur.com/9a5CxZk.png"} style="padding-right:6%" margin="0px auto 0px"/>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
            <Image width="700" src={"https://rovercode.com/static/images/rover.png"} margin="0px auto 0px"/>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit caps>
              motors | sensors | webcam | LEDs | speaker
            </Text>
          </Slide>
          <Slide transition={['fade']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Be a part of this
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
              follow @rovercode on Twitter
            </Text>
            <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
              ask your teacher to sign up on rovercode.com
            </Text>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Image width="700" src={"https://i.imgur.com/9a5CxZk.png"} style="padding-right:6%" margin="0px auto 0px"/>
            <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
              hit the ground coding
            </Text>
          </Slide>
        </Deck>
    );
  }
}
