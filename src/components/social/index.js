import React from 'react';
import { Pintrest, LinkedIn, Facebook, Twitter } from './icons';
import { Outer, Btn } from './styles';

export default function SocialBar() {
  return (
    <Outer>
      <Btn
        onClick={() => {
          window.open('http://twitter.com', '_blank');
        }}
      >
        <Twitter />
      </Btn>
      <Btn>
        <Facebook />
      </Btn>
      <Btn>
        <Pintrest />
      </Btn>
      <Btn>
        <LinkedIn />
      </Btn>
    </Outer>
  );
}
