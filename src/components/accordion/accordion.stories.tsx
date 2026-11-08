import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";


const meta = {
  title: "Example/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: "members",
    className: "w-sm max-w-full",
    items: [
      { id: "members", title: "Who can see this project?", content: "Project members can see it." },
      { id: "access", title: "How do I request access?", content: "Ask a project owner for an invitation." },
    ],
  },
};
