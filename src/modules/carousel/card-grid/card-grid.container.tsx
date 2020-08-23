import React from 'react';

import { Card } from 'domain/card/card.types';

import { AhfCardComponent } from '../card/card.component';

interface Props {
  cards: Array<Card>;
}

export const AhfCardGridContainer: React.FC<Props> = ({ cards }: Props) => (
  <>
    {cards.map((card, index) => (
      <AhfCardComponent key={index} card={card} />
    ))}
  </>
);
