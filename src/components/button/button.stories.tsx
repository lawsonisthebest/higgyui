import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { icons, iconControl } from "../../lib/icons";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    hoverAnimation: {
      control: "boolean",
    },
    icon: iconControl,
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    iconSize: {
      control: "number",
      defaultValue: 19,
    },
    iconThickness: {
      control: "number",
      defaultValue: 1.5,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Save Changes",
    hoverAnimation: true,
    icon: icons.SaveIcon,
    iconPosition: "right",
    iconSize: 19,
    iconThickness: 1.5,
  },
};
