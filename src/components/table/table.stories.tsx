import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";


const meta = {
  title: "Example/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Workspace projects",
    columns: [{ id: "name", title: "Project" }, { id: "status", title: "Status", align: "right" }],
    rows: [
      { id: "higgyui", cells: { name: "HiggyUI", status: "In progress" } },
      { id: "docs", cells: { name: "Documentation", status: "In review" } },
    ],
    className: "min-w-72",
  },
};
