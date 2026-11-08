import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";
import { icons, iconControl } from "../../lib/icons";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
    },
    logo: iconControl,
    items: {
      control: "object",
    },
    itemsPosition: {
      control: "select",
      options: ["left", "center", "right"],
    },
    titlePosition: {
      control: "select",
      options: ["left", "center", "right"],
    },
    sticky: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "HiggyUI",
    logo: icons.Layers,
    items: [
      {
        title: "Home",
        icon: icons.House,
        href: "#home",
        active: true,
      },
      {
        title: "Components",
        icon: icons.Box,
        href: "#components",
      },
      {
        title: "Documentation",
        icon: icons.BookOpen,
        href: "#docs",
      },
      {
        title: "GitHub",
        icon: icons.Github,
        href: "https://github.com",
      },
    ],
    itemsPosition: "right",
    titlePosition: "left",
    sticky: true,
  },
};

export const CenteredNavigation: Story = {
  args: {
    ...Primary.args,
    itemsPosition: "center",
  },
};

export const Minimal: Story = {
  args: {
    title: "HiggyUI",
    items: [
      { title: "Home", href: "#home" },
      { title: "About", href: "#about" },
      { title: "Contact", href: "#contact" },
    ],
    sticky: false,
  },
};
