import { Badge, Button } from "@mantine/core";
import Breadcumbs from "../components/Breadcumbs";
import {
  IconCalendar,
  IconDirection,
  IconHeart,
  IconNavigation,
  IconNavigationBolt,
  IconShare,
} from "@tabler/icons-react";

const RoomDetail = () => {
  return (
    <div>
      {/* title section */}
      <div className="px-36 py-6 flex flex-col gap-1">
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
        <div></div>
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

        <div className="flex justify-between">
          <Button
            leftSection={<Icon size={14} />}
            variant="default"
            size="compact-xs"
          >
            LIKE
          </Button>
          <div className="flex justify-end items-center gap-1">
            <IconCalendar size={14} />
            <h4 className=" text-sm font-light ">Last updated: Feb 29, 2024</h4>
          </div>
        </div>
      </div>
      {/* image section */}
      <div className="px-36  grid grid-cols-4 grid-rows-2 gap-2">
        <div className="col-span-2 row-span-2">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="col-span-1">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
