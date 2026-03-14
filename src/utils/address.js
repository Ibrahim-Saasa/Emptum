const DEFAULT_PIN_POSITION = { x: 50, y: 50 };

export const createEmptyAddress = () => ({
  fullName: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  street: "",
  apartment: "",
  postalCode: "",
  notes: "",
  location: {
    lat: "",
    lng: "",
    pin: DEFAULT_PIN_POSITION,
  },
});

export const buildFormattedAddress = (address) => {
  const addressParts = [
    address.street,
    address.apartment,
    address.city,
    address.state,
    address.country,
    address.postalCode,
  ].filter(Boolean);

  return addressParts.join(", ");
};

export const normalizeAddress = (source) => {
  const emptyAddress = createEmptyAddress();

  if (!source) {
    return emptyAddress;
  }

  if (typeof source === "string") {
    return {
      ...emptyAddress,
      street: source,
    };
  }

  const location = source.location || {};
  const pin = location.pin || {};

  return {
    ...emptyAddress,
    ...source,
    country: source.country || source.nationality || "",
    location: {
      lat: location.lat ?? "",
      lng: location.lng ?? "",
      pin: {
        x: Number.isFinite(pin.x) ? pin.x : DEFAULT_PIN_POSITION.x,
        y: Number.isFinite(pin.y) ? pin.y : DEFAULT_PIN_POSITION.y,
      },
    },
  };
};

export const getAddressFromUserData = (userData) =>
  normalizeAddress(userData?.shippingAddress || userData?.address);

export const getAddressPayload = (address) => {
  const normalizedAddress = normalizeAddress(address);

  return {
    address: buildFormattedAddress(normalizedAddress),
    shippingAddress: normalizedAddress,
  };
};
