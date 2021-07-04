<template>
  <div class="row">
    <div class="col-md-12">
      <base-table
        title="Experiences"
        :data="tableData"
        :columns="columns"
        :actions="['create', 'edit', 'delete', 'view']"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout',
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux',
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park',
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten',
        },
      ],
    }
  },
  created() {
    this.columns = [
      {
        sortable: true,
        label: 'Name',
        property: 'name',
      },
      {
        sortable: true,
        label: 'Country',
        property: 'country',
      },
      {
        sortable: true,
        label: 'City',
        property: 'city',
      },
      {
        sortable: true,
        label: 'Salary',
        property: 'salary',
        align: 'right',
        headerAlign: 'right',
      },
    ]
  },
}
</script>
