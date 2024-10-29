import { Avatar, Text, Button, Paper, Group } from "@mantine/core";
import React from "react";
import { IconBookmark, IconMessage } from "@tabler/icons-react";

const SellerProfile = () => {
  return (
    <Paper
      shadow="xl"
      radius="md"
      withBorder
      p="xs"
      bg="var(--mantine-color-body)"
      style={{ height: 330 }}
    >
      <Text ta="center" fz="lg" fw={500} mt="md" mb="lg">
        Meet Your Owner
      </Text>
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        Jane Fingerlicker
      </Text>

      <div className="flex  gap-4">
        <Button
          color="green"
          radius="md"
          leftSection={<IconBookmark size={14} />}
          variant="light"
          fullWidth
          mt="md"
        >
          Save
        </Button>
        <Button
          color="yellow"
          radius="md"
          leftSection={<IconMessage size={14} />}
          variant="light"
          fullWidth
          mt="md"
        >
          Chat Now
        </Button>
      </div>
    </Paper>
  );
};

export default SellerProfile;
