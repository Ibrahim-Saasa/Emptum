import { useState } from "react";
import me from "../../assets/me.jpg";
import { LuUpload } from "react-icons/lu";
import { Button, Divider, TextField } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
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

const MyAccount = () => {
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[75%]">
          <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md !p-5">
            <h2 className="!pb-3">My Profile</h2>
            <Divider className="divider" />
            <form className="!mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="First Name"
                    variant="filled"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Last Name"
                    variant="filled"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <TextField
                    label="Username"
                    variant="filled"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="filled"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      value={dob}
                      className="!w-full"
                      onChange={(newValue) => setDob(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth variant="filled" />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="w-[50%]">
                  <PhoneInput
                    country={null} // default country
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputClass="mui-input custom-phone-input"
                    buttonClass="mui-button"
                    containerClass="mui-container"
                    placeholder="Phone No."
                    inputStyle={{
                      width: "100%",
                      height: "50px", // same as MUI TextField
                      borderRadius: "4px",
                      // border: "1px solid #c4c4c4",
                      fontSize: "16px",
                      paddingLeft: "50px", // so flag doesn’t overlap text
                      background: "rgba(0,0,0,0.06)",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !mt-5">
                <div className="w-[50%]">
                  <FormControl variant="filled" fullWidth size="small">
                    <InputLabel id="demo-simple-select-filled-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={gender}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-[50%] nation">
                  <CountrySelect
                    placeHolder="Select Country"
                    defaultValue={nationality}
                    onChange={(country) => setNationality(country)}
                    inputClassName="w-full custom-country-input" // for full width styling
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
                  />
                </div>
                <div className="w-[50%]">
                  <Button className="form-btn btn-border w-full !h-[45px]">
                    Save
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
