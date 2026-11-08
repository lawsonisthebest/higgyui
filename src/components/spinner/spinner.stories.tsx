import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";


const meta = {
  title: "Example/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Loading projects", size: 24 },
};
