import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";


const meta = {
  title: "Example/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Weekly summary", description: "Get a recap of your workspace activity.", defaultChecked: true },
};
