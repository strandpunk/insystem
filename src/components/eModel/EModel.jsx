import React from 'react';
import './EModel.scss'

class EModel extends React.Component {
    render() {
        return (
            <iframe
                className='EModel-frame'
                title="eDrawings Viewer"
                src="model1.html"
                width="100%"
                height="100%"
                frameBorder="0"
            />
        );
    }
}

export default EModel;
