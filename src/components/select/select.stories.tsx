import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";


const meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Visibility",
    defaultValue: "team",
    options: [
      { value: "private", label: "Private" },
      { value: "team", label: "Team" },
      { value: "public", label: "Public" },
    ],
    className: "min-w-64",
  },
};
