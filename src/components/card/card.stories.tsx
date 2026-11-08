import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";


const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Project settings",
    description: "Manage the details of this project.",
    children: "Changes apply to everyone in your workspace.",
    className: "max-w-sm",
  },
};
