import React, { useContext, useEffect, useState } from "react";
import { Button, Divider, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-country-state-city/dist/react-country-state-city.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { editData } from "../../utils/api";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import LocationPinMap from "../../components/LocationPinMap/LocationPinMap";
import {
  createEmptyAddress,
  getAddressFromUserData,
  getAddressPayload,
} from "../../utils/address";

const Address = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState(createEmptyAddress());

  const navigate = useNavigate();
  const context = useContext(MyContext);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/");
      return;
    }

    setFormFields(getAddressFromUserData(context.userData));
  }, [context.userData, navigate]);

  const handleChange = (field, value) => {
    setFormFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLocationChange = (location) => {
    setFormFields((prev) => ({
      ...prev,
      location,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const updateData = {
        phone: formFields.phone,
        email: formFields.email,
        ...getAddressPayload(formFields),
      };

      const response = await editData("/api/users/updateUserDetails", updateData);

      if (response.success) {
        const updatedUser = response.data || {
          ...context.userData,
          ...updateData,
        };

        context.openAlertBox("success", "Address updated successfully!");
        context.setUserData(updatedUser);
      } else {
        context.openAlertBox("error", response.message || "Update failed");
      }
    } catch (error) {
      console.error("Address update error:", error);
      context.openAlertBox("error", "Failed to update address");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[75%]">
          <div className="card rounded-md bg-[#fff0f5] !p-5 !mb-5 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center !pb-3">
              <h2 className="!pb-0">Address Book</h2>
            </div>

            <Divider className="divider" />

            <form className="!mt-5 space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  label="Full Name"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.fullName}
                  onChange={(event) =>
                    handleChange("fullName", event.target.value)
                  }
                />
                <TextField
                  label="Email"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <PhoneInput
                    country={null}
                    value={formFields.phone}
                    onChange={(value) => handleChange("phone", value)}
                    enableSearch
                    inputClass="mui-input custom-phone-input"
                    buttonClass="mui-button"
                    containerClass="mui-container"
                    placeholder="Phone No."
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      fontSize: "16px",
                      paddingLeft: "50px",
                      background: "rgba(0,0,0,0.06)",
                    }}
                  />
                </div>
                <TextField
                  label="Country"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.country}
                  onChange={(event) =>
                    handleChange("country", event.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  label="State / Province"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.state}
                  onChange={(event) => handleChange("state", event.target.value)}
                />
                <TextField
                  label="Town / City"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  label="House No. & Street"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.street}
                  onChange={(event) =>
                    handleChange("street", event.target.value)
                  }
                />
                <TextField
                  label="Apartment / Suite"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.apartment}
                  onChange={(event) =>
                    handleChange("apartment", event.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  label="Postal Code"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.postalCode}
                  onChange={(event) =>
                    handleChange("postalCode", event.target.value)
                  }
                />
                <TextField
                  label="Delivery Notes"
                  variant="filled"
                  size="small"
                  className="w-full"
                  value={formFields.notes}
                  onChange={(event) => handleChange("notes", event.target.value)}
                />
              </div>

              <LocationPinMap
                value={formFields.location}
                onChange={handleLocationChange}
                title="Delivery pin"
                description="Drop a pin so the courier can find the exact spot."
              />

              <Button
                type="submit"
                className="form-btn btn-border !h-[45px] w-full md:w-[240px]"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Address"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
