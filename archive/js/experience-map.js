const mapElement = document.querySelector('#experience-map');

if (mapElement) {
  const dataElement = document.querySelector('#experience-data');
  if (dataElement && window.L) {
    const entries = JSON.parse(dataElement.textContent);
    const leafletMap = window.L.map(mapElement, {
      scrollWheelZoom: false,
      zoomControl: true,
      worldCopyJump: false,
    });

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    const markerBounds = [];
    const duplicateTracker = new Map();

    entries.forEach((item) => {
      const latitude = Number(item.latitude);
      const longitude = Number(item.longitude);

      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return;
      }

      const duplicateKey = `${latitude.toFixed(4)}:${longitude.toFixed(4)}`;
      const duplicateIndex = duplicateTracker.get(duplicateKey) || 0;
      duplicateTracker.set(duplicateKey, duplicateIndex + 1);

      // Nudge markers sharing the exact same coordinate so each popup is reachable.
      const latitudeOffset = duplicateIndex * 0.12;
      const longitudeOffset = duplicateIndex * 0.12;
      const markerLat = latitude + latitudeOffset;
      const markerLng = longitude + longitudeOffset;

      const marker = window.L.circleMarker([markerLat, markerLng], {
        radius: 7,
        color: '#ff4100',
        fillColor: '#ff4100',
        fillOpacity: 0.9,
        weight: 2,
      }).addTo(leafletMap);

      const popupLines = [
        `<strong>${item.institution || ''}</strong>`,
        item.role || '',
        `${item.city || ''}, ${item.region || ''}`,
        item.period || '',
      ].filter(Boolean);

      marker.bindPopup(popupLines.join('<br>'));
      markerBounds.push([markerLat, markerLng]);
    });

    if (markerBounds.length > 0) {
      leafletMap.fitBounds(markerBounds, { padding: [40, 40] });
    } else {
      leafletMap.setView([35, 10], 2);
    }
  }
}