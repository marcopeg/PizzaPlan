
import React from 'react';

import { getTypeLabel } from 'lib/pizza-types';

export class ResultsTable extends React.Component {

    static propTypes = {
        results: React.PropTypes.object,
    }

    static defaultProps = {
        results: {},
    }

    render() {
        var { results } = this.props;

        results = Object.keys(results).map(result => (
            <tr key={result}>
                <td className='x-result-label'>
                    {getTypeLabel(result)}
                </td>
                <td className='x-result-digit'>
                    {results[result]}
                </td>
            </tr>
        ));

        return (
            <div className='row'>
                <div className='col-xs-8 col-xs-offset-2'>
                    <table className='table x-table-results'>
                        <tbody>
                            {results}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
