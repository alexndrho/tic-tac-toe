import React, { MouseEvent, useState, useEffect } from 'react';
import { Grid, GridItem, Flex, AspectRatio, Image, Box, Button, Img } from '@chakra-ui/react';
import xIcon from '../assets/x-icon.png';
import oIcon from '../assets/o-icon.png';

enum Winner {
  NONE,
  DRAW,
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
    if (cells.every((cell) => cell !== '')) {
      setWhoWon(Winner.DRAW);
    }

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
    if (cells[index] !== '' || whoWon !== Winner.NONE) return;

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

  const handleRestart = () => {
    setCells(Array(9).fill(''));
    setIsXTurn(true);
    setWhoWon(Winner.NONE);
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

      <Flex
        display={whoWon !== Winner.NONE ? 'flex' : 'none'}
        flexDir='column'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        w='100%'
        h='65%'
        justify='center'
        align='center'
        bgColor={whoWon === Winner.PLAYERX ? 'blue.400' : 'red.400'}
        color={whoWon === Winner.PLAYERX ? 'red.500' : 'blue.500'}
        position='fixed'
        fontSize='5rem'
        fontWeight='600'
        textAlign='center'
        userSelect='none'
      >
        {whoWon === Winner.PLAYERX ? (
          <Box>
            <Img src={xIcon} display='inline' mr='8' h='5rem' userSelect='none' draggable='false' />
            won
          </Box>
        ) : whoWon === Winner.PLAYERO ? (
          <Box>
            <Img src={oIcon} display='inline' mr='8' h='5rem' userSelect='none' draggable='false' />
            won
          </Box>
        ) : (
          'Draw'
        )}

        <Button
          onClick={handleRestart}
          colorScheme={whoWon === Winner.PLAYERX ? 'red' : 'blue'}
          mt='3%'
        >
          Restart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Game;
