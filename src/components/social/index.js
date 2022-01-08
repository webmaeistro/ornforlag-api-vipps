import React from 'react';
import { Instagram, LinkedIn, Facebook, Twitter } from './icons';
import { Outer, Btn } from './styles';

export default function SocialBar() {
  return (
    <Outer>
      <Btn
        onClick={() => {
          window.open('https://twitter.com/webmaeistro', '_blank');
        }}
      >
        <Twitter />
      </Btn>
      <Btn
        onClick={() => {
          window.open('https://facebook.com/ornforlag', '_blank');
        }}>
        <Facebook />
      </Btn>
      <Btn
        onClick={() => {
          window.open('https://instagram.com/ornforlag', '_blank');
        }}>
        <Instagram />
      </Btn>
      <Btn
        onClick={() => {
          window.open('https://linkedin.com/u/ornforlag', '_blank');
        }}>
        <LinkedIn />
      </Btn>
    </Outer>
  );
}
