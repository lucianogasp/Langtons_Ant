import './Squares.css';

type SquaresProps = {
  id: string;
  litStatus: boolean | undefined;
  squareSize: number;
}

const stateClassMap: Record<string, string> = {
  true: 'litup-square',
  false: 'unlit-square',
  undefined: 'untouch-square'
}

export const Squares = ({ id, litStatus, squareSize }: SquaresProps): React.ReactNode => {
  const stateClass = `square ${stateClassMap[String(litStatus)]}`;

  return (
    <div 
      id={id}
      className={stateClass}
      style={{
        width: `${squareSize}px`,
        height: `${squareSize}px`
      }}
    />
  )
}