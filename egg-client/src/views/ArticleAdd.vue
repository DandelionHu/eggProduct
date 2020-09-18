<template>
  <div>
    <van-nav-bar
      title="添加文章"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group class="mt10">
      <van-field v-model="title" label="文章标题" placeholder="请输入文章标题" />
      <van-field v-model="summary" label="文章简介" placeholder="请输入文章简介" />
      <van-field
        rows="2"
        autosize
        label="文章内容"
        type="textarea"
        maxlength="50"
        placeholder="请输入文章内容"
        show-word-limit
        v-model="content" />
    </van-cell-group>
    <div class="upload mb10">
      <label>上传图片</label>
      <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
    </div>
    <van-button type="info" @click="handleAdd" class="add-btn" round block>添加</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: ''
    }
  },
  methods: {
    afterRead (file) {
      console.log(file)
      this.img = file.content
    },
    // 返回
    onClickLeft () {
      this.$router.push({
        path: '/'
      })
    },
    // 添加
    handleAdd () {
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      }
      this.$toast('添加')
      console.log(data)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .add-btn{
    display block
    width 90%
    margin 0 auto
  }
  .mt10{
    margin-top 10px
  }
  .mb10{
    margin-bottom 10px
  }
  .upload{
    display flex
    background #fff
    padding 10px 16px
  }
  .upload label{
    -webkit-box-flex 0
    -webkit-flex none
    flex none
    box-sizing border-box
    width 6.2em
    margin-right 12px
    color #646566
    text-align left
    word-wrap break-word
    font-size 14px
  }
</style>
