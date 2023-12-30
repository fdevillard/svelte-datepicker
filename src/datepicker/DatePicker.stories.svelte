<script context="module">
  import DatePicker from "./DatePicker.svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  let date;

  export const meta = {
    title: "DatePicker",
    component: DatePicker,
    argTypes: {
      date: { control: "date" },
    },
  };
</script>

<Template let:args>
  <DatePicker {...args} />
</Template>

<Story name="Default" args={{}} />
