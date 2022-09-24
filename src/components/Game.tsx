import React, { MouseEvent, useState, useEffect } from 'react';
import { Grid, GridItem, Flex, AspectRatio, Image } from '@chakra-ui/react';
import xIcon from '../assets/x-icon.png';
import oIcon from '../assets/o-icon.png';

enum Winner {
  NONE,
  PLAYERX,
  PLAYERO,
}

const Game = () => {
  const bgColor = 'theme.background';
  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [cells, setCells] = useState<Array<typeof xIcon | typeof oIcon | ''>>(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [whoWon, setWhoWon] = useState<Winner>(Winner.NONE);

  useEffect(() => {
    if (checkWin(xIcon)) {
      setWhoWon(Winner.PLAYERX);
    } else if (checkWin(oIcon)) {
      setWhoWon(Winner.PLAYERO);
    }
  }, [cells]);

  useEffect(() => {
    console.log(whoWon);
  }, [whoWon]);

  const checkWin = (playerMarker: typeof xIcon | typeof oIcon | '') =>
    WINNING_PATTERN.some((pattern) => pattern.every((index) => cells[index] === playerMarker));

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
