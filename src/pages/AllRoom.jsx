import React from "react";
import {
  List,
  ThemeIcon,
  rem,
  Input,
  Button,
  Select,
  ActionIcon,
  Badge,
  Pagination,
} from "@mantine/core";
import {
  IconArrowsMaximize,
  IconCalendar,
  IconCircleCheck,
  IconFilter,
  IconHeart,
  IconHome,
  IconLocation,
  IconMoneybag,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";

const AllRoom = () => {
  return (
    <div className="px-36 mb-12">
      <div className="bg--500 h- grid grid-cols-4  ">
        {/* search-filters */}
        <div className=" mb-6 col-span-4 bg-white  sticky top-20  pt-3 z-50 flex flex-col gap-1">
          <div className="grid grid-cols-8 gap-1 h-fit">
            <Button
              leftSection={<IconHome size={14} />}
              variant="light"
              color="black"
              fullWidth
            >
              For Rent
            </Button>
            <Input
              clearable
              className="col-span-2"
              size="md"
              placeholder="Location"
              leftSection={<IconLocation size={16} />}
            />
            <Select
              data={["React", "Angular", "Vue", "Svelte"]}
              className="col-span-2"
              size="md"
              clearable
              placeholder="Price Range"
              leftSection={<IconMoneybag size={16} />}
            />
            <Select
              data={["React", "Angular", "Vue", "Svelte"]}
              className="col-span-2"
              size="md"
              placeholder="Room Type"
              leftSection={<IconHome size={16} />}
              clearable
            />
            <Button
              leftSection={<IconFilter size={14} />}
              variant="default"
              color="black"
              fullWidth
            >
              More Filter
            </Button>
          </div>
          <h2 className="text-xs font-bold mb-3 uppercase text-gray-500 hover:text-red-500 cursor-pointer">
            Clear Filters
          </h2>
        </div>
        {/* room results */}
        <div className="col-span-3   mr-12">
          <div className="flex justify-between mb-2">
            <h2 className="text-base font-semibold mb-3">
              Showing Result Based on Search{" "}
            </h2>
            <Select
              data={["React", "Angular", "Vue", "Svelte"]}
              size="xs"
              clearable
              variant="filled"
              placeholder="Relevance"
            />
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="w-full h-52 bg--900 flex gap-3">
              <div className="w-[33%] h-full bg--500 rounded-lg overflow-hidden">
                {" "}
                <img
                  loading="lazy"
                  className="h-full object-cover "
                  src="https://imgs.search.brave.com/KRRAOgBuc7uSK908SFk_CvG5IkbNc0-annZgaXi_b_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNWUy/YjUzYjhkZWQ2Y2Mw/MDA4MjIwZjk2L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9HZXR0/eUltYWdlcy01MDE2/NDgwNDEuanBn"
                  alt=""
                />
              </div>
              <div className="w-[67%] h-full bg--500 flex flex-col justify-between">
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="filled" color="#ffb200" size="sm" radius="xs">
                    Rent
                  </Badge>
                  <div className="flex gap-2">
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconHeart size={18} />
                    </ActionIcon>
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconArrowsMaximize size={18} />
                    </ActionIcon>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  {" "}
                  <b className="text-xl font-bold">
                    Rs. 5700{" "}
                    <span className="text-sm font-semibold">/Months</span>
                  </b>
                  <div>
                    <h1 className=" text-sm font-semibold ">
                      Mero City Apartment : Apartment for Sale in Hattiban,
                      Lalitpur
                    </h1>
                    <h4 className=" text-sm font-light mb-2">
                      Hattiban, Lalitpur
                    </h4>
                    <div className="flex  items-center gap-1  ">
                      <IconHome size={14} />
                      <h4 className=" text-sm font-light ">1BHK</h4>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="flex justify-end items-center gap-1  ">
                      <IconCalendar size={14} />
                      <h4 className=" text-sm font-light ">Feb 29, 2024</h4>
                    </div>
                    <div className="flex justify-end items-center gap-1  ">
                      <IconUser size={14} />
                      <h4 className=" text-sm font-light ">Swornim Shrestha</h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button variant="default" color="black">
                      View Details
                    </Button>
                    <ActionIcon
                      variant="gradient"
                      size="lg"
                      aria-label="Gradient action icon"
                      gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconPhoneCall size={18} />
                    </ActionIcon>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-52 bg--900 flex gap-3">
              <div className="w-[33%] h-full bg--500 rounded-lg overflow-hidden">
                {" "}
                <img
                  loading="lazy"
                  className="h-full object-cover "
                  src="https://imgs.search.brave.com/KRRAOgBuc7uSK908SFk_CvG5IkbNc0-annZgaXi_b_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNWUy/YjUzYjhkZWQ2Y2Mw/MDA4MjIwZjk2L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9HZXR0/eUltYWdlcy01MDE2/NDgwNDEuanBn"
                  alt=""
                />
              </div>
              <div className="w-[67%] h-full bg--500 flex flex-col justify-between">
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="filled" color="#ffb200" size="sm" radius="xs">
                    Rent
                  </Badge>
                  <div className="flex gap-2">
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconHeart size={18} />
                    </ActionIcon>
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconArrowsMaximize size={18} />
                    </ActionIcon>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  {" "}
                  <b className="text-xl font-bold">
                    Rs. 5700{" "}
                    <span className="text-sm font-semibold">/Months</span>
                  </b>
                  <div>
                    <h1 className=" text-sm font-semibold ">
                      Mero City Apartment : Apartment for Sale in Hattiban,
                      Lalitpur
                    </h1>
                    <h4 className=" text-sm font-light mb-2">
                      Hattiban, Lalitpur
                    </h4>
                    <div className="flex  items-center gap-1  ">
                      <IconHome size={14} />
                      <h4 className=" text-sm font-light ">1BHK</h4>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="flex justify-end items-center gap-1  ">
                      <IconCalendar size={14} />
                      <h4 className=" text-sm font-light ">Feb 29, 2024</h4>
                    </div>
                    <div className="flex justify-end items-center gap-1  ">
                      <IconUser size={14} />
                      <h4 className=" text-sm font-light ">Swornim Shrestha</h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button variant="default" color="black">
                      View Details
                    </Button>
                    <ActionIcon
                      variant="gradient"
                      size="lg"
                      aria-label="Gradient action icon"
                      gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconPhoneCall size={18} />
                    </ActionIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-52 bg--900 flex gap-3">
              <div className="w-[33%] h-full bg--500 rounded-lg overflow-hidden">
                {" "}
                <img
                  loading="lazy"
                  className="h-full object-cover "
                  src="https://imgs.search.brave.com/KRRAOgBuc7uSK908SFk_CvG5IkbNc0-annZgaXi_b_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNWUy/YjUzYjhkZWQ2Y2Mw/MDA4MjIwZjk2L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9HZXR0/eUltYWdlcy01MDE2/NDgwNDEuanBn"
                  alt=""
                />
              </div>
              <div className="w-[67%] h-full bg--500 flex flex-col justify-between">
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="filled" color="#ffb200" size="sm" radius="xs">
                    Rent
                  </Badge>
                  <div className="flex gap-2">
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconHeart size={18} />
                    </ActionIcon>
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconArrowsMaximize size={18} />
                    </ActionIcon>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  {" "}
                  <b className="text-xl font-bold">
                    Rs. 5700{" "}
                    <span className="text-sm font-semibold">/Months</span>
                  </b>
                  <div>
                    <h1 className=" text-sm font-semibold ">
                      Mero City Apartment : Apartment for Sale in Hattiban,
                      Lalitpur
                    </h1>
                    <h4 className=" text-sm font-light mb-2">
                      Hattiban, Lalitpur
                    </h4>
                    <div className="flex  items-center gap-1  ">
                      <IconHome size={14} />
                      <h4 className=" text-sm font-light ">1BHK</h4>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="flex justify-end items-center gap-1  ">
                      <IconCalendar size={14} />
                      <h4 className=" text-sm font-light ">Feb 29, 2024</h4>
                    </div>
                    <div className="flex justify-end items-center gap-1  ">
                      <IconUser size={14} />
                      <h4 className=" text-sm font-light ">Swornim Shrestha</h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button variant="default" color="black">
                      View Details
                    </Button>
                    <ActionIcon
                      variant="gradient"
                      size="lg"
                      aria-label="Gradient action icon"
                      gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconPhoneCall size={18} />
                    </ActionIcon>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-52 bg--900 flex gap-3">
              <div className="w-[33%] h-full bg--500 rounded-lg overflow-hidden">
                {" "}
                <img
                  loading="lazy"
                  className="h-full object-cover "
                  src="https://imgs.search.brave.com/KRRAOgBuc7uSK908SFk_CvG5IkbNc0-annZgaXi_b_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNWUy/YjUzYjhkZWQ2Y2Mw/MDA4MjIwZjk2L21h/c3Rlci93XzE2MDAs/Y19saW1pdC9HZXR0/eUltYWdlcy01MDE2/NDgwNDEuanBn"
                  alt=""
                />
              </div>
              <div className="w-[67%] h-full bg--500 flex flex-col justify-between">
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="filled" color="#ffb200" size="sm" radius="xs">
                    Rent
                  </Badge>
                  <div className="flex gap-2">
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconHeart size={18} />
                    </ActionIcon>
                    <ActionIcon
                      color=""
                      variant="default"
                      size="lg"
                      // gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconArrowsMaximize size={18} />
                    </ActionIcon>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  {" "}
                  <b className="text-xl font-bold">
                    Rs. 5700{" "}
                    <span className="text-sm font-semibold">/Months</span>
                  </b>
                  <div>
                    <h1 className=" text-sm font-semibold ">
                      Mero City Apartment : Apartment for Sale in Hattiban,
                      Lalitpur
                    </h1>
                    <h4 className=" text-sm font-light mb-2">
                      Hattiban, Lalitpur
                    </h4>
                    <div className="flex  items-center gap-1  ">
                      <IconHome size={14} />
                      <h4 className=" text-sm font-light ">1BHK</h4>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="flex justify-end items-center gap-1  ">
                      <IconCalendar size={14} />
                      <h4 className=" text-sm font-light ">Feb 29, 2024</h4>
                    </div>
                    <div className="flex justify-end items-center gap-1  ">
                      <IconUser size={14} />
                      <h4 className=" text-sm font-light ">Swornim Shrestha</h4>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button variant="default" color="black">
                      View Details
                    </Button>
                    <ActionIcon
                      variant="gradient"
                      size="lg"
                      aria-label="Gradient action icon"
                      gradient={{ from: "green", to: "teal", deg: 90 }}
                    >
                      <IconPhoneCall size={18} />
                    </ActionIcon>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              total={3}
              color="#ffb200"
              size="md"
              radius="sm"
              className="text-center"
            />
          </div>
        </div>
        {/* explore and ads section */}
        <div className="col-span-1 bg--700  ">
          <div className="w-full ">
            <h2 className="text-base font-semibold mb-3">Explore more rooms</h2>

            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="#ffb200" size={24} radius="xl">
                  <IconCircleCheck
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <List.Item className=" cursor-pointer">
                Room in Lalitpur
              </List.Item>
              <List.Item className=" cursor-pointer">
                Room in Bhaktapur
              </List.Item>
              <List.Item className=" cursor-pointer">
                Room in Outside Kathmandu Valley
              </List.Item>
              <List.Item className=" cursor-pointer">
                Room in Kathmandu
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoom;
