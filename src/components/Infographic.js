import { MapInteractionCSS } from 'react-map-interaction'

export function infographic(img) {
  return (
    <MapInteractionCSS showControls="true" maxScale="5" minScale="1">
      <img alt={img.alt} src={require(`../img/${img.src}`).default} />
    </MapInteractionCSS>
  )
}
