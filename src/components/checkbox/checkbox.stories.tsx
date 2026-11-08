import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";


const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Email notifications", description: "Receive an email when someone mentions you.", defaultChecked: true },
};
