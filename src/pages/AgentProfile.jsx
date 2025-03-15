import React, { useEffect } from "react";
import {
  List,
  ThemeIcon,
  rem,
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
  IconHeart,
  IconShare,
  IconHome,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import axios from "axios";
import ads from "../assets/googleAds1.png";

const AgentProfile = () => {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    fetchRoom();
  }, []);
  const fetchRoom = async () => {
    const response = await axios.get("/api/room/all");
    setRoom(response.data);
    console.log(response.data);
  };
  return (
    <div className="px-36 mb-12">
      <div className="bg--500 h- grid grid-cols-4  ">
        {/* search-filters */}
        <div className=" mb-6 col-span-4 bg-slate-100/90    pt-3 flex flex-col gap-1 p-5">
          <div className="  w-1/3  flex  ">
            <div className="w-32 h-32 relative overflow-hidden">
              <img
                className="w-32 h-32"
                src="https://basobaas.com/_next/image?url=https%3A%2F%2Fapi.basobaas.com%2Fapi%2Ffiles%2Fw1z2pceuc5h89y6%2Faytfq48xbp5ib9i%2Fbnx_profile_pic_dYP3JFRw40.png&w=1920&q=75"
                alt=""
              />
            </div>
            <div className="flex flex-col p-6 gap-2">
              <h1 className="text-xl font-bold">BN Exclusive</h1>
              <h1 className=" text-sm font-normal ">Banesthali</h1>
              <Button
                leftSection={<IconShare size={14} />}
                variant="default"
                size="compact-sm"
              >
                Share Profile
              </Button>
            </div>
          </div>
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
            {room.map((data, index) => (
              <div key={data.id} className="w-full h-52 bg--900 flex gap-3">
                <div className="w-[33%] h-full bg--500 rounded-lg overflow-hidden">
                  {" "}
                  <img
                    loading="lazy"
                    className="h-full object-cover "
                    src={data.room.imageFileUrl}
                    alt=""
                  />
                </div>
                <div className="w-[67%] h-full bg--500 flex flex-col justify-between">
                  <div className="flex justify-between items-center mt-2">
                    <Badge
                      variant="filled"
                      color="#ffb200"
                      size="sm"
                      radius="xs"
                    >
                      {data.room.purpose}
                    </Badge>
                    <div className="flex gap-2">
                      <ActionIcon color="" variant="default" size="lg">
                        <IconHeart size={18} />
                      </ActionIcon>
                      <ActionIcon color="" variant="default" size="lg">
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
                        {data.room.title}
                      </h1>
                      <h4 className=" text-sm font-light mb-2">
                        {" "}
                        {data.room.location}
                      </h4>
                      <div className="flex  items-center gap-1  ">
                        <IconHome size={14} />
                        <h4 className=" text-sm font-light ">
                          {data.room.category.replace("_", " ")}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <div className="flex justify-end items-center gap-1  ">
                        <IconCalendar size={14} />
                        <h4 className=" text-sm font-light ">
                          {" "}
                          {data.room.dateOfBuild}
                        </h4>
                      </div>
                      <div className="flex justify-end items-center gap-1  ">
                        <IconUser size={14} />
                        <h4 className=" text-sm font-light ">
                          {data.room.user.fullName}
                        </h4>
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
            ))}

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
            <img src={ads} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
