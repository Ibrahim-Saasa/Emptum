import { useContext, useEffect, useState } from "react";
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { MyContext } from "../../App";
import { editData, fetchDataFromApi } from "../../utils/api";
import dayjs from "dayjs";

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: null,
    gender: "",
    nationality: null,
    address: "",
  });

  const navigate = useNavigate();
  const context = useContext(MyContext);

  // Load user data when component mounts
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
      return;
    }

    // Populate form with existing user data
    if (context.userData) {
      setFormFields({
        name: context.userData.name || "",
        email: context.userData.email || "",
        phone: context.userData.phone || "",
        dateOfBirth: context.userData.dateOfBirth
          ? dayjs(context.userData.dateOfBirth)
          : null,
        gender: context.userData.gender || "",
        nationality: context.userData.nationality || null,
        address: context.userData.address || "",
      });
    }
  }, [context.userData, navigate]);

  const handleChange = (field, value) => {
    setFormFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const updateData = {
        name: formFields.name,
        email: formFields.email,
        phone: formFields.phone,
        dateOfBirth: formFields.dateOfBirth
          ? formFields.dateOfBirth.toISOString()
          : null,
        gender: formFields.gender,
        nationality: formFields.nationality?.name || formFields.nationality,
        address: formFields.address,
      };

      const response = await editData(
        "/api/users/updateUserDetails",
        updateData
      );

      if (response.success) {
        context.openAlertBox("success", "Profile updated successfully!");

        // Update context with new user data
        context.setUserData(response.data);
      } else {
        context.openAlertBox("error", response.message || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      context.openAlertBox("error", "Failed to update profile");
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
          <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md !p-5 !mb-5">
            <div className="flex items-center !pb-3">
              <h2 className="!pb-0">My Profile</h2>
            </div>

            <Divider className="divider" />
            <form className="!mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="filled"
                    size="small"
                    className="w-full"
                    value={formFields.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="filled"
                    size="small"
                    className="w-full"
                    value={formFields.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={formFields.dateOfBirth}
                      className="!w-full"
                      onChange={(newValue) =>
                        handleChange("dateOfBirth", newValue)
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="filled" />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="w-[50%]">
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
              </div>

              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <FormControl variant="filled" fullWidth size="small">
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender-select"
                      value={formFields.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                      className="w-full"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-[50%] nation">
                  <CountrySelect
                    placeHolder="Select Country"
                    value={formFields.nationality}
                    onChange={(country) => handleChange("nationality", country)}
                    inputClassName="w-full custom-country-input"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <TextField
                    label="Address"
                    variant="filled"
                    size="small"
                    className="w-full"
                    value={formFields.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <Button
                    type="submit"
                    className="form-btn btn-border w-full !h-[45px]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving..." : "Save"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
