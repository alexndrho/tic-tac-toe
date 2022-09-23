import React from 'react';
import { Flex, Heading, Button, Text } from '@chakra-ui/react';

enum Mode {
  Default,
  VsPlayer,
  VsComputer,
}

interface Props {
  mode: Mode;
  vsPlayerHandler: () => void;
  vsComputerHandler: () => void;
}

const btnSizes = ['sm', 'md'];

const Panel = ({ mode, vsPlayerHandler, vsComputerHandler }: Props) => {
  return (
    <Flex
      w='80%'
      mt={['3rem', '2rem', '1.5rem', '1rem']}
      mb='1rem'
      justify='space-between'
      alignItems='center'
    >
      <Heading fontSize={['3xl', '4xl', '5xl', '6xl']} userSelect='none'>
        TIC TAC TOE
      </Heading>

      <Flex
        ml='3'
        justifyContent='space-between'
        alignItems='center'
        width={['60%', '47.5%', '40%', '30%', '20%']}
      >
        <Text as='b' fontSize={['sm', 'sm', 'md']} mr={3} userSelect='none'>
          VERSUS
        </Text>
        <Button
          mr='1'
          onClick={vsPlayerHandler}
          size={btnSizes}
          colorScheme={mode === Mode.VsPlayer ? 'red' : 'blue'}
        >
          Player
        </Button>
        <Button
          onClick={vsComputerHandler}
          size={btnSizes}
          colorScheme={mode === Mode.VsComputer ? 'red' : 'blue'}
        >
          Computer
        </Button>
      </Flex>
    </Flex>
  );
};

export default Panel;
