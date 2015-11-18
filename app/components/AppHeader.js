
import React from 'react';

export class AppHeader extends React.Component {

    static propTypes = {
        tutle: React.PropTypes.string,
    }

    static defaultProps = {
        title: '',
    }

    render() {
        var { title } = this.props;
        return (
            <div style={{paddingTop:20, paddingBottom:20}}>
                <div className='jumbotron text-center'>
                    <h3 className='display-4'>{title}</h3>
                </div>
                <hr style={{width:50, marginTop:20}} />
            </div>
        );
    }
}
