import axios from "axios";
import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Select,
  NumberInput,
  FileButton,
  ScrollArea,
  Switch,
  MultiSelect,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DateInput, Day } from "@mantine/dates";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const PostForFree = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <ScrollArea>
        <form
          onSubmit={form.onSubmit(async (values) => {
            console.log(token);
            const formattedValues = {
              ...values,
              dateOfBuild: dayjs(values.dateOfBuild).format("YYYY-MM-DD"),
            };
            console.log(values);

            try {
              const response = await axios.post("/api/room", formattedValues, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
              });
              console.log("Success:", response.data);
              form.reset();
            } catch (error) {
              console.error("Error:", error);
            }
          })}
        >
          <div className="flex justify-center py-10">
            <h2 className="text-3xl font-semibold text-gray-800">Add Room</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mx-5">
            {/* 1 */}
            <div className="w-full md:w-1/2 mx-auto bg-white shadow-lg p-10 rounded-md">
              <h2 className="text-xl font-semibold text-gray-700">
                1. Basic Details
              </h2>
              <p className="text-sm text-gray-500">
                All fields marked with * are mandatory
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
                <div>
                  <Select
                    description="Enter Purpose"
                    label="Purpose"
                    required
                    defaultValue="RENT"
                    placeholder="Pick value"
                    data={["RENT", "SALE", "LEASE", "PAYING_GUEST"]}
                    key={form.key("purpose")}
                    {...form.getInputProps("purpose")}
                  ></Select>
                </div>

                <div>
                  <TextInput
                    label="Title"
                    placeholder="title"
                    description="Enter Title"
                    key={form.key("title")}
                    {...form.getInputProps("title")}
                  />
                </div>

                <div>
                  <Select
                    description="Enter Category"
                    label="Category"
                    defaultValue="SINGLE_ROOM"
                    placeholder="Pick value"
                    data={[
                      "SINGLE_ROOM",
                      "TWO_ROOM",
                      "ONE_BHK",
                      "TWO_BHK",
                      "THREE_BHK",
                      "FOUR_BHK",
                      "FLAT",
                      "HOUSE",
                      "APARTMENT",
                    ]}
                    key={form.key("category")}
                    {...form.getInputProps("category")}
                  ></Select>
                </div>

                <div></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
                <div>
                  <NumberInput
                    label="Price"
                    withAsterisk
                    description="Enter Price"
                    placeholder="Enter Price"
                    key={form.key("price")}
                    {...form.getInputProps("price")}
                  />
                </div>
                <div>
                  <Select
                    description=" Enter Price Negotiate"
                    label="Price Negotiate"
                    defaultValue="YES"
                    placeholder="Pick value"
                    data={["YES", "NO"]}
                    key={form.key("negotiable")}
                    {...form.getInputProps("negotiable")}
                  ></Select>
                </div>
              </div>

              {/* 2 */}
              <div className="w-full   bg-white  rounded-md mt-12">
                <h2 className="text-xl font-semibold text-gray-700">
                  2. Amenities
                </h2>
                <p className="text-sm text-gray-500">
                  All fields marked with * are mandatory
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                  <div>
                    <DateInput
                      valueFormat="YYYY MMM DD"
                      description="Enter date of build"
                      label="Date of Build"
                      placeholder="Date input"
                      key={form.key("dateOfBuild")}
                      {...form.getInputProps("dateOfBuild")}
                    />
                  </div>
                  <div>
                    <NumberInput
                      description=" Enter  BedRoom"
                      label="BedRoom"
                      placeholder="Pick BedRoom "
                      key={form.key("bedRoom")}
                      {...form.getInputProps("bedRoom")}
                    ></NumberInput>
                  </div>
                  <div>
                    <Select
                      description=" Enter  Kitchen"
                      label="Furnishing"
                      defaultValue="YES"
                      placeholder="Pick Kitchen "
                      data={["YES", "NO"]}
                      key={form.key("kitchen")}
                      {...form.getInputProps("kitchen")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description=" Enter  BathRoom"
                      label="BathRoom"
                      defaultValue="YES"
                      placeholder="Pick BathRoom "
                      data={["YES", "NO"]}
                      key={form.key("bathRoom")}
                      {...form.getInputProps("bathRoom")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description=" Enter  Furnishing"
                      label="Furnishing"
                      defaultValue="YES"
                      placeholder="Pick Furnishing "
                      data={["YES", "NO"]}
                      key={form.key("furnishing")}
                      {...form.getInputProps("furnishing")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description=" Enter  Faced"
                      label="Faced"
                      defaultValue="YES"
                      placeholder="Pick Faced "
                      data={["SOUTH", "WEST", "NORTH", "EAST"]}
                      key={form.key("face")}
                      {...form.getInputProps("face")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description="Enter  Parking"
                      label="Parking"
                      defaultValue="YES"
                      placeholder="Pick Parking "
                      data={["YES", "NO"]}
                      key={form.key("parking")}
                      {...form.getInputProps("parking")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description="Enter  Balcony"
                      label="Balcony"
                      defaultValue="YES"
                      placeholder="Pick Balcony "
                      data={["YES", "NO"]}
                      key={form.key("balcony")}
                      {...form.getInputProps("balcony")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description="Enter Rental Floor "
                      label="Rental Floor"
                      defaultValue="GROUND_FLOOR"
                      placeholder="Pick Rental Floor"
                      data={[
                        "GROUND_FLOOR",
                        "FIRST_FLOOR",
                        "SECOND_FLOOR",
                        "THIRD_FLOOR",
                      ]}
                      key={form.key("floor")}
                      {...form.getInputProps("floor")}
                    ></Select>
                  </div>

                  <div>
                    <Select
                      description="Enter Road Type "
                      label="Road Type"
                      defaultValue="GORETO_BATO"
                      placeholder="Pick Road Type"
                      data={[
                        "GORETO_BATO",
                        "BLACK_PICHED",
                        "GRAVEL_ROAD",
                        "DHALAN_ROAD",
                        "MUDDY_ROAD",
                      ]}
                      key={form.key("roodType")}
                      {...form.getInputProps("roodType")}
                    ></Select>
                  </div>
                  <div>
                    <Select
                      description="Enter Water Facility "
                      label="Water Facility"
                      defaultValue="YES"
                      placeholder="Pick Water Facility"
                      data={["YES", "NO"]}
                      key={form.key("waterFacility")}
                      {...form.getInputProps("waterFacility")}
                    ></Select>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="max-w-4xl mx-auto bg-white   rounded-md mt-10">
                <h2 className="text-xl font-semibold text-gray-700">
                  3. More details
                </h2>
                <p className="text-sm text-gray-500">
                  All fields marked with * are mandatory
                </p>

                <div className="flex flex-col gap-8">
                  <div>
                    <NumberInput
                      required
                      label="Contact Number"
                      placeholder="Contact Number"
                      description="Enter Contact Number"
                      key={form.key("phoneNumber")}
                      {...form.getInputProps("phoneNumber")}
                    />
                  </div>
                  <div>
                    <TextInput
                      label="Description"
                      placeholder="Description"
                      description="Enter Description"
                      key={form.key("description")}
                      {...form.getInputProps("description")}
                    />
                  </div>
                  <div>
                    <TextInput
                      label=" Property Location"
                      placeholder=" Property Location"
                      description="Enter  Property Location"
                      key={form.key("location")}
                      {...form.getInputProps("location")}
                    />
                  </div>
                  <div>
                    <MultiSelect
                      label="Local Area Facilities"
                      description="Enter Local Area Facilities"
                      placeholder="Pick localArea"
                      data={[
                        "GYM",
                        "SWIMMING_POOL",
                        "PLAYING_COURT",
                        "HOSPITAL",
                        "SCHOOL",
                        "MONTESSORI",
                        "COLLEGE",
                        "TEMPLE",
                        "RESTAURANTS",
                        "SUPER_MARKET",
                        "BUS_STOP",
                        "POLICE_STATION",
                        "BANK",
                        "TAXI_STAND",
                        "GAS_STATION",
                      ]}
                      key={form.key("localArea")}
                      {...form.getInputProps("localArea")}
                    />
                  </div>
                </div>
              </div>

              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </div>
          </div>
        </form>
      </ScrollArea>
    </>
  );
};

export default PostForFree;
