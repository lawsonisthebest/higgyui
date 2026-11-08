import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./kbd";


const meta = {
  title: "Example/Kbd",
  component: Kbd,
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Ctrl" },
};
