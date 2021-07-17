<template>
  <div class="row">
    <div class="col-md-12">
      <base-table
        title="Portfolios"
        :data="tableData"
        :columns="columns"
        :actions="['create', 'edit', 'delete', 'view']"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioPage',
  layout: 'main',
  data() {
    return {
      tableData: [
        {
          id: 1,
          title: 'Dakota Rice',
          organizer: 'Niger',
        },
        {
          id: 2,
          title: 'Minerva Hooper',
          organizer: 'Curaçao',
        },
        {
          id: 3,
          title: 'Sage Rodriguez',
          organizer: 'Netherlands',
        },
        {
          id: 4,
          title: 'Philip Chaney',
          organizer: 'Korea, South',
        },
        {
          id: 5,
          title: 'Doris Greene',
          organizer: 'Malawi',
        },
      ],
    }
  },
  created() {
    this.columns = [
      {
        sortable: true,
        label: 'Title',
        property: 'title',
      },
      {
        sortable: true,
        label: 'Organizer',
        property: 'organizer',
      },
    ]
  },
}
</script>
