import React from 'react';

import { Card } from 'domain/card/card.types';

import { AhfCardComponent } from '../card/card.component';

interface Props {
  cards: Array<Card>;
  className?: string;
}

export const AhfCardGridContainer: React.FC<Props> = ({
  cards,
  className,
}: Props) => (
  <div className={className}>
    {cards.map((card, index) => (
      <AhfCardComponent key={index} card={card} />
    ))}
  </div>
);
