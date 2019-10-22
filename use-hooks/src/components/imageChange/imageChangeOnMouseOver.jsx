import React from 'react'
import ImageToggleOnMouseOver from '../imageToggle/imageToggleOnMouseOver'
import chris1 from '../../assets/img/chris-1.png'
import chris2 from '../../assets/img/chris-2.png'
import becks1 from '../../assets/img/becks-1.png'
import becks2 from '../../assets/img/becks-2.png'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver 
        primaryImg={chris1}
        secondaryImg={chris2}
        alt="chris" />
      <ImageToggleOnMouseOver
        primaryImg={becks1} 
        secondaryImg={becks2} 
        alt="becks" />
    </div>
  )
}

export default ImageChangeOnMouseOver