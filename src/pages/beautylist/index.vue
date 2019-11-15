<template>
  <div>
    <Beautyhd></Beautyhd>
    <section>
    <Panda-scroll ref="scroll">
      <div>
        <div class="beauty-order">
          <ul>
            <li>人气</li>
            <li>最新</li>
            <li>销量</li>
            <li>价格</li>
          </ul>
        </div>
        <div class="beauty-products">
          <ul>
            <router-link
              tag="li"
              :to="{name:'detail',query:{index:index,id:item.id,goodsid:item.goodsid,cid:params,cateid:item.category_id}}"
              class="row-s"
              v-for="(item,index) in beautylist"
              :key="index"
            >
              <img
                ui-lazyload
                :src="item.pic"
                alt
                style="background: rgb(245, 245, 245); display: block;"
              />
              <div class="cent">
                <h3 class="product_title">
                  <span class="labelTop">天猫</span>
                  <span class="title_text">{{item.d_title}}</span>
                </h3>
                <div class="product_info">
                  <div class="price">
                    <span>券后&nbsp;</span>
                    <span class="RMB">¥</span>
                    <span class="price_num">{{Number(item.yuanjia-item.quan_jine).toFixed(0)}}</span>
                  </div>
                  <div class="label_box">
                    <span style="display:inline;">
                      <span class="juan">
                        <span>劵</span>
                        {{item.quan_jine}}元
                      </span>
                    </span>
                  </div>
                  <div class="salse">
                    <span>已售{{item.xiaoliang>10000?((item.xiaoliang)/10000).toFixed(1)+'万':item.xiaoliang}}</span>
                    <span>评论{{item.comment>10000?((item.comment)/10000).toFixed(1)+'万':item.comment}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </Panda-scroll>
    </section>
  </div>
</template>
<script>
import Beautyhd from "@components/beautyhd";
import { beautylistApi } from "@api/beauty";
export default {
  name: "Beautylist",
  components: {
    Beautyhd
  },
  data() {
    return {
      beautylist: [],
      params: ""
    };
  },
  methods: {
    showInfo: function() {
      this.params = this.$route.query.goodscid;
    },
    async handlegetbeautylist() {
      let data = await beautylistApi(this.$route.query.cid);
      // console.log(data.data.goodsList);
      this.beautylist = data.data.goodsList;
    }
  },
  async created() {
    this.handlegetbeautylist();
  },
  mounted() {
    this.showInfo();
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(() => {
      this.handlegetbeautylist();
    });
    this.$refs.scroll.handlepullingUp(() => {
      // console.log(211)
    });
  },
  watch: {
    beautylist() {
      this.$refs.scroll.handleRefreshDown();
    }
  }
};
</script>
<style scoped>
section {
  margin-top: 0.44rem;
}

.beauty-order {
  margin-bottom: 0.07rem;
  background: #fff;
  height: 0.4rem;
}

.beauty-order > ul > li {
  height: 0.4rem;
  line-height: 0.4rem;
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  font-size: 0.12rem;
  color: #333;
  background: #fff;
}

.row-s {
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 1.2rem;
}

.row-s > img {
  width: 1.12rem;
  height: 1.12rem;
  float: left;
}

.labelTop {
  min-width: 0.23rem;
  height: 0.13rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  top: 0.02rem;
  color: #fff;
  line-height: 0.13rem;
  font-size: 0.1rem;
  text-align: center;
  font-weight: 400;
}

.title_text {
  font-size: 0.14rem;
  font-weight: 400;
  color: #333;
}

.price {
  font-size: 0.1rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 0.07rem;
  display: flex;
  align-items: baseline;
}
.label_box {
  margin-bottom: 0.05rem;
}
.RMB {
  font-size: 0.12rem;
  font-weight: 500;
  color: #ff2b22;
  margin-left: 1px;
}

.price_num {
  font-size: 0.19rem;
  font-weight: 500;
  color: #ff2b22;
}

.juan {
  height: 0.12rem;
  background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
  border-radius: 0.02rem;
  font-size: 0.08rem;
  font-weight: 400;
  padding-right: 0.02rem;
  padding-left: 0.02rem;
  color: #fff;
  line-height: 0.13rem;
  display: inline-block;
  text-align: center;
}

.juan > span {
  background: #fff;
  border-radius: 1px 0 0 1px;
  font-size: 0.06rem;
  color: #fe3a33;
  margin: auto 0.03rem auto 1px;
  width: 0.08rem;
  height: 0.08rem;
  padding: 0 0.1px;
  text-align: center;
  line-height: 0.08rem;
}

.salse > span {
  font-size: 0.09rem;
  font-weight: 400;
  color: #888;
}

.salse span:nth-child(2)::before {
  content: "";
  width: 1px;
  background: #888;
  margin: 0 5px;
  display: inline-block;
  height: 8px;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 1px;
}
</style>