import { Button } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const roundCoordinate = (value) => Number.parseFloat(value.toFixed(6));

const mapPointToCoordinates = (xPercent, yPercent) => {
  const lng = -180 + (xPercent / 100) * 360;
  const lat = 85 - (yPercent / 100) * 170;

  return {
    lat: roundCoordinate(lat),
    lng: roundCoordinate(lng),
  };
};

const coordinatesToMapPoint = (lat, lng) => ({
  x: clamp(((Number(lng) + 180) / 360) * 100, 0, 100),
  y: clamp(((85 - Number(lat)) / 170) * 100, 0, 100),
});

const LocationPinMap = ({
  value,
  onChange,
  title = "Pin your delivery spot",
  description = "Click anywhere on the map to drop the delivery pin.",
}) => {
  const handleMapSelection = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    const coordinates = mapPointToCoordinates(x, y);

    onChange({
      lat: coordinates.lat,
      lng: coordinates.lng,
      pin: { x, y },
    });
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = roundCoordinate(position.coords.latitude);
      const lng = roundCoordinate(position.coords.longitude);
      const pin = coordinatesToMapPoint(lat, lng);

      onChange({
        lat,
        lng,
        pin,
      });
    });
  };

  return (
    <div className="rounded-2xl border border-[#0c8563]/15 bg-white/60 p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[16px] font-[600] text-[#14332b]">{title}</h3>
          <p className="mt-1 text-[13px] text-[#5f6f69]">{description}</p>
        </div>
        <Button
          type="button"
          size="small"
          onClick={useCurrentLocation}
          className="!min-w-fit !rounded-full !border !border-[#0c8563] !px-3 !py-2 !text-[#0c8563]"
          startIcon={<MyLocationIcon fontSize="small" />}
        >
          Use my location
        </Button>
      </div>

      <button
        type="button"
        onClick={handleMapSelection}
        className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-[#d4e8e2] bg-[#dff5ee] text-left"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.75) 0 8%, transparent 8%), linear-gradient(135deg, rgba(12,133,99,0.18), rgba(255,255,255,0.55)), linear-gradient(90deg, rgba(12,133,99,0.12) 1px, transparent 1px), linear-gradient(rgba(12,133,99,0.12) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 48px 48px, 48px 48px",
          backgroundPosition: "center, center, center, center",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[12%] top-[26%] h-[12px] w-[76%] -rotate-[12deg] rounded-full bg-white/60" />
          <div className="absolute left-[16%] top-[58%] h-[14px] w-[68%] rotate-[10deg] rounded-full bg-white/55" />
          <div className="absolute left-[42%] top-[12%] h-[76%] w-[12px] rounded-full bg-white/45" />
        </div>

        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full"
          style={{
            left: `${value.pin.x}%`,
            top: `${value.pin.y}%`,
          }}
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[#ff6b6b] shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            <div className="absolute left-1/2 top-[24px] h-4 w-4 -translate-x-1/2 rotate-45 rounded-[3px] bg-[#ff6b6b]" />
          </div>
        </div>
      </button>

      <div className="mt-3 grid grid-cols-2 gap-3 text-[13px] text-[#24473c] sm:grid-cols-3">
        <div className="rounded-xl bg-[#f6fbf9] px-3 py-2">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-[#6c8179]">
            Latitude
          </span>
          <strong>{value.lat || "--"}</strong>
        </div>
        <div className="rounded-xl bg-[#f6fbf9] px-3 py-2">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-[#6c8179]">
            Longitude
          </span>
          <strong>{value.lng || "--"}</strong>
        </div>
        <div className="rounded-xl bg-[#f6fbf9] px-3 py-2 sm:col-span-1 col-span-2">
          <span className="block text-[11px] uppercase tracking-[0.18em] text-[#6c8179]">
            Pin
          </span>
          <strong>
            {Math.round(value.pin.x)}% x {Math.round(value.pin.y)}%
          </strong>
        </div>
      </div>
    </div>
  );
};

export default LocationPinMap;
