import React, { MouseEvent, useState } from 'react';
import { Grid, GridItem, Image } from '@chakra-ui/react';
import xIcon from '../assets/x-icon.png';
import oIcon from '../assets/o-icon.png';

const Game = () => {
  const bgColor = 'theme.background';

  const [cells, setCells] = useState<Array<typeof xIcon | typeof oIcon | ''>>(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);

  const handleClick = (event: MouseEvent<HTMLDivElement>, index: number) => {
    if (cells[index] !== '') return;

    const newCells = [...cells];

    if (isXTurn) {
      newCells[index] = xIcon;
      setIsXTurn(false);
    } else {
      newCells[index] = oIcon;
      setIsXTurn(true);
    }

    setCells(newCells);
  };

  return (
    <Grid
      h='500px'
      w='500px'
      mt='2.5rem'
      bg='white'
      templateColumns='repeat(3, 1fr)'
      templateRows='repeat(3, 1fr)'
      gap={2}
    >
      {cells.map((cell, index) => (
        <GridItem
          onClick={(e) => handleClick(e, index)}
          key={index}
          bg={bgColor}
          cursor='pointer'
          userSelect='none'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image src={cells[index]} w='75%' draggable='false' />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Game;
