<template>
  <div class="row">
    <div class="col-md-12">
      <base-table
        title="Skills"
        :data="data"
        :current-page="currentPage"
        :loading="loading"
        :columns="columns"
        :actions="['create', 'edit', 'delete']"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SkillPage',
  layout: 'main',
  data() {
    return {
      loading: false,
      currentPage: 1,
      data: [
        {
          id: 1,
          name: 'Dakota Rice',
          level: '$36.738',
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          level: '$23,789',
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          level: '$56,142',
        },
        {
          id: 4,
          name: 'Philip Chaney',
          level: '$38,735',
        },
        {
          id: 5,
          name: 'Doris Greene',
          level: '$63,542',
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
        label: 'Name',
        property: 'name',
      },
      {
        sortable: true,
        label: 'Level',
        property: 'level',
      },
    ]
  },
}
</script>
