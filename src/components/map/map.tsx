import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { OfferType } from '../../types/offer';
import { OfferLocation } from '../../types/offer-location';
import useMap from '../../hooks/use-map';

type IconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

type MapProps = {
  block: string;
  location: OfferLocation;
  offers: OfferType[];
  specialOfferId: OfferType['id'] | null;
};

const defaultIcon: IconConfig = {
  url: '/img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

const activeIcon: IconConfig = {
  url: '/img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

function createIcon(iconConfig: IconConfig) {
  return new Icon({
    iconUrl: iconConfig.url,
    iconSize: [iconConfig.width, iconConfig.height],
    iconAnchor: [iconConfig.anchorX, iconConfig.anchorY]
  });
}

function Map({ block, location, offers, specialOfferId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === specialOfferId
              ? createIcon(activeIcon)
              : createIcon(defaultIcon)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style = {{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
    />
  );

}

export default Map;
