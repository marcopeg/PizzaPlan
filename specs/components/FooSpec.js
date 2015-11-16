import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Foo } from 'components/Foo';

export default class FooSpec extends React.Component {
    render() {
        return (
            <Grid style={{marginTop:20}}>
                <Foo />
            </Grid>
        );
    }
}
