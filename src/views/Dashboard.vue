<template>
  <a-layout-content class="view-margins">
      <!-- Stats Cards -->
    <a-row :gutter="16">
      <a-col :xs="{span: 24}" :lg="{span: 6}" :md="{span: 12}">
        <stats-card :cardInfo="userStats"></stats-card>
      </a-col>
      <a-col :xs="{span: 24}" :lg="{span: 6}" :md="{span: 12}">
        <stats-card :cardInfo="businessOwnersStats"></stats-card>
      </a-col>
      <a-col :xs="{span: 24}" :lg="{span: 6}" :md="{span: 12}">
        <stats-card :cardInfo="cardStats1"></stats-card>
      </a-col>
      <a-col :xs="{span: 24}" :lg="{span: 6}" :md="{span: 12}">
        <stats-card :cardInfo="cardStats2"></stats-card>
      </a-col>
    </a-row>
    <a-row>
        <a-col :xs="{span: 24}">
            <Table />
        </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import StatsCard from '@/components/StatsCard'
import Table from '@/components/Table'
export default {
  components: {
    StatsCard,
    Table
  },
  data () {
    return {
      userStats: {
        cardTitle: 'Users',
        cardValue: '2,000',
        cardIcon: 'team',
        lastUpdated: '3hrs'
      },
      businessOwnersStats: {
        cardTitle: 'Businesses',
        cardValue: '150',
        cardIcon: 'shop',
        lastUpdated: '3hrs'
      },
      cardStats1: {
        cardTitle: 'Carts',
        cardValue: '73',
        cardIcon: 'shopping-cart',
        lastUpdated: '1hrs'
      },
      cardStats2: {
        cardTitle: 'Orders',
        cardValue: '22',
        cardIcon: 'shopping',
        lastUpdated: '1hrs'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-view {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  box-shadow: 0 2px 5px rgba(0, 21, 41, 0.13);
}
.view-margins {
  margin: 30px 16px;
  padding: 24px;
}
</style>
