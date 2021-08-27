/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import IconNextjs from 'ui/icons/nextjs';
import LogoCrystallize from 'ui/icons/logo-crystallize';
import { useTranslation } from 'next-i18next';

import { useSettings } from 'components/settings-context';

import { Outer, Logo, NavList, Powered } from './styles';

export default function Footer() {
  const { t } = useTranslation('common');
  const { mainNavigation } = useSettings();

  return (
    <Outer>
      <Link href="/">
        <a>
          <Logo>
            <img src="/static/shop-logo.svg" alt="Ørn forlag logo" />
          </Logo>
        </a>
      </Link>
      <NavList>
        <h5>{t('layout.menu')}</h5>
        {mainNavigation.map((category) => (
          <li key={category.path}>
            <Link as={category.path} href="/[...catalogue]">
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </NavList>
      <div>
        {' '}
        <address>
          <strong>Ørn forlag</strong> <br />
          Veståsen 4<br />
          1362, Hosle, Norge
          <br />
          <br />
        </address>
        <strong>Tlf.:</strong> (+47) 909 60 404 <br />
        <strong>Org.nr.</strong>: 994304399 MVA <br />
        <strong>Kontonr.</strong>: 9235.27.10220
      </div>
      <br />
      <Powered>
        <p>Nettside av: </p>
        <a href="https://github.com/webmaeistro/" aria-label="Martin-Andersen">
          Martin Andersen
        </a>
      </Powered>
      <br />
      <Powered>
        <p></p>
        <a href="https://crystallize.com" aria-label="Crystallize">
          <LogoCrystallize size={2} />
        </a>{' '}
        <a href="https://nextjs.org/" aria-label="NextJs">
          <IconNextjs size={2} />
        </a>
      </Powered>
      <br />
      <br />
      <Powered>&copy; 2021 - Ørn forlag.</Powered>
    </Outer>
  );
}
