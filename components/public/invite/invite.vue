<template>
  <div class="invite-box">
    <view class="center-box">
      <image class="logo" src="/static/invite-logo.png"></image>
      <image class="close" src="/static/close.png" v-on:click="$closeInvite"></image>
      <view class="title">邀请函</view>
      <view class="content">您好！您的朋友xxx邀请您对<text>“为什么小朋友到了一定年龄需要打疫苗？”</text>进行专家答疑，您是否接受？</view>
      <view class="btn-group">
        <view class="invite-specia">邀请专家</view>
      </view>
    </view>     
  </div>
</template>
 
<script>
 
export default {
  name: 'invite',
  props: {
    _specia: String
  },
 
  data() {
    return {}
  },
 
  mounted() {
    console.log('this.specia', this._specia);
  }
}
</script>
 
<style scoped lang='scss'>
.invite-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
 
  .center-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 622rpx;
    padding: 32rpx;
    border-radius: 16rpx;
    opacity: 1;
    background: rgba(255,255,255,1);
 
    .logo {
      position: absolute;
      top: -48rpx;
      left: 50%;
      transform: translateX(-50%);
      width: 136rpx;
      height: 144rpx;
    }
    .close {
      position: absolute;
      top: 24rpx;
      right: 24rpx;
      width: 48rpx;
      height: 48rpx;
    }
    
    .title {
      margin-top: 66rpx;
      text-align: center;
      color: rgba(0,0,0,1);
      font-size: 36rpx;
      font-weight: 500;
      font-family: "PingFang SC";
      letter-spacing: 0.6rpx;
    }
 
    .content {
      margin: 40rpx 0;
      font-size: 26rpx;
      font-family: "PingFang SC";
      letter-spacing: 0.6rpx;
      color: #343434;
      text {
        font-size: 32rpx;
        letter-spacing: 0.6rpx;
        color: rgba(69,108,255,1);
      }
    }
 
    .btn-group {
      display: flex;
      justify-content: center;
      padding: 0 16rpx;
      .invite-specia {
        width: 526rpx;
        height: 88rpx;
        line-height: 88rpx;
        border-radius: 16rpx;
        text-align: center;
        background: linear-gradient(-46.8deg, rgba(63,101,255,1) 0%, rgba(97,141,255,1) 100%);
        color: #fff;
      }
    }
  }
}
</style>