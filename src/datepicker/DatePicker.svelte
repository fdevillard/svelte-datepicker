<script>
  let currentDate = new Date();

  function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  function previousYear() {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
  }

  function nextYear() {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  }
</script>

<div class="card">
  <button on:click={previousYear}>Previous Year</button>
  <button on:click={previousMonth}>Previous Month</button>
  <h1>
    {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
  </h1>
  <button on:click={nextMonth}>Next Month</button>
  <button on:click={nextYear}>Next Year</button>

  <table>
    <thead>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
    </thead>
    <tbody>
      <!-- Calendar rows will be generated here -->
    </tbody>
  </table>
</div>

<style>
  .card {
    /* From https://www.w3schools.com/csS/css3_shadows_box.asp */
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
