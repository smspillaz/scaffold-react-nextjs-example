import React from 'react';
import { PlaceList } from './';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';

const Page = () => (
  <div>
    <Layout>
      <Grid>
        <Row>
          <Col lg={3} lgOffset={3}>
            <PlaceList places={['something']} color="purple" />
            <Button bsStyle="success">Success</Button>
            <p>Secret page</p>
          </Col>
        </Row>
      </Grid>
    </Layout>
  </div>
);

export default Page;