<template>
  <div>
    <h1>Data from Google Sheet</h1>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AttendanceView',
  data() {
    return {
      headers: [], // To store the headers of the CSV
      data: [] // To store the data from the CSV
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Define the URL of the CSV export of the public spreadsheet
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRo7x5aPUsUujyu1MkweBuhWX1rDxnK8tXkyRtdA86m-yq80fMBbNxdEXtGGNtXgpmBjhHFWTNmORnj/pub?gid=0&single=true&output=csv';
        
        // Fetch the data from the URL
        const response = await fetch(url);
        
        // Check if the response is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the CSV data
        const text = await response.text();
        const rows = text.split('\n');
        
        // Separate headers and data
        if (rows.length > 0) {
          this.headers = rows[0].split(','); // Store the headers
          rows.shift(); // Remove the headers row from the data
        }

        // Parse the remaining rows and store them
        this.data = rows.map(row => row.split(','));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
