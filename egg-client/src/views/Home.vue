<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" @click="handleDetail(item.id)">
        <div class="list">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <span class="title">{{item.title}}</span>
            <span class="createTime">{{item.createTime}}</span>
          </div>
        </div>
      </van-cell>
    </van-list>
    <van-button class="add-btn" type="primary" round block @click="onAdd">添加文章</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  components: {
  },
  methods: {
    onAdd () {
      this.$router.push({
        path: '/article-add',
        query: {
          id: ''
        }
      })
    },
    onLoad () {},
    handleDetail (id) {
      this.$router.push({
        path: '/article-detail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .add-btn{
    width 90%
    margin 10px auto
  }
  .list{
    display flex
    flex-direction row
    .left img{
      width 150px
      height 100px
      border-right 10px
    }
    .right{
      display flex
      flex-direction column
      justify-content space-between
      margin-left 15px
      .title{
        font-size 18px
      }
      .createTime{
        font-size 12px
        color #eee
      }
    }
  }
</style>
