<template>
  <div>
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{score}}</span>
        <span class="fenshu">分！</span>
      </header>
      <div class="result_tip">
        {{scoreTips}}
        <router-link class="hand" to="home">重新答题</router-link>
      </div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_header">关注葡萄之家，获取答案。</header>
      <img src="../../images/4-4.png" height="212" width="212" class="code_img" />
    </div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../../images/5-2.png" class="share_img" />
    </div>
  </div>
</template>

<script>
import onejpg from "@/images/4-1.jpg";
import { mapState } from "vuex";
export default {
  name: "score",
  data() {
    return {
      showHide: false, //是否显示提示
      score: 0, //分数
      scoreTips: "", //分数提示
      rightAnswer: [2, 7, 12, 13, 18], //正确答案
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    };
  },
  computed: mapState(["answerid", "allTime"]),
  created() {
    this.computedScore();
    this.getScoreTip();
    document.body.style.backgroundImage = `url(${onejpg})`;
    console.log(this.allTime + "s");
  },
  methods: {
    //计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    //是否显示分享提示
    showCover: function() {
      this.showHide = !this.showHide;
    },
    //根据分数显示提示
    getScoreTip: function() {
      let index = Math.ceil(this.score / 20) - 1;
      console.log(index);
      if (index == -1) {
        this.scoreTips = "这该如何是好...";
      } else {
        this.scoreTips = this.scoreTipsArr[index];
      }
    }
  }
};
</script>

<style lang="less">
body {
  background-image: url(../../images/4-1.jpg);
  padding-top: 1.2rem;
}
.your_scores_container {
  width: 26rem;
  height: 26rem;
  background: url(../../images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 10rem;
    top: 11.7rem;
    font-size: 3.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 17rem;
    width: 23rem;
    left: 2.6rem;
    color: #3e2415;
    font-size: 1.65rem;
    text-align: center;
  }
}
.share_button {
  width: 13.025rem;
  height: 5.4rem;
  margin: 0.8rem auto 0;
  background: url(../../images/4-3.png) no-repeat 0.4rem 0;
  background-size: 12.825rem 100%;
}
.share_code {
  width: 13rem;
  margin: 2rem auto 0;
  .share_header {
    color: #664718;
    font-size: 1.475rem;
    font-family: "Microsoft YaHei";
    width: 13rem;
    font-weight: 500;
  }
  .code_img {
    height: 13rem;
    width: 13rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
.hand {
  cursor: pointer;
  color: #a51d31;
}
</style>
