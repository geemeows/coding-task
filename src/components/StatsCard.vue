<template functional>
  <div class="card">
    <a-row :gutter="32">
        <a-col :span="8">
            <div class="card-icon">
                <a-icon :type="props.cardInfo.cardIcon" class="icon"/>
            </div>
        </a-col>
        <a-col :span="16">
            <div class="card-title">
                <span>{{props.cardInfo.cardTitle}}</span>
            </div>
            <h2 class="card-stat">{{props.cardInfo.cardValue}}</h2>
        </a-col>
        <a-col :span="24">
            <div class="card-footer">
                <a-icon type="clock-circle" />&nbsp;Last Update:
                <span>{{props.cardInfo.lastUpdated}}</span>
            </div>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: ['cardInfo']
}
</script>

<style scoped lang="scss">
@import "../assets/scss";
.card {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  background: #fff;
  color: #333;
  padding: 15px 20px 5px;
  position: relative;
  text-align: right;
  margin-bottom: 35px;
  .card-title {
      font-size: 0.9em;
      font-weight: 500;
      color: #999;
  }
  .card-stat {
      color: #3c4858;
      font-size: 2em;
  }
  .card-icon {
    background: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 1),
      rgba($color-primary-dark, 1)
    );
    width: 80px;
    height: 80px;
    margin-top: -35px;
    margin-bottom: 15px;
    border-radius: 6px;
    position: relative;
    .icon {
        font-size: 3em;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  }
  .card-footer {
      border-top: 1px rgba(153,153,153, 0.23) solid;
      padding: 5px;
      text-align: left;
      font-size: 12px;
      color: #999
  }
}
</style>
