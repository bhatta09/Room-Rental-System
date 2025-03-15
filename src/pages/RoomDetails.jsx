import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Indicator,
  Title,
} from "@mantine/core";
import Breadcumbs from "../components/Breadcumbs";
import {
  IconAbc,
  IconBusStop,
  IconCalendar,
  IconCashBanknote,
  IconDirections,
  IconFlag,
  IconGasStation,
  IconHeart,
  IconHospitalCircle,
  IconHotelService,
  IconOm,
  IconParkingCircle,
  IconPhoneCall,
  IconSchool,
  IconShare,
  IconShoppingCart,
  IconUniverse,
  IconYoga,
} from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const RoomDetail = () => {
  const [roomData, setRoomData] = useState({});
  useEffect(() => {
    handleRoomDetail();
  }, []);

  const handleRoomDetail = async () => {
    try {
      const response = await axios.get(
        "/api/room/id?roomId=67b350f002da3f1c5035691a",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setRoomData(response.data);
      console.log("Room details:", response.data);
    } catch (error) {
      console.error("Error fetching room details:", error);
    }
  };
  return (
    <>
      <div className="px-36 mb-12">
        {/* title section */}
        <div className=" py-6 flex flex-col gap-1">
          <div>
            <Breadcumbs />
            <div className="flex justify-between">
              <Badge variant="outline" color="orange" size="sm" radius="xs">
                Rent
              </Badge>
              <div className="flex gap-4">
                <Button
                  leftSection={<IconHeart size={14} />}
                  variant="default"
                  size="compact-sm"
                >
                  LIKE
                </Button>
                <Button
                  leftSection={<IconShare size={14} />}
                  variant="default"
                  size="compact-sm"
                >
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" text-xl font-semibold ">{roomData.room?.title}</h1>
            <div className="flex justify-between">
              <h4 className=" text-sm font-light ">
                {roomData.room?.location}
              </h4>
              <b className="text-2xl font-bold">
                {roomData.room?.price}{" "}
                <span className="text-lg font-semibold">/Months</span>
              </b>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-1 w-[60%] flex-wrap">
              <Button
                leftSection={<IconDirections size={14} color="red" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                {roomData.room?.face}
              </Button>
              <Button
                leftSection={<IconSchool size={14} color="blue" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                School
              </Button>
              <Button
                leftSection={<IconHospitalCircle size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Hospital
              </Button>
              <Button
                leftSection={<IconYoga size={14} color="black" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                GYM
              </Button>
              <Button
                leftSection={<IconOm size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Temple
              </Button>
              <Button
                leftSection={<IconHotelService size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Restaurant
              </Button>
              <Button
                leftSection={<IconUniverse size={14} color="blue" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                College
              </Button>
              <Button
                leftSection={<IconAbc size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Montessori
              </Button>
              <Button
                leftSection={<IconBusStop size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Bus Stop
              </Button>
              <Button
                leftSection={<IconCashBanknote size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Bank
              </Button>
              <Button
                leftSection={<IconParkingCircle size={14} color="red" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Taxi Stand
              </Button>
              <Button
                leftSection={<IconGasStation size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Gas Station
              </Button>
              <Button
                leftSection={<IconShoppingCart size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Super Markets
              </Button>
            </div>

            <div className="flex justify-end items-center gap-1 w-[20%] ">
              <IconCalendar size={14} />
              <h4 className=" text-sm font-light ">
                Last updated: Feb 29, 2024
              </h4>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 mb-10 bg--500 w-full h-96 relative overflow-hidden">
          {[roomData.room?.imageFileUrl, ...(roomData.morePhotos || [])]
            .filter(Boolean)
            .slice(0, 5)
            .map((image, index, array) => {
              const isLastImage = index === array.length - 1;
              const remainingCount =
                [roomData.room?.imageFileUrl, ...(roomData.morePhotos || [])]
                  .length - 5;

              return (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  } w-full h-full relative bg-gray-500 overflow-hidden flex`}
                >
                  <LazyLoadImage
                    effect="blur"
                    src={image}
                    className="w-[1400px] h-full object-cover"
                  />
                  {isLastImage && remainingCount > 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                      +{remainingCount} more
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        {/* details-section and profile section */}
        <div className="w-full min-h-screen grid grid-cols-4 bg--600 gap-2  ">
          {/* details section */}
          <div className="col-span-3 bg--400 border p-6 shadow-lg ">
            <div className="flex gap-4 mb-10 sticky top-20 bg-white py-4">
              <Button variant="filled" color="black" fullWidth>
                Overview
              </Button>
              <Button variant="light" color="black" fullWidth>
                Description
              </Button>
              <Button variant="light" color="black" fullWidth>
                Amenities
              </Button>
              <Button variant="light" color="black" fullWidth>
                Media
              </Button>
              <Button variant="light" color="black" fullWidth>
                Review
              </Button>
            </div>
            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Overview
              </h1>

              <div className="grid grid-cols-5 gap-8 ">
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Room Id
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {roomData.room?.id}
                  </h4>
                </div>
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">Title</h4>
                  <h4 className=" text-xs font-medium  ">
                    {" "}
                    {roomData.room?.title}
                  </h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Purpose
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {" "}
                    {roomData.room?.purpose}
                  </h4>
                </div>
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    House face
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {roomData.room?.face}
                  </h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Price Negotiate
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {roomData.room?.negotiable === true ? "Yes" : "No"}
                  </h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Room Category
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {roomData.room?.category}
                  </h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Property Location
                  </h4>
                  <h4 className=" text-xs font-medium  ">
                    {roomData.room?.location}{" "}
                  </h4>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-2">
                Description
              </h1>
              <div>
                {" "}
                <section className="text-sm">
                  {roomData.room?.description}
                </section>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Amenities
              </h1>
              <div className="grid grid-cols-8 gap-4">
                <div className="flex flex-col border p-2 w-18 h-18 rounded-md justify-center items-center">
                  <IconDirections size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500  text-center">
                    North
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconSchool size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    School
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconHospitalCircle size={30} color="green" />
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Hospital
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18 rounded-md justify-center items-center">
                  <IconYoga size={30} color="grey" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    GYM
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconOm size={30} color="orange " />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Temple
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconHotelService size={30} color="green" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Restaurant
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconUniverse size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    College
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconAbc size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Montessori
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconBusStop size={30} color="orange" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    {" "}
                    Bus Stop
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconParkingCircle size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Taxi Stand
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconGasStation size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Gas Station
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconShoppingCart size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Super Markets
                  </h4>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Media
              </h1>
              <div>
                <LazyLoadImage
                  effect="blue"
                  src={roomData.room?.imageFileUrl}
                />
              </div>
            </div>
            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Media
              </h1>
            </div>
          </div>

          {/* profile section */}
          <div className="col-span-1 bg--600">
            <div className="w-full min-h-60 bg--400 relative overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2276901336813!2d85.32738647507965!3d27.679356776198627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191908e87d5b%3A0xef522a99ddd40827!2sYala%20Durbar%20Venue!5e0!3m2!1sen!2snp!4v1732877962584!5m2!1sen!2snp"
                className="w-full h-60 mb-4"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full min-h-44 b sticky top-24 border p-3 flex  flex-col gap-3 shadow-lg">
              <div className="flex  flex-row items-center  gap-4">
                <Indicator
                  inline
                  size={16}
                  offset={7}
                  position="bottom-end"
                  color="yellow"
                  withBorder
                >
                  <Avatar
                    size="lg"
                    radius="xl"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
                  />
                </Indicator>
                <Title size="1rem">{roomData.room?.user.fullName}</Title>
              </div>

              <div className="flex justify-center items-center gap-2">
                <Button variant="default" color="black" fullWidth>
                  Show Number
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
              <Button
                leftSection={<IconFlag size={14} />}
                variant="light"
                color="black"
                fullWidth
              >
                Report this list
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* static page */}
      <div className="px-36 mb-12 hidden">
        {/* title section */}
        <div className=" py-6 flex flex-col gap-1">
          <div>
            <Breadcumbs />
            <div className="flex justify-between">
              <Badge variant="outline" color="orange" size="sm" radius="xs">
                Rent
              </Badge>
              <div className="flex gap-4">
                <Button
                  leftSection={<IconHeart size={14} />}
                  variant="default"
                  size="compact-sm"
                >
                  LIKE
                </Button>
                <Button
                  leftSection={<IconShare size={14} />}
                  variant="default"
                  size="compact-sm"
                >
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" text-xl font-semibold ">
              Mero City Apartment : Apartment for Sale in Hattiban, Lalitpur
            </h1>
            <div className="flex justify-between">
              <h4 className=" text-sm font-light ">Hattiban, Lalitpur</h4>
              <b className="text-2xl font-bold">
                Rs. 5700 <span className="text-lg font-semibold">/Months</span>
              </b>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-1 w-[60%] flex-wrap">
              <Button
                leftSection={<IconDirections size={14} color="red" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                North
              </Button>
              <Button
                leftSection={<IconSchool size={14} color="blue" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                School
              </Button>
              <Button
                leftSection={<IconHospitalCircle size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Hospital
              </Button>
              <Button
                leftSection={<IconYoga size={14} color="black" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                GYM
              </Button>
              <Button
                leftSection={<IconOm size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Temple
              </Button>
              <Button
                leftSection={<IconHotelService size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Restaurant
              </Button>
              <Button
                leftSection={<IconUniverse size={14} color="blue" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                College
              </Button>
              <Button
                leftSection={<IconAbc size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Montessori
              </Button>
              <Button
                leftSection={<IconBusStop size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Bus Stop
              </Button>
              <Button
                leftSection={<IconCashBanknote size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Bank
              </Button>
              <Button
                leftSection={<IconParkingCircle size={14} color="red" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Taxi Stand
              </Button>
              <Button
                leftSection={<IconGasStation size={14} color="orange" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Gas Station
              </Button>
              <Button
                leftSection={<IconShoppingCart size={14} color="green" />}
                variant="light"
                color="grey"
                size="compact-xs"
              >
                Super Markets
              </Button>
            </div>

            <div className="flex justify-end items-center gap-1 w-[20%] ">
              <IconCalendar size={14} />
              <h4 className=" text-sm font-light ">
                Last updated: Feb 29, 2024
              </h4>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="  grid grid-cols-4 grid-rows-2 gap-2 mb-10">
          <div className="col-span-2 row-span-2">
            <LazyLoadImage
              effect="blur"
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <img alt="" />
          </div>

          <div className="col-span-1">
            <LazyLoadImage
              effect="blur"
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="col-span-1">
            <LazyLoadImage
              effect="blur"
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="col-span-1">
            <LazyLoadImage
              effect="blur"
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="col-span-1">
            <LazyLoadImage
              effect="blur"
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
        {/* details-section and profile section */}
        <div className="w-full min-h-screen grid grid-cols-4 bg--600 gap-2  ">
          {/* details section */}
          <div className="col-span-3 bg--400 border p-6 shadow-lg ">
            <div className="flex gap-4 mb-10 sticky top-20 bg-white py-4">
              <Button variant="filled" color="black" fullWidth>
                Overview
              </Button>
              <Button variant="light" color="black" fullWidth>
                Description
              </Button>
              <Button variant="light" color="black" fullWidth>
                Amenities
              </Button>
              <Button variant="light" color="black" fullWidth>
                Media
              </Button>
              <Button variant="light" color="black" fullWidth>
                Review
              </Button>
            </div>
            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Overview
              </h1>

              <div className="grid grid-cols-5 gap-8 ">
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Room Id
                  </h4>
                  <h4 className=" text-xs font-medium  ">00231</h4>
                </div>
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">Title</h4>
                  <h4 className=" text-xs font-medium  "> Mhepi room</h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Purpose
                  </h4>
                  <h4 className=" text-xs font-medium  "> Rent</h4>
                </div>
                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    House face
                  </h4>
                  <h4 className=" text-xs font-medium  ">East</h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Price Negotiate
                  </h4>
                  <h4 className=" text-xs font-medium  ">Yes</h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Room Category
                  </h4>
                  <h4 className=" text-xs font-medium  ">Single Room</h4>
                </div>

                <div>
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Property Location
                  </h4>
                  <h4 className=" text-xs font-medium  ">kathmandu </h4>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-2">
                Description
              </h1>
              <div>
                {" "}
                <section className="text-sm">
                  <p className="text-gray-700 mb-4">
                    Imagine yourself in the perfect villa – your private abode
                    in an elegant enclave, with all the finest of amenities and
                    trademarks of a house that make an effortless living, come
                    naturally.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Away from the hustle-bustle of the city, this exclusive
                    township is located in the vicinity of{" "}
                    <span className="font-semibold text-gray-800">
                      Bhaisepati
                    </span>{" "}
                    in an exquisite 50 ropani community blessed with a full
                    range of facilities and spectacular terrace views.
                    Karyabinayak Homes is a balance of classic architecture and
                    world-class comforts designed to offer the ideal villa in
                    Kathmandu.
                  </p>

                  <h2 className="text-sm font-bold text-gray-800 mt-6">
                    Phases
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>
                      <span className="font-semibold">Phase I:</span> Out of 61
                      complete units, only 6 units remain.
                    </li>
                    <li>
                      <span className="font-semibold">Phase II:</span> Plan for
                      51 units. Bookings open! 2 units are already booked.
                    </li>
                  </ul>

                  <h2 className="text-sm font-bold text-gray-800 mt-6">
                    Features
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Earthquake Resistant RCC Framed Structure</li>
                    <li>3BHK, 4BHK Villa Residences</li>
                    <li>Naturally ventilated and complete sunlit bungalows</li>
                    <li>Spectacular Landscape</li>
                    <li>CCTV Surveillance</li>
                    <li>Vaastu compliant</li>
                    <li>Approved by Nagarbikas</li>
                    <li>Health Spa and Gymnasium</li>
                    <li>Infinity Swimming Pool</li>
                    <li>Community Hall</li>
                    <li>Aroma Garden</li>
                    <li>Grocery Store/ATM Counter</li>
                    <li>Gazebo/Pergolas/Sit Outs</li>
                    <li>Temple</li>
                  </ul>

                  <h2 className="text-sm font-bold text-gray-800 mt-6">
                    Bungalow Type Homes
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>2.5 Storey</li>
                    <li>
                      4 Bedroom (2 Master Bedrooms with attached bathrooms)
                    </li>
                    <li>1 Living Room</li>
                    <li>1 Dining Room</li>
                    <li>1 Kitchen</li>
                    <li>4 Bathrooms</li>
                    <li>1 Puja Room</li>
                    <li>1 Parking</li>
                  </ul>

                  <h2 className="text-sm font-bold text-gray-800 mt-6">
                    Location Accessibility
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Bhainsepati, Sainbu, Lalitpur</li>
                    <li>Airport – 9.5 Km</li>
                    <li>Ring Road – 3.5 Km</li>
                    <li>Jawalakhel – 4 Km</li>
                    <li>Satdobato – 5 Km</li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Amenities
              </h1>
              <div className="grid grid-cols-8 gap-4">
                <div className="flex flex-col border p-2 w-18 h-18 rounded-md justify-center items-center">
                  <IconDirections size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500  text-center">
                    North
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconSchool size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    School
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconHospitalCircle size={30} color="green" />
                  <h4 className=" text-sm font-medium text-gray-500 ">
                    Hospital
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18 rounded-md justify-center items-center">
                  <IconYoga size={30} color="grey" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    GYM
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconOm size={30} color="orange " />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Temple
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconHotelService size={30} color="green" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Restaurant
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconUniverse size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    College
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconAbc size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Montessori
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconBusStop size={30} color="orange" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    {" "}
                    Bus Stop
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconParkingCircle size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Taxi Stand
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconGasStation size={30} color="blue" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Gas Station
                  </h4>
                </div>
                <div className="flex flex-col border p-2 w-18 h-18  rounded-md justify-center items-center">
                  <IconShoppingCart size={30} color="red" />
                  <h4 className=" text-sm font-medium text-gray-500 text-center">
                    Super Markets
                  </h4>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h1 className=" text-xl font-semibold border-b pb-2 mb-4">
                Media
              </h1>
              <div>
                <LazyLoadImage
                  effect="blue"
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
            </div>
          </div>

          {/* profile section */}
          <div className="col-span-1 bg--600">
            <div className="w-full min-h-60 bg--400 relative overflow-hidden ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2276901336813!2d85.32738647507965!3d27.679356776198627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191908e87d5b%3A0xef522a99ddd40827!2sYala%20Durbar%20Venue!5e0!3m2!1sen!2snp!4v1732877962584!5m2!1sen!2snp"
                className="w-full h-60 mb-4"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full min-h-44 b sticky top-24 border p-3 flex  flex-col gap-3 shadow-lg">
              <div className="flex  flex-row items-center  gap-4">
                <Indicator
                  inline
                  size={16}
                  offset={7}
                  position="bottom-end"
                  color="yellow"
                  withBorder
                >
                  <Avatar
                    size="lg"
                    radius="xl"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
                  />
                </Indicator>
                <Title size="1rem">Swornim Shrestha</Title>
              </div>

              <div className="flex justify-center items-center gap-2">
                <Button variant="default" color="black" fullWidth>
                  Show Number
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
              <Button
                leftSection={<IconFlag size={14} />}
                variant="light"
                color="black"
                fullWidth
              >
                Report this list
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
