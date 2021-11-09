<template>
  <v-app app>
    <v-system-bar
      v-if="training"
      dark
      color="red"
      class="d-flex justify-center align-center"
    >
      <div>Training round!</div>
    </v-system-bar>
    <transition
      enter-active-class="animate__animated animate__bounce animate__slow"
      leave-active-class="animate__animated animate__fadeOutTopRight animate__slow"
    >
      <v-overlay
        :value="isAwardGiven"
        v-if="isAwardGiven && gamified"
        :dark="false"
        :opacity="0"
        z-index="10000"
      >
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            contain
            max-height="300"
            max-width="300"
            :src="awardJustGiven.img"
          ></v-img>

          <v-card elevation="3">
            <v-card-title class="d-flex align-center justify-center text-center"
              ><div>{{ awardJustGiven.name }}</div></v-card-title
            >
            <v-card-text>
              {{ awardJustGiven.desc }}
            </v-card-text>
          </v-card>
        </div>
      </v-overlay>
    </transition>
    <v-overlay :value="showHappyFace" v-if="gamified">
      <div class="d-flex flex-column align-center justify-center">
        <img
          src="https://i.gifer.com/Llx5.gif"
          alt=""
          height="300px"
          width="600px"
        />
        <h1>We are so happy to see back!</h1>
      </div>
    </v-overlay>
    <div class="funnyam d-flex flex-column" v-if="gamified">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__bounceIn"
        appear
      >
        <speech-bubble :text="currentMessage" v-if="currentMessage">
        </speech-bubble>
      </transition>
      <img
        src="https://www.picgifs.com/graphics/s/scrooge-mcduck/graphics-scrooge-mcduck-940725.gif"
        alt=""
        height="150px"
        width="150px"
        style="align-self: flex-end"
      />
    </div>
    <transition name="fade">
      <particles-bg
        v-if="snackbar"
        :config="pconfig"
        :type="particle_type"
        :bg="false"
        :canvas="{ position: 'absolute', zIndex: 1000, top: 0, left: 0 }"
      />
    </transition>
    <input type="hidden" :value="currentPrice" name="exit_price" />
    <v-app-bar app clipped-left height="100" :style="getMenuStyle">
      <instructions-dialog></instructions-dialog>
      <v-sheet outlined class="d-flex align-center ml-1 pa-2 rounded-xl">
        <div class="d-flex align-center font-weight-bold">
          Current price:
          <div
            class="ml-1 pa-2 text-no-wrap"
            :class="
              gamified
                ? `blue  white--text rounded-pill`
                : `border rounded-xl black--text`
            "
          >
            ${{ formattedTween || currentPrice }}
          </div>
        </div>
      </v-sheet>

      <v-spacer></v-spacer>

      <v-sheet outlined class="d-flex align-center ml-1 pa-2 rounded-xl">
        <div class="d-flex align-center font-weight-bold">
          Crash probability (for each price update):
          <div
            class="ml-1 pa-2 text-no-wrap rounded-pill"
            :class="
              gamified
                ? `red  white--text rounded-pill`
                : `border rounded-xl black--text`
            "
          >
            {{ (100 * probToZero).toFixed(0) }}%
          </div>
        </div>
      </v-sheet>

      <v-spacer></v-spacer>
      <div class="d-flex" v-if="gamified">
        <div class="m-1" v-for="award in awards" :key="award.id">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-badge
                  bordered
                  overlap
                  :color="locked(award.id) ? 'secondary' : 'success'"
                  bottom
                  left
                >
                  <template v-slot:badge>
                    <v-icon v-if="locked(award.id)">mdi-lock</v-icon>
                    <v-icon v-else>mdi-check-outline</v-icon>
                  </template>

                  <v-avatar size="60">
                    <v-img
                      :src="award.img"
                      :class="classAward(award.id)"
                    ></v-img>
                  </v-avatar>
                </v-badge>
              </div>
            </template>
            <span>{{ award.brief }}</span>
          </v-tooltip>
        </div>
      </div>
      <v-btn class="mx-3" large @click="showSellingDialog">Sell</v-btn>
    </v-app-bar>
    <end-dialog
      :dialog="showEndDialog"
      :currentPrice="currentPrice"
      @finishGame="finishGame"
    ></end-dialog>

    <confirm-dialog
      :dialog="dialog"
      :currentPrice="currentPrice"
      @sell="sell"
      @continueKeeping="continueKeeping"
    ></confirm-dialog>
    <v-navigation-drawer
      clipped
      app
      width="300"
      color="blue"
      permanent
      v-if="gamified"
    >
      <v-card
        class="d-flex flex-column buysellcard"
        fill-height
        style="height: 100%"
      >
        <v-card-text class="overflow-y-auto" style="margin-bottom: 50px">
          <v-list>
            <v-list-item-group active-class="border" color="indigo" class="">
              <transition-group
                enter-active-class="animate__animated animate__fadeInRight animate__slow"
                leave-active-class="animate__animated animate__fadeOutTopRight animate__slow"
              >
                <v-list-item
                  class="m-3"
                  v-for="(item, i) in messages"
                  :key="item"
                  :id="`li_${i}`"
                  :ref="`li_${i}`"
                  dense
                >
                  <v-list-item-content
                    class="message mb-3 pr-3"
                    v-breathing-colors="sample"
                  >
                    <v-list-item-title
                      class="titlestyle"
                      style="white-space: pre-wrap"
                      v-html="item"
                    >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </transition-group>
            </v-list-item-group>
          </v-list>
          <div id="listend" ref="listend">&nbsp</div>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-main app v-show="true">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <highcharts
              :constructorType="'stockChart'"
              class="hc"
              :options="chartOptions"
              ref="priceGraph"
              :updateArgs="[true, true, true]"
            ></highcharts>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar">
      {{ snackbartext }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
/* eslint-disable */
import icon from "./assets/icon.js";

import { ParticlesBg } from "particles-bg-vue";
import SpeechBubble from "./components/SpeechBubble.vue";
import EndDialog from "./components/EndDialog";
import ConfirmDialog from "./components/ConfirmDialog";
import { Chart } from "highcharts-vue";
import { differenceInSeconds, addSeconds, getTime } from "date-fns";
import InstructionsDialog from "./components/InstructionsDialog";
import gsap from "gsap";
import _ from "lodash";
import add from "date-fns/fp/add/index.js";

const maxPrices = window.max_length;
const startingPrice = window.starting_price;
const tickFrequency = window.tick_frequency;

const formatDown = {
  color: "red",
  icon: "mdi-arrow-down-bold",
};
const formatUp = {
  color: "green darken-3",
  icon: "mdi-arrow-up-bold",
};
const numToStr = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};
export default {
  name: "App",
  components: {
    highcharts: Chart,
    ConfirmDialog,
    EndDialog,
    InstructionsDialog,
    ParticlesBg,
    SpeechBubble,
  },
  data: function () {
    const minx = Date.UTC(2009, 0, 1);
    const maxx = getTime(addSeconds(new Date(), tickFrequency * maxPrices));

    return {
      gamified: window.gamified,
      training: window.training,
      currentMessage: null,
      awardJustGiven: null,
      isAwardGiven: false,
      timeInTrade: 0,
      minx,
      maxx,
      showHappyFace: false,
      showLastMsg: false,
      particle_type: "fountain",
      heartConfig: {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-30, 30],
        body: icon,
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 1,
      },
      snackbar: false,
      snackbartext: null,
      happyHappens: false,
      prices: [],
      sample: {
        colors: ["red", "green", "blue"],
        interval: 3000,
        transition: {
          duration: 1000,
        },
      },
      showEndDialog: false,
      messages: [],
      zeroCounter: 0, //bad, all this is bad. TODO
      grownCounter: 0,
      TwoTwosCounter: 0,
      sensitivity: 5,
      sensitivity2: 3,
      probToZero: window.crash_probability,
      startingPrice,
      currentPrice: startingPrice,
      submittable: false,
      onPause: false,
      counter: 0,
      startTime: new Date(),
      endTime: null,
      timeSpent: null,
      reset: false,
      messageMoveDelay: 5000,
      dialog: false,
      tweenedPrice: null,
      stockInterval: null,
      tickFrequency,
      awardsGiven: [],
      awards: {
        4: {
          id: 0,
          img: "https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/stock_trader_trade_exchange-256.png",
          name: "Level I",
          brief: "Level I Badge: Trading intern",
          desc: [
            "Level up! Doing well 👍",
            "Way to go -- stay strong! 💎🤲",
            "You are definitely going places! 🙌",
          ],
        },
        9: {
          id: 1,
          img: "https://cdn2.iconfinder.com/data/icons/financial-strategy-20/496/trader-bitcoin-cryptocurrency-investment-businessman-1024.png",
          name: "Level II",
          brief: "Level II Badge: Trading manager",
          desc: [
            "Level up again! You belong on the trading floor 🤑",
            "Nerves of steel: stocks are going strong! 📈",
            "Bulls 🐂 are in the arena. Good job!",
            "Have you ever thought of opening your own trading firm?",
          ],
        },
        19: {
          id: 2,
          img: "https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/217-512.png",
          name: "Level III",
          brief: "Level III Badge: Money Boss",
          desc: [
            "You are the money-maker! 💰",
            "Diamond hands 💎🤲 Impressive run!",
            "To the moon! 🚀 🚀 🚀",
          ],
        },
      },
      chartOptions: {
        time: { useUTC: false },
        yAxis: { startOnTick: false, endOnTick: false },
        xAxis: {
          startOnTick: false,
          endOnTick: false,
          showLastLabel: true,
          min: getTime(new Date()),
          max: getTime(addSeconds(new Date(), tickFrequency * maxPrices)),
        },
        navigator: { enabled: false },
        rangeSelector: {
          enabled: false,
          inputEnabled: false,
          selected: 0,
        },
        series: [
          { name: "Stock price", data: [[getTime(new Date()), startingPrice]] },
        ],
      },
    };
  },
  computed: {
    getMenuStyle() {
      return this.training ? { top: "25px" } : null;
    },
    awardTimes() {
      return _.keys(this.awards);
    },
    lastMsg() {
      return _.last(this.messages);
    },
    pconfig() {
      if (this.particle_type == "fountain") return {};
      return this.heartConfig;
    },
    formattedTween() {
      if (this.tweenedPrice) return this.tweenedPrice.toFixed(2);
      return this.currentPrice.toFixed(2);
    },
  },
  watch: {
    counter(t) {
      const that = this;
      _.forEach(this.awardTimes, function (i) {
        if (t > i && !that.awardsGiven.includes(that.awards[i].id)) {
          that.isAwardGiven = true;
          const awardToGive = that.awards[i];
          awardToGive.desc = _.sample(that.awards[i].desc);
          that.awardJustGiven = that.awards[i];
          that.awardsGiven.push(that.awards[i].id);
          setTimeout(() => {
            that.isAwardGiven = false;
            that.awardJustGiven = null;
          }, 3000);
        }
      });
    },
    dialog(v) {
      this.onPause = v;
    },
    messages(v) {
      this.showLastMsg = true;
      setTimeout(() => {
        this.showLastMsg = false;
      }, 3000);
    },
    prices(v) {
      if (v.length == 3) {
        const gif = "https://i.gifer.com/7VzX.gif";
        this.postGif(gif);
      }

      if (v.length == 5) {
        this.say(
          `Diamond hands 💎🤲: \nHolding strong for ${
            v.length * this.tickFrequency
          } seconds already!`
        );
      }

      if (v.length == 8) {
        const gif =
          "https://c.tenor.com/puvU5YS9r4cAAAAC/uncle-scrooge-mcduck-money.gif";
        this.postGif(gif);
      }

      if (v.length == 10) {
        this.say(
          `To the moon 🚀: \nStock is going up for ${
            v.length * this.tickFrequency
          } seconds.`
        );
      }

      if (v.length == 13) {
        const gif =
          "https://c.tenor.com/QfVo3Mh29hUAAAAC/we-bare-bears-money.gif";
        this.postGif(gif);
      }

      if (v.length == 15) {
        this.say(
          `Gimme the tendies! 🍗: \nCash piling up for ${
            v.length * this.tickFrequency
          } seconds now.`
        );
      }

      if (v.length == 18) {
        const gif =
          "https://c.tenor.com/0-e7d7ct3G0AAAAC/shut-up-and-take-my-money-futurama.gif";
        this.postGif(gif);
      }

      if (v.length == 20) {
        this.say(
          `Almost there 🚀🚀🚀🚀: \nImpressive run for ${
            v.length * this.tickFrequency
          } seconds.`
        );
      }

      if (v.length == 22) {
        const gif =
          "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ftenor.com%2Fview%2Fbacking-you-get-yours-danny-devito-danny-devito-gif-13052176";
        this.postGif(gif);
      }

      if (v.length >= maxPrices) {
        this.submittable = true;
      }
    },

    async submittable(val) {
      if (val) {
        await this.sendMessage({ name: "Trade_ends" });
        this.showEndDialog = true;
        this.onPause = true;
        // document.getElementById("form").submit();
      }
    },
    currentPrice: function (newValue) {
      if (this.$refs.listend) {
        this.$refs.listend.scrollIntoView({ behavior: "smooth" });
      }
      gsap.to(this.$data, {
        duration: 0.5,
        tweenedPrice: newValue,
        onUpdate: this.tweenUpd,
      });
    },
  },
  async created() {
    this.$options.sockets.onopen = async () =>
      await this.sendMessage({ name: "Trade_starts" });
    this.$options.sockets.onmessage = (data) => console.log(data);
  },

  async mounted() {
    this.say("Hello! Ready to invest with me? 📈 ");

    this.$nextTick(() => {
      if (this.$refs.listend) {
        this.$refs.listend.scrollIntoView({ behavior: "smooth" });
      }
      this.$refs.priceGraph.chart.setSize(null, window.innerHeight - 100);
    });

    this.stockInterval = setInterval(async () => {
      if (!this.onPause) {
        this.timeInTrade += this.tickFrequency;
        const addendum = _.random(0, 2);
        this.currentPrice += addendum;
        this.counter++;
        const r = _.random(0, 1, true);
        if (r < this.probToZero) {
          this.submittable = true;
          this.currentPrice = 0;
        }
        this.addMessage(this.currentPrice, addendum);
        this.prices.push(this.currentPrice);

        this.chartOptions.series[0].data.push([
          getTime(new Date()),
          this.currentPrice,
        ]);
      }
    }, this.tickFrequency * 1000);
  },
  methods: {
    showInstructions() {},
    postGif(url) {
      const img = `<img src="${url}" width="180px"/>`;
      this.messages.push(img);
    },
    say(msg) {
      this.currentMessage = msg;
      setTimeout(() => {
        this.currentMessage = null;
        this.messages.push(msg);
      }, this.messageMoveDelay);
    },
    locked(award_id) {
      const awardGiven = this.awardsGiven.includes(award_id);
      return !awardGiven;
    },
    classAward(award_id) {
      return this.locked(award_id) ? "gray" : "";
    },
    async finishGame() {
      await this.sendMessage({ name: "round_ends" });
      document.getElementById("form").submit();
    },

    addMessage(price, addendum) {
      // bad structure. let's think about it later
      if (price === 0) {
        const msg = `Market crashed! 😢`;
        this.say(msg);
      }
      if (addendum === 0 && !this.onPause) {
        this.zeroCounter++;
        this.TwoTwosCounter = 0;
        this.grownCounter = 0;
      }
      if (addendum > 0 && !this.onPause) {
        this.zeroCounter = 0;
        this.grownCounter++;
        if (addendum == 2) {
          this.TwoTwosCounter++;
        }
      }
    },
    async sendMessage(obj) {
      if (this.$socket.readyState == 1) {
        const inj = {
          currentPrice: this.currentPrice,
          priceIndex: this.counter,
          secs_since_round_starts: differenceInSeconds(
            new Date(),
            this.startTime
          ),
        };

        await this.$socket.sendObj({ ...obj, ...inj });
      }
    },
    tweenUpd(v) {
      this.tweenedPrice = _.round(this.tweenedPrice, 2);
    },

    async sell() {
      await this.sendMessage({ name: "Sell" });
      this.dialog = false;
      this.submittable = true;
      this.onPause = true;
    },
    async showSellingDialog() {
      await this.sendMessage({ name: "sellingDialogShown" });
      this.dialog = true;
    },

    async continueKeeping() {
      await this.sendMessage({ name: "continueKeeping" });
      this.dialog = false;
      this.submittable = false;

      this.showHappyFace = true;
      setTimeout(() => {
        this.showHappyFace = false;
        this.onPause = False;
      }, 3000);
    },
  },
};
</script>

<style>
#app {
  background: rgba(0, 0, 0, 0);
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.word-break {
  word-break: break-word;
}
.titlestyle {
  padding-left: 10px;
  margin-left: 20px;
  white-space: pre-wrap;
}
.message {
  padding-left: 10px;
  margin-left: 20px;
  white-space: normal;

  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  position: relative;
  max-width: 400px;
  padding: 6px 15px;

  font-size: 12px;
  word-break: break-word;
  color: #fff;
  border: none;
  background-color: rgb(0, 153, 255);
  border-radius: 20px;
}
.listouter1 {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.listouter2 {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  /* flex-direction: column-reverse; */
  overflow-y: scroll;
}
.canvas {
  z-index: 1000;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.funnyam {
  position: fixed;
  z-index: 1000;
  bottom: 10px;
  right: 10px;
}
.gray {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
</style>
