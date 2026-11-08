import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";


const meta = {
  title: "Example/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Upload progress", value: 65, max: 100, className: "min-w-64" },
};
