import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import React from "react";
import { ScreenContent } from '~/components/ScreenContent';
import Map from '~/components/Map'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{title: 'LocationApp'}} />
      <Map/>
    </>
  );
}
