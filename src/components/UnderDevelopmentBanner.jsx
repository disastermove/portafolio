import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const UnderDevelopmentBanner = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && (
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>🚧 Under Development 🚧</Alert.Heading>

                </Alert>
            )}
        </>
    );
};

export default UnderDevelopmentBanner