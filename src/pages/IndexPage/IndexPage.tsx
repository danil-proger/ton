import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section
          header="TON Homework TMA"
          footer="Mini App for the TON course homework. It is built with React, Vite, Telegram UI, tma.js and TON Connect."
        >
          <Cell subtitle="Open this app from Telegram after GitHub Pages deploy">
            My first Telegram Mini App
          </Cell>
        </Section>
        <Section
          header="TON Feature"
          footer="The TON Connect page is kept from the official template so the app can be extended with wallet flows later."
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Telegram Launch Data"
          footer="These pages show the technical data Telegram passes into a Mini App."
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
