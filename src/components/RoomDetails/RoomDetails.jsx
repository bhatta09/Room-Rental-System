import Breadcrumb from "../RoomDetails/Breadcrumb";
import PropertyTitle from "../RoomDetails/PropertyTitle";
import PropertyDetails from "../RoomDetails/PropertyDetails";
import SellerProfile from "../RoomDetails/SellerProfile";
import MapSection from "../RoomDetails/MapSection";

const RoomDetail = () => {
    return (
         
      <div className="container mx-auto p-4">
        <Breadcrumb />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <PropertyTitle />
            <PropertyDetails />
          </div>
          <div>
            <SellerProfile />
            <MapSection />
          </div>
        </div>
      </div>
    );
  };
  
  export default RoomDetail;
  