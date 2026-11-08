import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";


const meta = {
  title: "Example/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Project information", triggerLabel: "View details", description: "A quick look at this workspace project.", children: "This project is visible to your team." },
};
