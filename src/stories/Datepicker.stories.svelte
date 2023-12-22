<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { DateInput, DatePicker } from "date-picker-svelte";
</script>

<Meta title="Datepicker" component={DatePicker} />

<Template let:args>
  <DatePicker {...args} />
</Template>

<Story name="Vanilla" args={{}} />
