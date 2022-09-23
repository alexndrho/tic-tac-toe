import React, { MouseEvent, useState } from 'react';
import { Grid, GridItem, Flex, AspectRatio, Image } from '@chakra-ui/react';
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
    <Flex w='100%' h='75%' align='center' justifyContent='center'>
      <AspectRatio w={['375px', '500px']} ratio={1}>
        <Grid
          display='grid !important'
          h='100%'
          w='100%'
          bg='white'
          templateColumns='repeat(3, 1fr)'
          templateRows='repeat(3, 1fr)'
          gap={['0.4rem', 2]}
        >
          {cells.map((cell, index) => (
            <GridItem
              w='100%'
              h='100%'
              onClick={(e) => handleClick(e, index)}
              key={index}
              bg={bgColor}
              cursor='pointer'
              userSelect='none'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Image src={cells[index]} w='70%' draggable='false' />
            </GridItem>
          ))}
        </Grid>
      </AspectRatio>
    </Flex>
  );
};

export default Game;
