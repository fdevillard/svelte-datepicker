<script context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import { DateInput } from "date-picker-svelte";
  export const meta = {
    title: "DateInput",
    component: DateInput,
    tags: ["autodocs"],
    argTyps: {
      value: "date",
      min: "date",
      max: "date",
      timePrecision: {
        control: { type: "select" },
        options: ["minute", "second", "millisecond"],
      },
    },
  };
</script>

<script>
  const min = new Date();
  min.setDate(min.getDate() - 7);
  const max = new Date();
  max.setDate(max.getDate() + 2);

  const minMaxProps = {
    min: min,
    max: max,
  };
</script>

<Template let:args>
  <DateInput {...args} />
</Template>

<Story name="Vanilla" args={{}} />

<Story name="Min Max Value" args={minMaxProps} />
