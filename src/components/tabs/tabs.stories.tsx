import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";


const meta = {
  title: "Example/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Project settings",
    items: [
      { id: "general", title: "General", content: "Manage your project details." },
      { id: "members", title: "Members", content: "See who has access to this project." },
      { id: "activity", title: "Activity", content: "Review recent changes." },
    ],
  },
};
