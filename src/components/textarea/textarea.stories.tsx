import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";


const meta = {
  title: "Example/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Project notes", placeholder: "Add a note", rows: 4, className: "min-w-64" },
};
