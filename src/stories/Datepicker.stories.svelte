<script context="module">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { DatePicker } from "date-picker-svelte";
  export const meta = {
    title: "DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
    argTyps: {},
  };
</script>

<Meta title="Datepicker" component={DatePicker} />

<Template let:args>
  <DatePicker {...args} />
</Template>

<Story name="Vanilla" args={{}} />
