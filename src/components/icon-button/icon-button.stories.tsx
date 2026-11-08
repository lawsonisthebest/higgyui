import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { Settings } from "lucide-react";
import { iconControl } from "../../lib/icons";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    icon: { ...iconControl, options: iconControl.options.filter((name) => name !== "None") },
    variant: { control: "select", options: ["outline", "ghost"] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Open settings", icon: Settings },
};
