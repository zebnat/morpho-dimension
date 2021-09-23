import React, { useEffect } from 'react'

export default () => {
    useEffect(() => {
        alert("a")
    }, []);

    return (
        <>
            <h1>This is the Main page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex mi, dictum in urna vitae, bibendum pretium ante. Sed sit amet commodo magna. Nullam ut turpis neque. Nunc ut orci aliquam, egestas nisi in, sollicitudin felis. Phasellus eu eleifend urna. Donec placerat, diam at tincidunt ultrices, est augue pretium magna, sit amet venenatis erat orci quis diam. Ut id eros eget orci malesuada convallis. Nunc blandit consectetur faucibus. Etiam venenatis luctus vehicula. Quisque maximus sapien nunc, et rutrum lectus semper vel. Sed pulvinar lacus leo, rhoncus euismod arcu tempus sit amet. Aenean sit amet lorem nec massa consequat consectetur. In vitae metus nec sapien placerat laoreet. Nunc non hendrerit lacus. In pretium pharetra ipsum vel tempus.</p>
        </>
    )
}