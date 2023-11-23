import * as React from 'react';

export function Header(prop) {
    return (
        <center>
            <div style={{ backgroundColor: '#42959e' }}>
                <h3 style={{ color: 'white' }}>Hello {prop.title}</h3>
            </div>
            <div>
                <footer style={{
                    paddingTop: '480px',
                    }}
                 >
                    {/* Copyright */}
                    <div
                        style={{
                            padding : '10px',
                            boxSizing: 'content-box',
                            position: 'relative',
                            overflow: 'visible',
                            backgroundColor: '#333',
                        }}
                     >
                        <p style={{ color: 'white' }}>© 2023 Copyright by Sag</p>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        </center>
    );
}
