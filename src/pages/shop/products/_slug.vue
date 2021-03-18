<template>
  <ShopPageProduct :product="product" layout="standard" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IProduct } from "~/interfaces/product";
import shopApi from "~/api/shop";
import ShopPageProduct from "~/components/shop/shop-page-product.vue";
import { NuxtAxiosInstance } from "@nuxtjs/axios";
@Component({
  components: { ShopPageProduct },
  async asyncData({ route }): Promise<{ product: IProduct }> {
    return {
      product: await shopApi.getProductBySlug(route.params.slug),
    };
  },
  mounted() {
    // window["test"] = this;
    this.$axios.$get("http://localhost:8000/products/1").then((res) => {
      console.log(res);
      Object.assign((this as Page).product, res);
      //    {
      //     fields: [
      //       { key: "key1", val: "val1" },
      //       { key: "key2", val: "val2" },
      //       { key: "key3", val: "val3" },
      //       { key: "key4", val: "val4" },
      //     ],
      //     id: 123,
      //     slug: "string",
      //     name: "string",
      //     price: 1534,
      //     compareAtPrice: null,
      //     brand: null,
      //     reviews: 1548,
      //     rating: 5,
      //     attributes: [],
      //     availability: "string",
      //   }
    });
  },
})
export default class Page extends Vue {
  product: IProduct = null!;
}
</script>
