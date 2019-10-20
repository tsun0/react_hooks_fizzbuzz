import React, {FC, useState, useEffect} from 'react'
import {Button, Card, Icon, Statistic} from 'semantic-ui-react';

import './App.css';

const LIMIT = 60;

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const answer = (count:number) => {
    if (count === 0) {
      return '-';
    } else if (count % 15 === 0) {
      return 'FizzBuzz';
    } else if (count % 3 === 0) {
      return 'Fizz';
    } else if (count % 5 === 0) {
      return 'Buzz';
    } else {
      return '-';
    }
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, [])

  const resetTime = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  }

  return (
    <div className="container">
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui three buttons">
            <Button color="red" onClick={decrement}>-1</Button>
            <Button color="yellow" onClick={reset}>reset</Button>
            <Button color="blue" onClick={increment}>+1</Button>
          </div>
          <Card.Header className="center">FizzBuzz?</Card.Header>
          <Card.Description className="center">{answer(count)}</Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>timer</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={resetTime}>
            <Icon name="redo" />Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}

export default App;
