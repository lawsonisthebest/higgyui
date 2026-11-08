import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";


const meta = {
  title: "Example/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Workspace update", children: "Your settings were saved.", className: "max-w-md" },
};
