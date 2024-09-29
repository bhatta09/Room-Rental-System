import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid2,
  Paper,
  Box,
  Button,
} from "@mui/material";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
const Dashboard = () => {
  return (
    <div>
      <Grid2 item xs={12}>
        <div className="p-10">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Naya Aawas
          </Typography>
          <Typography variant="h5" color="orange" gutterBottom>
            Find Your Perfect Room
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere quaerat voluptatibus, hic suscipit accusantium unde,
            architecto et explicabo consequuntur necessitatibus quidem?
          </Typography>
          <div className=" w-full h-full my-9 flex flex-row gap-10">
            <Card
              sx={{
                width: 200,

                maxHeight: 85,
                borderRadius: 4,
                boxShadow: 2,
                backgroundColor: "#FEFDED",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <IconButton
                  sx={{
                    borderRadius: "2px",

                    backgroundColor: "rgba(255, 236, 179, 0.5)",
                    mr: 2,
                    "&:hover": { backgroundColor: "rgba(255, 236, 179, 0.7)" },
                  }}
                >
                  <InventoryOutlinedIcon
                    sx={{ color: "#FFA000", fontSize: 40 }}
                  />
                </IconButton>
                <div>
                  <Typography variant="h5" component="div" fontWeight="bold">
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Listed
                  </Typography>
                </div>
              </CardContent>
            </Card>{" "}
            <Card
              sx={{
                width: 200,

                maxHeight: 85,
                borderRadius: 4,
                boxShadow: 2,
                backgroundColor: "#FFE4CF",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <IconButton
                  sx={{
                    borderRadius: "2px",
                    color: "#FF0000",
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    mr: 2,
                    "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.2)" },
                  }}
                >
                  <PendingActionsOutlinedIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <div>
                  <Typography variant="h5" component="div" fontWeight="bold">
                    1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Pending
                  </Typography>
                </div>
              </CardContent>
            </Card>{" "}
          </div>{" "}
          <div className="bg-yellow-100 inline-flex items-center px-3 py-1.5 rounded-full mb-4">
            <span role="img" aria-label="thumbs up">
              👍
            </span>
            <span className="ml-2 text-sm font-semibold">
              100% Trusted room rental platform in the World
            </span>
          </div>
        </div>
      </Grid2>
    </div>
  );
};

export default Dashboard;
