import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./empty-state";
import { Folder } from "lucide-react";

const meta = {
  title: "Example/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "No projects yet", description: "Projects you create will show up here.", icon: Folder },
};
