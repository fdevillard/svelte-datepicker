import { DateInput } from "date-picker-svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "DateInputJs",
  component: DateInput,
  tags: ["autodocs"],
  argTypes: {
    value: "date",
    min: "date",
    max: "date",
    timePrecision: {
      control: { type: "select" },
      options: ["minute", "second", "millisecond"],
    },
  },
};

export const Default = { args: {} };

const deltaDate = (delta) => {
  let d = new Date();
  d.setDate(d.getDate() + delta);
  return d;
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MinMaxValue = {
  args: {
    min: deltaDate(-7),
    max: deltaDate(2),
  },
};
