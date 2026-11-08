import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import { Pagination } from "./pagination";
import type { PaginationProps } from "./pagination";


const meta = {
  title: "Example/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { page: 1, pageCount: 5, onPageChange: () => {} },
  render: function Render(args) {
    const [{ page }, updateArgs] = useArgs<PaginationProps>();

    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={(nextPage) => {
          args.onPageChange(nextPage);
          updateArgs({ page: nextPage });
        }}
      />
    );
  },
};
