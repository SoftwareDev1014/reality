<template>
  <v-card style="width: 100%">
    <div class="propertysearch">
      <v-container>
        <div>
          <a style="font-size: 25px;font-weight: bold;color: whitesmoke">Real Estate Search</a>
        </div>
        <div style="height: 100%;background-color: rgba(0, 0, 0, 0.6); ">
          <div class="px-6 pt-6">
            <div style="display: flex">
              <div style="flex: 1; padding: 0 10px 0 0">
                <div><a style="font-size: 13px;color: white">Enter your search below</a></div>
                <input placeholder="MLS #, City or Zip"
                       style="background-color: white; width: 100%; height: 28px">
                </input>
              </div>
              <div>
                <div><a style="font-size: 13px;color: white">Min Price</a></div>
                <select name="qminprice" style="color:#000; width:100px;height:28px;background-color: white">
                  <option value="0">No Min</option>
                  <option value="500">$ 500</option>
                  <option value="750">$ 750</option>
                  <option value="1000">$ 1,000</option>
                  <option value="1250">$ 1,250</option>
                  <option value="1500">$ 1,500</option>
                  <option value="2000">$ 2,000</option>
                  <option value="3000">$ 3,000</option>
                  <option value="5000">$ 5,000</option>
                  <option value="10000">$ 10,000</option>
                  <option value="50000">$ 50,000</option>
                  <option value="75000">$ 75,000</option>
                  <option value="100000">$100,000</option>
                  <option value="125000">$125,000</option>
                  <option value="150000">$150,000</option>
                  <option value="175000">$175,000</option>
                  <option value="200000">$200,000</option>
                  <option value="225000">$225,000</option>
                  <option value="250000">$250,000</option>
                  <option value="275000">$275,000</option>
                  <option value="300000">$300,000</option>
                  <option value="325000">$325,000</option>
                  <option value="350000">$350,000</option>
                  <option value="400000">$400,000</option>
                  <option value="450000">$450,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="2000000">$2,000,000</option>
                </select>
              </div>
              <div style="float:left; margin-left:10px;height:28px;">
                <div><a style="font-size: 13px;color: white">Max Price</a></div>

                <select name="qmaxprice" style="color:#000; width:100px;height:28px;background-color: white">
                  <option value="0">No Max</option>
                  <option value="750">$ 750</option>
                  <option value="1000">$ 1,000</option>
                  <option value="1250">$ 1,250</option>
                  <option value="1500">$ 1,500</option>
                  <option value="2000">$ 2,000</option>
                  <option value="3000">$ 3,000</option>
                  <option value="5000">$ 5,000</option>
                  <option value="10000">$ 10,000</option>
                  <option value="50000">$ 50,000</option>
                  <option value="75000">$ 75,000</option>
                  <option value="100000">$100,000</option>
                  <option value="125000">$125,000</option>
                  <option value="150000">$150,000</option>
                  <option value="175000">$175,000</option>
                  <option value="200000">$200,000</option>
                  <option value="225000">$225,000</option>
                  <option value="250000">$250,000</option>
                  <option value="275000">$275,000</option>
                  <option value="300000">$300,000</option>
                  <option value="325000">$325,000</option>
                  <option value="350000">$350,000</option>
                  <option value="400000">$400,000</option>
                  <option value="450000">$450,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1500000">$1,500,000</option>
                  <option value="5000000">$5,000,000</option>
                </select>
              </div>
              <div style="float:left; margin-left:10px;">
                <div><a style="font-size: 13px;color: white">Beds</a></div>
                <select name="qbeds"
                        style="color:#000; font-weight:normal; width:60px; height:28px;background-color: white">
                  <option value="0">any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                  <option value="7">7+</option>
                </select>
              </div>
              <div style="float:left; margin-left:10px;">
                <div><a style="font-size: 13px;color: white">Baths</a></div>
                <select name="qbaths"
                        style="color:#000;font-weight:normal; width:60px;height:28px;background-color: white">
                  <option value="0">any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          </div>
          <div style="display: flex" class="pa-3">
            <div style="width: 40%">
              <div style="display: flex" class="pa-3">
                <input type="checkbox" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">일반주택 (Single-Family)</label>
              </div>
              <div style="display: flex" class="pa-3">
                <input type="checkbox" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">타운하우스 (Townhouse)</label>
              </div>
              <div style="display: flex" class="pa-3">
                <input type="checkbox" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">콘도 (Condo)</label>
              </div>
            </div>
            <div style="width: 40%">
              <div style="display: flex" class="pa-3">
                <input type="radio" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">매매 (Sale)</label>
              </div>
              <div style="display: flex" class="pa-3">
                <input type="radio" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">렌트 (Rent)</label>
              </div>
              <div style="display: flex" class="pa-3">
                <input type="radio" id="test" style="align-self: center">
                <label for="test" style="font-size: 13px;padding-top: -10px">오픈하우스 (Openhouse)</label>
              </div>
            </div>
            <div style="width: 20%">
              <div class="btnsearch">
                <span style="line-height: 120px;color: #fcdbd8; font-size: larger;font-weight: bolder">Search</span>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col cols="9">

          <v-container>
            <v-card class="rectradius1">
              <div style="border-bottom: dashed grey 1px; text-align: center;padding: 5px">
                <h4>Residential Exclusive Listings</h4>
              </div>
              <div>
                <house-list></house-list>
              </div>
            </v-card>
            <v-row>
              <v-col cols="6">
                <v-card class="rectradius">
                  <div style="border-bottom: dashed grey 1px">
                    <h3 style="text-align: center;">Realty News</h3>
                  </div>
                  <div style="border-bottom: dashed grey 1px; padding: 10px 0 10px 0;display: flex">
                    <div style="align-self: center">
                      <v-img
                        :src="require('../assets/pic/user1.jpg')"
                        width="60"></v-img>
                    </div>
                    <div>
                      <h4>가을철 집 관리</h4>
                      <div>
                        <h5 style="color: #b1a9a9">10월, 완연한 가을로 접어들었다. 수확의 계절, 결실을 돕는 가을햇빛이 사람에게 주는 영향은 크다.그래서 사람들</h5>
                      </div>
                    </div>

                  </div>
                  <ul style="font-size: 13px; color: #4c4141;">
                    <li class="pt-2">
                      캐피탈
                    </li>
                    <li class="pt-1">
                      다운사이징
                    </li>
                    <li class="pt-1">
                      비즈니스
                    </li>
                  </ul>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="rectradius">
                  <div style="border-bottom: dashed grey 1px;align-self: center">
                    <div style="display: flex;margin: auto; width: fit-content">
                      <v-icon class="pr-2" style="font-size: 20px">
                        fas fa-crown
                      </v-icon>
                      <h3 style="text-align: center;">Realty News</h3>
                    </div>
                  </div>
                  <div style="padding: 10px 0 10px 0;display: flex">
                    <div style="display: flex;justify-content: space-around; width: 100%">
                      <div style="align-self: center;text-align: center">
                        <v-img
                          :src="require('../assets/pic/user1.jpg')"
                          width="90"></v-img>
                        <h5>진정숙</h5>
                      </div>
                      <div style="align-self: center; text-align: center">
                        <v-img
                          :src="require('../assets/pic/user1.jpg')"
                          width="90"></v-img>
                        <h5>허윤정</h5>
                      </div>
                    </div>
                  </div>
                  <div style="display: flex;justify-content:center;">
                    <div class="px-2" style="border-right: solid grey 2px">
                      <h5>페어팩스 에이전트</h5>
                    </div>
                    <div class="px-2" style="border-right: solid grey 2px">
                      <h5>락빌</h5>
                    </div>
                    <div class="px-2">
                      <h5>볼티모어</h5>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-card class="rectradius1">
              <div class="pa-4">
                <h3>비지니스 추천매물</h3>
              </div>
              <div class="pa-4">
                <v-tabs
                  v-model="tab"
                  background-color="black accent-4"
                  centered
                  grow
                  dark
                  icons-and-text
                >
                  <v-tab>
                    식당/카페
                    <v-icon>mdi-silverware-fork-knife</v-icon>
                  </v-tab>

                  <v-tab>
                    리커/마켓
                    <v-icon>mdi-cart-variant</v-icon>
                  </v-tab>

                  <v-tab>
                    세탁소/코인런드리
                    <v-icon>mdi-washing-machine</v-icon>
                  </v-tab>
                  <v-tab>
                    미용/재료상
                    <v-icon>mdi-hair-dryer</v-icon>
                  </v-tab>
                  <v-tab-item>
                    <div style="display: flex;justify-content: space-between" class="pa-4">
                      <div style="width: 100px">
                        <v-img :src="require('../assets/img/e2_Restaurant.jpg')" style="width: 100px"/>
                      </div>
                      <div>Artesia,CA,월매상 : $30,000</div>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div style="display: flex;justify-content: space-between" class="pa-4">
                      <div style="width: 100px">
                        <v-img :src="require('../assets/img/e2_market.jpg')" style="width: 100px"/>
                      </div>
                      <div>Palm Spring,CA,월매상 : $27,000</div>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div style="display: flex;justify-content: space-between" class="pa-4">
                      <div style="width: 100px">
                        <v-img :src="require('../assets/img/e2_laundry.jpg')" style="width: 100px"/>
                      </div>
                      <div>Flxeeddsd,CA,월매상 : $3000</div>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div style="display: flex;justify-content: space-between" class="pa-4">
                      <div style="width: 100px">
                        <v-img :src="require('../assets/img/e2_beauty.jpg')" style="width: 100px"/>
                      </div>
                      <div>Baesia,CA,월매상 : $12,000</div>
                    </div>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-card>
          </v-container>
        </v-col>
        <v-col cols="3">
          <div class="pt-4">
            <v-card class="rectradius1 pt-4">
              <div style="text-align: center">
                <h4>Mortgage Calculator</h4>
              </div>
              <div style="display: flex;" class="pt-6">
                <div style="width: 50%; align-self: center">
                  <h5>Home Price</h5>
                </div>
                <div style="width: 50%">
                  <v-text-field
                    outlined
                    prepend-inner-icon="fas fa-dollar-sign"
                    dense
                    hide-details
                    class="custom_input"
                  ></v-text-field>
                </div>
              </div>
              <div style="display: flex;" class="pt-6">
                <div style="width: 50%; align-self: center">
                  <h5>Down Payment</h5>
                </div>
                <div style="width: 50%">
                  <v-text-field
                    outlined
                    prepend-inner-icon="fas fa-dollar-sign"
                    dense
                    hide-details
                    class="custom_input"
                  ></v-text-field>
                </div>
              </div>
              <div style="display: flex;" class="pt-6">
                <div style="width: 50%; align-self: center">
                  <h5>Interest Rate</h5>
                </div>
                <div style="width: 50%">
                  <v-text-field
                    outlined
                    append-icon="%"
                    dense
                    hide-details
                    class="custom_input"
                  ></v-text-field>
                </div>
              </div>
              <div style="display: flex;" class="pt-6">
                <div style="width: 50%; align-self: center">
                  <h5>Mortgage Term</h5>
                </div>
                <div style="width: 50%">
                  <v-text-field
                    outlined

                    dense
                    hide-details
                    class="custom_input"
                  >
                    <template #append>
                      <div style="color: gray;font-size: 12px;font-weight: 100" class="pt-2 pr-2">
                        year
                      </div>
                    </template>
                  </v-text-field>
                </div>
              </div>
              <div style="display: flex;" class="pt-6">
                <div style="width: 50%; align-self: center">
                  <h5>Start Date</h5>
                </div>
                <div style="width: 50%">
                  <v-menu
                    ref="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        class="custom_input"
                        outlined
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      type="month"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
              <div class="pt-8" style="text-align: center;cursor: pointer; text-decoration: underline"
                   @click="isExtraPayment=!isExtraPayment">
                <h5 v-show="!isExtraPayment">Add extra payments</h5>
                <h5 v-show="isExtraPayment">Remove extra payments</h5>
              </div>
              <transition name="fade">
                <div v-if="isExtraPayment">
                  <div class="pt-8" style="display: flex">
                    <div style="width: 50%">
                      <h5>To monthly</h5>
                    </div>
                    <div style="width: 50%">
                      <v-text-field
                        outlined
                        prepend-inner-icon="fas fa-dollar-sign"
                        dense
                        hide-details
                        class="custom_input"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="pt-6" style="display: flex">
                    <div style="width: 50%">
                      <h5>Extra yearly</h5>
                    </div>
                    <div style="width: 50%">
                      <v-text-field
                        outlined
                        prepend-inner-icon="fas fa-dollar-sign"
                        dense
                        hide-details
                        class="custom_input"
                      ></v-text-field>
                    </div>
                  </div>
                </div>
              </transition>

              <div class="pt-8" style="display: flex;justify-content: center">
                <v-btn style="width: 100%;background-color: lightskyblue">
                  Calculate
                </v-btn>
              </div>
            </v-card>
            <div style="display: flex;justify-content: center" class="pt-6">
              <a href="https://mortgage-advice-online.org" target="_blank">mortgage-advice-online.org</a>
            </div>
            <HomeReference v-for="(item,index) in homeRef" :ref-data="item" :key="index" class="mt-6"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// @ is an alias to /src

import HouseList from "@/components/HouseList";
import CommunityList from "@/components/CommunityList";
import RadioList from "@/components/RadioList";
import BusinessList from "@/components/BusinessList";
import homeReference1 from "@/Models/HomeReference";
import HomeReference from "@/components/HomeReference";

export default {
  name: 'Home',
  components: {HomeReference, CommunityList, HouseList, RadioList, BusinessList},
  data: () => ({
    isExtraPayment: false,
    homeRef: homeReference1,
    tab: null
  })
}
</script>
