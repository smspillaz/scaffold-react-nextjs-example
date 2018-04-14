import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

const coolPlaces = [
  'The Pizza Place',
  'The Burger Place',
  'The Drinks Bar',
  'Inventing names of thing'
];

const terriblePlaces = [
  'LionAir'
];

export const PlaceList = ({ places, color, children }) => (
  <div>
    {children}
    <ul>
      {places.map(place => (
        <li style={{ padding: 20, backgroundColor: color }}>{place}</li>
      ))}
    </ul>
  </div>
);

const App = () => (
  <div>
    <Layout>
      <p>Hello, world</p>
      <Link href='/somePage'>Some page</Link>
      <PlaceList places={coolPlaces} color="blue">
        <p>Child!</p>
      </PlaceList>
      <p>Terrible Places</p>
      <PlaceList places={terriblePlaces} color="red" />
    </Layout>
  </div>
);

export default App;