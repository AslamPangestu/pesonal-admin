<template>
  <div class="row">
    <div class="col-md-12">
      <base-table
        title="Experiences"
        :data="data"
        :current-page="currentPage"
        :loading="loading"
        :columns="columns"
        :actions="['create', 'edit', 'delete', 'view']"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExperiencePage',
  layout: 'main',
  data() {
    return {
      loading: false,
      currentPage: 1,
      data: [
        {
          id: 1,
          year: 'Niger',
          title: 'Dakota Rice',
        },
        {
          id: 2,
          year: 'Curaçao',
          title: 'Minerva Hooper',
        },
        {
          id: 3,
          year: 'Netherlands',
          title: 'Sage Rodriguez',
        },
        {
          id: 4,
          year: 'Korea, South',
          title: 'Philip Chaney',
        },
        {
          id: 5,
          year: 'Malawi',
          title: 'Doris Greene',
        },
      ],
    }
  },
  created() {
    this.columns = [
      {
        sortable: true,
        label: 'ID',
        property: 'id',
        minWidth: '75',
      },
      {
        sortable: true,
        label: 'Year',
        property: 'year',
      },
      {
        sortable: true,
        label: 'Title',
        property: 'title',
      },
    ]
  },
}
</script>
