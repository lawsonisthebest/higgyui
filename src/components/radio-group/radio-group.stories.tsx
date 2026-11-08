import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radio-group";


const meta = {
  title: "Example/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email frequency",
    defaultValue: "weekly",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "never", label: "Never" },
    ],
  },
};
