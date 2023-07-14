'use client';
import { Button, Htag, Ptag, Tag, Rating } from '@/components';
import { useEffect, useState } from 'react';
import './globals.css';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(5);

  useEffect(() => {
    console.log('counter', counter);
    return function cleanup() {
      console.log('cleanup');
    };
  }, [counter]);

  return (
    <>
      <Htag tag='h1'> Текст h1 </Htag>
      <Button appearance='clear'> Button clear</Button>
      <Button appearance='primary' arrow='right'>
        Button primary
      </Button>
      <Button appearance='primary' arrow='down'>
        Button primary
      </Button>
      <Ptag size='S'> Параграф S</Ptag>
      <Ptag> Параграф М</Ptag>
      <Ptag size='L'> Параграф L</Ptag>
      <Tag>Size S</Tag>
      <Tag size='M'>Size M</Tag>
      <Tag color='green'>Size S green</Tag>
      <Tag size='M' color='red'>
        Size M red
      </Tag>
      <Ptag> {counter}</Ptag>
      <Button appearance='primary' onClick={(): void => setCounter((counter) => counter + 1)}>
        Увеличить
      </Button>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}







