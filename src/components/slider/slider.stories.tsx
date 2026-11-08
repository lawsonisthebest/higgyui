import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";


const meta = {
  title: "Example/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Volume", min: 0, max: 100, defaultValue: 60, className: "min-w-64" },
};
