import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "./MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: {
      control: "select",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  size: "h1",
  label: "Custom Font Color",
  fontColor: "#5517ac",
};

export const CustomBackground = Template.bind({});

CustomBackground.args = {
  size: "h1",
  fontColor: "#eeeeee",
  backgroundColor: "#000000",
};
