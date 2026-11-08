import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";


const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Project name", placeholder: "Enter a name", description: "This name appears in your workspace.", className: "min-w-64" },
};
