import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
export const ReactLightBox = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>Open Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=K4DyBUG242c',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ]}
      />
    </div>
  )
}
