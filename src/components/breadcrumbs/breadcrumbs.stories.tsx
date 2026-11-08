import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./breadcrumbs";


const meta = {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: [{ title: "Workspace", href: "#" }, { title: "Projects", href: "#" }, { title: "Settings" }] },
};
