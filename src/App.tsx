import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Panel from './components/Panel';
import Game from './components/Game';

const App = () => {
  enum Mode {
    Default,
    VsPlayer,
    VsComputer,
  }
  const [mode, setMode] = useState<Mode>(Mode.Default);

  const handleVsPlayer = () => {
    if (mode === Mode.Default || mode === Mode.VsComputer) {
      setMode(Mode.VsPlayer);
    } else {
      setMode(Mode.Default);
    }
  };
  const handleVsComputer = () => {
    if (mode === Mode.Default || mode === Mode.VsPlayer) {
      setMode(Mode.VsComputer);
    } else {
      setMode(Mode.Default);
    }
  };

  return (
    <Flex flexDir='column' alignItems='center'>
      <Panel mode={mode} vsPlayerHandler={handleVsPlayer} vsComputerHandler={handleVsComputer} />
      <Game />
    </Flex>
  );
};

export default App;
