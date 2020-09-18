<template>
  <div class="detail">
    <div class="title">{{info.title}}</div>
    <div class="summary">{{info.summary}}</div>
    <div class="content">{{info.content}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {}
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail{
    padding 20px
    text-align left
    .title{
      font-size 25px
      padding-bottom 20px
    }
    .summary{
      padding 20px
      background #dcdcdc
    }
    .content{
      padding 20px
      text-indent 2em
      line-height 200%
    }
    .createTime{
      color #9c9c9c
      text-align right
    }
  }
</style>
