import { useState } from 'react';
import './Grid.css';

import { Squares } from '@/components/Squares/Squares';

type LitupSquares = Record<string, boolean | undefined>;

export const Grid = (): React.ReactNode => {
  const [litupSquares, setLitupSquares] = useState<LitupSquares>({});

  const row = 30;
  const col = 30;
  const squareSize = 30;

  const renderSquares = (): React.ReactNode => {
    const squares = [];
    for (let x = 1; x <= row; x++) {
      for (let y = 1; y <= col; y++) {
        const id = `${x}-${y}`;

        squares.push(
          <Squares 
            key={id}
            id={id}
            litStatus={litupSquares[id]}
            squareSize={squareSize}
          />
        );
      }
    }
    return squares;
  }

  return (
    <section 
      className='grid-container'
      style={{
        gridTemplateColumns: `repeat(${col}, 1fr)`,
      }}
    >
      {renderSquares()}
    </section>
  )
}