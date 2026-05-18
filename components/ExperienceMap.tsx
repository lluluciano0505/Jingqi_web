"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { ExperienceEntry } from "@/lib/types";

interface ExperienceMapProps {
  entries: ExperienceEntry[];
  activeId: string | null;
  onMarkerClick: (id: string) => void;
}

function makeId(e: ExperienceEntry) {
  return `${e.institution}-${e.period}`;
}

export default function ExperienceMap({ entries, activeId, onMarkerClick }: ExperienceMapProps) {
  useEffect(() => {
    // Fix Leaflet default icon issue in Next.js
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[48, 12]}
      zoom={3}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {entries.map((entry) => {
        const id = makeId(entry);
        const isActive = id === activeId;
        return (
          <CircleMarker
            key={id}
            center={[entry.latitude, entry.longitude]}
            radius={isActive ? 10 : 7}
            pathOptions={{
              color: "#1e3a5f",
              fillColor: isActive ? "#1e3a5f" : "#4a7ab5",
              fillOpacity: 0.9,
              weight: 2,
            }}
            eventHandlers={{ click: () => onMarkerClick(id) }}
          >
            <Popup>
              <span className="font-semibold">{entry.institution}</span>
              <br />
              <span className="text-xs text-slate-500">{entry.city}</span>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
