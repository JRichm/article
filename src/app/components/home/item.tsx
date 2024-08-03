import React from 'react';

interface ItemProps {
  task: {
    id: string;
    name: string;
    url?: string;
  }
}

export default function Item({ task }: ItemProps): JSX.Element {
  return (
    <div className='bg-ibg p-2 h-[150px] rounded-md'>
      <p className='text-txl'>{task.name}</p>
    </div>
  );
}